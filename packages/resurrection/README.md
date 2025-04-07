# resurrection

A lightweight state management library that follows Flux/Redux architecture but uses React's latest `useContext` and `useReducer` hooks. It provides a simple and efficient way to manage global state in React applications.

## Features

- Type-safe context and state management
- Redux-like action creators and reducers
- React hooks for state access and dispatch
- Simple and complex context providers
- Automatic state initialization
- Redux-like connect HOC for components

## Installation

```bash
npm install resurrection
# or
yarn add resurrection
```

## Basic Usage

### 1. Define Types and Create Reducer

First, define your state types and create a reducer using `createSlice`:

```typescript
import { createSlice, Draft, ContextStoreInitializer } from 'resurrection';

interface AppState {
  users: User[];
  settings: Settings;
}

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface Settings {
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
}

// Define initial state
const initialState: AppState = {
  users: [],
  settings: {
    theme: 'light',
    language: 'en',
    notifications: true,
  },
};

// Create initializer function
export const getInitialState: ContextStoreInitializer<any, AppState> = (initialState) => {
  return {
    ...appInitialState,
    ...initialState,
  };
};

// Define reducer actions
const SetUsers = (state: Draft<AppState>, users: User[]) => {
  state.users = users;
};

const UpdateUser = (state: Draft<AppState>, user: User) => {
  const index = state.users.findIndex((u) => u.id === user.id);
  if (index !== -1) {
    state.users[index] = user;
  }
};

const UpdateSettings = (state: Draft<AppState>, settings: Partial<Settings>) => {
  state.settings = {
    ...state.settings,
    ...settings,
  };
};

// Create the reducer
export const appSlice = createSlice({
  name: 'App',
  initialState,
  actions: {
    SetUsers,
    UpdateUser,
    UpdateSettings,
  },
});
```

### 2. Create Context and Provider

Next, create your context and provider using the reducer:

```typescript
import { FC, Reducer } from 'react';
import {
  createContextWithName,
  Provider,
  ReducerActionCreators,
} from 'resurrection';

import { getInitialState, initialState, appSlice } from './reducer';
import { AppState } from './types';

// Get action creators
export const appContextActions = appSlice.actions;

// Define actions type
type AppActions = ReducerActionCreators<typeof appContextActions, 'App'>;

// Create context
export const AppContext = createContextWithName<AppState, AppActions>(
  'App',
  initialState
);

// Destructure context utilities
export const {
  StateContext: AppStateContext,
  useSelector: useAppSelector,
  DispatchContext: AppDispatchContext,
  useDispatch: useAppDispatch,
} = AppContext;

// Create provider component
export const AppContextProvider: FC<{
  children: React.ReactNode;
  initialState?: AppState;
}> = ({ children, ...restOfProps }) => {
  return (
    <Provider
      {...restOfProps}
      StateContext={AppStateContext}
      reducer={appSlice.reducer as unknown as Reducer<AppState, AppActions>}
      initializer={getInitialState}
      DispatchContext={AppDispatchContext}
    >
      {children}
    </Provider>
  );
};
```

### 3. Use in Your Application

Finally, wrap your application with the provider and use the context:

```typescript
// In your root layout or app component
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch initial state (e.g., from API)
  const initialState = await getInitialData();

  return (
    <AppContextProvider initialState={initialState}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AppContextProvider>
  );
}

// In your components
const UserList = () => {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
```

## API Reference

### createSlice

Creates a reducer with typed actions:

```typescript
createSlice({
  name: string;
  initialState: State;
  actions: {
    [key: string]: (state: Draft<State>, payload: any) => void;
  };
})
```

### Using the connect HOC

The `connect` HOC provides a way to connect components to your context store, similar to Redux's connect pattern. Here's an example:

```typescript
import { connect, ConnectHookProps, ConnectOptionUseEffectAfterChangeReturn } from 'resurrection';

// Define your component props types
interface AppMapStateToProps {
  items: Item[];
  searchQuery: string;
}

interface AppMapDispatchToProps {
  SetSearchQuery: (query: string) => void;
  SetItems: (items: Item[]) => void;
}

interface AppOwnProps {
  // Any additional props your component needs
}

type AppConnectedProps = AppMapStateToProps & AppMapDispatchToProps & AppOwnProps;

// Your component
const App: React.FC<AppConnectedProps> = ({
  items,
  searchQuery,
  SetSearchQuery
}) => {
  return (
    <div>
      <input
        value={searchQuery}
        onChange={(e) => SetSearchQuery(e.target.value)}
      />
      {/* Rest of your component */}
    </div>
  );
};

// Connect the component
export default connect<
  AppMapStateToProps,
  AppMapDispatchToProps,
  AppOwnProps
>({
  mapStateToPropsOptions: [
    {
      context: AppStateContext,
      mapStateToProps: (state: AppState) => ({
        items: state.items,
        searchQuery: state.searchQuery
      })
    }
  ],
  mapDispatchToPropsOptions: [
    {
      context: AppDispatchContext,
      mapDispatchToProps: {
        SetSearchQuery: appContextActions.SetSearchQuery,
        SetItems: appContextActions.SetItems
      }
    }
  ],
  useHookEffectAfterChange: <T = AppMapStateToProps['searchQuery'],>({
    stateToProps,
    dispatchToProps
  }: ConnectHookProps<
    AppMapStateToProps,
    AppMapDispatchToProps,
    AppOwnProps
  >): ConnectOptionUseEffectAfterChangeReturn<T> => {
    const value = stateToProps.searchQuery as T;
    const callback = dispatchToProps.SetItems;
    const condition = (prevValue: T, value: T) => prevValue !== value;
    return [value, callback, condition];
  }
})(App);
```

The `connect` HOC accepts three type parameters:

1. `TMapStateToProps`: The type of props that will be mapped from state
2. `TMapDispatchToProps`: The type of props that will be mapped from dispatch
3. `TOwnProps`: The type of props that the component accepts directly

The configuration object accepts:

- `mapStateToPropsOptions`: Array of state mapping configurations
- `mapDispatchToPropsOptions`: Array of dispatch mapping configurations
- `useHookEffectAfterChange`: Optional effect hook for handling state changes

### Context Utilities

The context provides several utilities:

- `StateContext`: The context for accessing state
- `DispatchContext`: The context for dispatching actions
- `useSelector`: Hook for selecting state
- `useDispatch`: Hook for dispatching actions

### Provider Props

```typescript
interface ProviderProps<T, A> {
  StateContext: React.Context<T>;
  DispatchContext: React.Context<React.Dispatch<A>>;
  reducer: Reducer<T, A>;
  initializer: ContextStoreInitializer<any, T>;
  initialState?: T;
  children: React.ReactNode;
}
```

## Development

This library was generated with [Nx](https://nx.dev).

### Running unit tests

Run `nx test resurrection` to execute the unit tests via [Vitest](https://vitest.dev/).

## License

MIT © [nathanhfoster](https://github.com/nathanhfoster)
