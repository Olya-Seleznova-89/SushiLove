
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.count += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...item, count: 1 }]);
    }
  };

  const increaseCount = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const reduceCount = (itemId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        const newCount = item.count - 1 >= 1 ? item.count - 1 : 1;
        return { ...item, count: newCount };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const totalPrice = () => {
    const total_price = cartItems
      .map((item) => item.price * item.count)
      .reduce((acc, value) => acc + value, 0);
    return total_price;
  };
  
 const totalCount = () => {
    const total_count = cartItems.reduce((acc, item) => acc + item.price, 0);
    return total_count;
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseCount,
        reduceCount,
        totalPrice,
        totalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
