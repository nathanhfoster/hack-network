# resurrection

A lightweight state management library that follows Flux/Redux architecture but uses React's latest `useContext` and `useReducer` hooks. It provides a simple and efficient way to manage global state in React applications.

## Features

- Type-safe context and state management
- Redux-like action creators and reducers
- React hooks for state access and dispatch
- Simple and complex context providers
- Automatic state initialization
- Redux-like connect HOC for class components

## Installation

```bash
npm install @di-websites-modern/resurrection
# or
yarn add @di-websites-modern/resurrection
```

## Basic Usage

### 1. Create a Context

```typescript
import { createContextWithName } from '@di-websites-modern/resurrection'

interface AppState {
  items: Item[]
  filters: FilterState
}

interface Item {
  id: string
  title: string
  price: number
  status: 'active' | 'inactive'
}

interface FilterState {
  category: string
  sortBy: 'price' | 'date'
}

const initialState = {
  items: [],
  filters: {
    category: 'all',
    sortBy: 'date'
  }
}

const AppContext = createContextWithName<AppState, AppActions>(
  'App',
  initialState
)
```

### 2. Create a Context Provider

```typescript
import { Provider } from '@di-websites-modern/resurrection'

const AppContextProvider: FC<AppContextProviderProps> = ({
  children,
  ...restOfProps
}) => {
  return (
    <Provider<AppState, AppActions>
      {...restOfProps}
      StateContext={AppStateContext}
      reducer={appReducer}
      initializer={getInitialState}
      DispatchContext={AppDispatchContext}
    >
      {children}
    </Provider>
  )
}
```

### 3. Create a Simple Provider (for static data)

```typescript
const AppSimpleProvider: FC<{
  initialState: AppState
  children: React.ReactNode
}> = ({ initialState, children }) => {
  return (
    <AppStateContext.Provider value={initialState}>
      {children}
    </AppStateContext.Provider>
  )
}
```

### 4. Use the Context in Components

#### Using Hooks (Recommended for Functional Components)

```typescript
import { useAppSelector, useAppDispatch } from './contexts/AppContext'

const ItemList = () => {
  const items = useAppSelector((state) => state.items)
  const filters = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch()

  const filteredItems = items.filter(item => 
    filters.category === 'all' || item.category === filters.category
  )

  return (
    <div>
      {filteredItems.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}
```

#### Using Connect HOC (For Class Components or Legacy Code)

```typescript
import { connect, AppStateContext } from '@di-websites-modern/resurrection'

interface ItemDetailProps {
  item: Item | undefined
}

interface ItemDetailOwnProps {
  id: string
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item }) => {
  if (!item) return null

  return (
    <div className="p-8 bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <div className="mt-4">
        <span className="text-xl font-semibold">${item.price}</span>
        <span className={`ml-2 px-2 py-1 rounded ${item.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {item.status}
        </span>
      </div>
    </div>
  )
}

export default connect<
  ItemDetailProps,
  {}, // MapDispatchToProps
  ItemDetailOwnProps
>({
  mapStateToPropsOptions: [
    {
      context: AppStateContext,
      mapStateToProps: (state: AppState, ownProps) => ({
        item: state.items.find(item => item.id === ownProps.id)
      })
    }
  ]
})(ItemDetail)

// Usage
const App = () => (
  <div>
    <ItemDetail id="123" />
  </div>
)
```

## Example Implementation

Here's a complete example of implementing a context for managing a shopping cart:

```typescript
// types.ts
export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

export interface CartState {
  items: CartItem[]
  total: number
  isOpen: boolean
}

export type CartActions = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'TOGGLE_CART' }

export type CartContextState = ContextStore<CartState>

// index.tsx
export const CartContext = createContextWithName<CartContextState, CartActions>(
  'Cart',
  { items: [], total: 0, isOpen: false }
)

export const CartProvider: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <Provider<CartState, CartActions>
      StateContext={CartStateContext}
      reducer={cartReducer}
      initializer={getCartInitialState}
      DispatchContext={CartDispatchContext}
    >
      {children}
    </Provider>
  )
}

// Usage in a layout
const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <Header />
      <main>{children}</main>
      <CartSidebar />
    </CartProvider>
  )
}
```

## API Reference

### ContextProvider Props

```typescript
interface ContextProviderProps<T> {
  name?: string
  context?: React.Context<T>
  reducers?: Function | Object
  initialState?: Object
  props?: Object
  initializer?: Function
  children: React.ReactNode
}
```

### Hooks

- `useSelector`: Select and subscribe to state changes
- `useDispatch`: Get the dispatch function for actions

### Connect HOC

The `connect` HOC provides a Redux-like API for connecting components to the context:

```typescript
connect<MapStateToProps, MapDispatchToProps, OwnProps>({
  mapStateToPropsOptions: [
    {
      context: Context,
      mapStateToProps: (state, ownProps) => ({ /* ... */ })
    }
  ]
})(Component)
```

## Development

This library was generated with [Nx](https://nx.dev).

### Running unit tests

Run `nx test resurrection` to execute the unit tests via [Vitest](https://vitest.dev/).

## License

MIT © [nathanhfoster](https://github.com/nathanhfoster)
