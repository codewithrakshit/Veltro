
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  colors: string[];
  sizes: string[];
  description: string;
  highlights: string[];
  collection?: string;
  isNew?: boolean;
}

interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, color: string, size: string) => void;
  removeFromCart: (id: string, color: string, size: string) => void;
  updateQuantity: (id: string, color: string, size: string, newQuantity: number) => void;
  getTotalPrice: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product, color: string, size: string) => {
    const existingItem = cart.find(item => 
      item.id === product.id && item.selectedColor === color && item.selectedSize === size
    );

    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id && item.selectedColor === color && item.selectedSize === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1, selectedColor: color, selectedSize: size }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string, color: string, size: string) => {
    setCart(cart.filter(item => !(item.id === id && item.selectedColor === color && item.selectedSize === size)));
  };

  const updateQuantity = (id: string, color: string, size: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(id, color, size);
    } else {
      setCart(cart.map(item => 
        item.id === id && item.selectedColor === color && item.selectedSize === size
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalPrice,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
