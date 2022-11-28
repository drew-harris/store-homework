import { createContext, useState } from "react";

export const CartContext = createContext({
  addToCart: (product) => {},
  cart: {
    items: [],
    total: 0,
  },
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    total: 0,
  });

  const addToCart = (product) => {
    console.log("Adding to cart");
    let _cart = { ...cart };
    let existing = _cart.items.find((x) => x.product.id === product.id);
    if (existing) {
      existing.quantity += 1;
      existing.totalPrice = existing.product.price * existing.quantity;
    } else {
      _cart.items.push({ product, quantity: 1, totalPrice: product.price });
    }

    _cart.total = _cart.items.map((x) => x.totalPrice).reduce((x, y) => x + y);
    setCart(_cart);
  };
  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
