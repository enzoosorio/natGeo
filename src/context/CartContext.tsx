import React, { createContext, useContext, useReducer, useCallback } from 'react';
import { CartItem, Product } from '../types';
import toast from 'react-hot-toast'

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        const newState = {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
        return newState;
      }
      const newState = {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
      return newState;
    }
    case 'REMOVE_FROM_CART': {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      const newState = {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (itemToRemove ? itemToRemove.price * itemToRemove.quantity : 0),
      };
      return newState;
    }
    case 'UPDATE_QUANTITY': {
      const item = state.items.find(item => item.id === action.payload.id);
      if (!item) return state;
      const quantityDiff = action.payload.quantity - item.quantity;
      const newState = {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.total + (item.price * quantityDiff),
      };
      return newState;
    }
    default:
      return state;
  }
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  const wrappedDispatch = useCallback((action: CartAction) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          toast.success(`Se agregó otro ${action.payload.title} al carrito`);
        } else {
          toast.success(`${action.payload.title} agregado al carrito`);
        }
        break;
      case 'REMOVE_FROM_CART':
        const itemToRemove = state.items.find(item => item.id === action.payload);
        if (itemToRemove) {
          toast.success(`${itemToRemove.title} eliminado del carrito`);
        }
        break;
    }
    dispatch(action);
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch: wrappedDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}