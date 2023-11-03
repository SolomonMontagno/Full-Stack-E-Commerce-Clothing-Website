import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, ProductToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === ProductToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === ProductToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }
  return [...cartItems, { ...ProductToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }
        return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1 } 
        : cartItem
        )
    }
    
    const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
    

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cardCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cardCount, setCardCount] = useState(0);

    useEffect(() => {
        const newCardCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCardCount(newCardCount);
    }, [cartItems]);

  const addItemToCart = (ProductToAdd) => {
    setCartItems(addCartItem(cartItems, ProductToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

    const clearItemFromCart = (cartItemToClear) => {
      setCartItems(clearCartItem(cartItems, cartItemToClear));
    };
    
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cardCount, 
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
