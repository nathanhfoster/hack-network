export type LoosePartial<T> = {
  [P in keyof T]?: T[P] | undefined;
};

export interface NextRouterAugmented {
  query: Record<string, string | string[] | undefined>;
  pathname: string;
  asPath: string;
  push: (url: string, as?: string, options?: any) => Promise<boolean>;
  replace: (url: string, as?: string, options?: any) => Promise<boolean>;
  reload: () => void;
  back: () => void;
  prefetch: (url: string) => Promise<void>;
  beforePopState: (cb: (state: any) => boolean) => void;
  events: {
    on: (type: string, handler: (...args: any[]) => void) => void;
    off: (type: string, handler: (...args: any[]) => void) => void;
    emit: (type: string, ...args: any[]) => void;
  };
  isFallback: boolean;
} 