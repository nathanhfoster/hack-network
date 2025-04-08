'use client';

import { useCallback, useEffect, useState } from 'react';
import { useContext } from 'use-context-selector';

import {
  BeforeInstallPromptEvent,
  InstallPromptContextType,
  ServerWorkerUpdateType,
} from './types';
import useNavigator from '../../hooks/useNavigator';
import useEventListener from '../../hooks/useEventListener';
import isClientSide from '../../utils/isClientSide';
import { InstallPromptContext } from './index';

export const useInstallPrompt = (): InstallPromptContextType => {
  const context = useContext(InstallPromptContext);

  if (!context) {
    throw new Error(
      'useInstallPrompt must be used within InstallPromptProvider',
    );
  }
  return context;
};

export const useGenerateLink = () => {
  const { deferredPrompt, handleInstallClick } = useInstallPrompt();

  const { userAgent, isMobile } = useNavigator();

  const generateLink = useCallback(() => {
    if (deferredPrompt?.userChoice) {
      handleInstallClick();
    }
    return;
  }, [deferredPrompt?.userChoice, handleInstallClick, userAgent, isMobile]);

  return {
    userAgent,
    isMobile,
    deferredPrompt,
    handleInstallClick,
    generateLink,
  };
};

export const useServiceWorkerUpdate = (): ServerWorkerUpdateType => {
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null,
  );

  const unregisterServiceWorkers = useCallback(() => {
    if (!isClientSide(true)) {
      return;
    }

    // Get all service worker registrations
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        console.log({ registration });
        // If the registration is no longer needed (e.g., an outdated service worker), unregister it
        if (registration?.active?.state === 'redundant') {
          console.log('Unregistering redundant service worker...');
          registration.unregister();
        }
      });
    });
  }, []);

  const activateUpdate = useCallback(() => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  }, [waitingWorker]);

  const checkForUpdate = useCallback(
    (registration: ServiceWorkerRegistration) => {
      const newWorker = registration.installing || registration.waiting;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (
            newWorker.state === 'installed' &&
            navigator.serviceWorker.controller
          ) {
            setWaitingWorker(newWorker);
          }
        });
      }
    },
    [],
  );

  const handleControllerChange = useCallback(() => {
    if (!isClientSide(true)) {
      return;
    }

    window.location.reload();
  }, []);

  useEventListener('controllerchange', handleControllerChange);

  useEffect(() => {
    if (!isClientSide(true)) {
      return;
    }

    // Unregister any redundant or outdated service workers
    unregisterServiceWorkers();

    navigator.serviceWorker.getRegistration().then((existingRegistration) => {
      if (existingRegistration) {
        // If already registered, check for updates instead of re-registering
        existingRegistration.update();
        checkForUpdate(existingRegistration);
      } else {
        // Register only if no previous registration exists
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => checkForUpdate(registration))
          .catch((error) =>
            console.error('Service Worker registration failed:', error),
          );
      }
    });
  }, [checkForUpdate, unregisterServiceWorkers]);

  return { waitingWorker, activateUpdate, unregisterServiceWorkers };
};

export const useInstallPromptHandler = (): InstallPromptContextType => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const { waitingWorker, activateUpdate, unregisterServiceWorkers } =
    useServiceWorkerUpdate();

  const handleBeforeInstallPrompt = useCallback(
    (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    },
    [],
  );

  const handleInstallClick = useCallback(async () => {
    if (!deferredPrompt) {
      return;
    }

    try {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      console.log(`User response to install prompt: ${choiceResult.outcome}`);
    } catch (error) {
      console.error('Error prompting install:', error);
    } finally {
      setDeferredPrompt(null);
    }
  }, [deferredPrompt]);

  useEventListener(
    'beforeinstallprompt',
    handleBeforeInstallPrompt as EventListener,
  );

  // Only trigger update once the waiting worker is confirmed
  useEffect(() => {
    if (waitingWorker) {
      if (confirm('A new update is available. Do you want to refresh?')) {
        activateUpdate();
      }
    }
  }, [activateUpdate, waitingWorker]);

  return {
    deferredPrompt,
    handleInstallClick,
    waitingWorker,
    activateUpdate,
    unregisterServiceWorkers,
  };
};
