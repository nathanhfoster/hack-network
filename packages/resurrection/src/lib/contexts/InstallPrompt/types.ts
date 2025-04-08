type Platform = 'web' | 'play';

export interface BeforeInstallPromptEvent extends Event {
  /**
   * Returns a Promise that resolves with a user choice result.
   * A string indicating whether the user chose to install the app or not. It must be one of the following values:
   * "accepted": The user installed the app.
   * "dismissed": The user did not install the app.
   */
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;

  /**
   * Returns the platform on which the prompt is being displayed.
   * The platforms property of the BeforeInstallPromptEvent interface lists the platforms on which the event was dispatched.
   * This is provided for user agents that want to present a choice of versions to the user such as,
   * for example, "web" or "play" which would allow the user to choose between a web version or an Android version.
   */
  platforms: Platform[];

  /**
   * Prompts the user to install the web application.
   * The promise resolves after the user selects one of the options in the prompt.
   */
  prompt(): Promise<void>;
}

export interface ServerWorkerUpdateType {
  waitingWorker: ServiceWorker | null;
  activateUpdate: () => void;
  unregisterServiceWorkers: () => void;
}

export interface InstallPromptContextType extends ServerWorkerUpdateType {
  deferredPrompt: BeforeInstallPromptEvent | null;
  handleInstallClick: () => Promise<void>;
}

export interface InstallPromptProviderProps {
  children: React.ReactNode;
}
