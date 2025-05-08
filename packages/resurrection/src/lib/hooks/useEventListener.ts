'use client';

// original source - https://github.com/donavon/use-event-listener/blob/develop/src/index.js

import { isClientSide } from '../utils';
import { useEffect, useRef } from 'react';

type ElementOrWindow = HTMLElement | (Window & typeof globalThis);
type ElementOption = ElementOrWindow | undefined | null;

const useEventListener = <T extends Event = Event>(
  eventName: string,
  handler: (event: T) => void,
  options?: AddEventListenerOptions,
  element: ElementOption = isClientSide() ? window : undefined,
) => {
  const savedHandler = useRef<(event: T) => void>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Make sure element supports addEventListener
    // On
    const isSupported = element && element.addEventListener;

    if (!isSupported) return;

    const eventListener = (event: Event) => savedHandler.current(event as T);

    element.addEventListener(eventName, eventListener, options);

    return () => {
      element.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, element, options]);
};

export default useEventListener;

// Usage

// function App(){
//   // State for storing mouse coordinates
//   const [coords, setCoords] = useState({ x: 0, y: 0 });

//   // Event handler utilizing useCallback ...
//   // ... so that reference never changes.
//   const handler = useCallback(
//     ({ clientX, clientY }) => {
//       // Update coordinates
//       setCoords({ x: clientX, y: clientY });
//     },
//     [setCoords]
//   );

//   // Add event listener using our hook
//   useEventListener('mousemove', handler);

//   return (
//     <h1>
//       The mouse position is ({coords.x}, {coords.y})
//     </h1>
//   );
// }
