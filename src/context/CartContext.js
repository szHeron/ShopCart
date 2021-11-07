import React, { Children, createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }){
  const [cart, setCart] = useState([]);

    function AddCart(item) {
      if(!cart.find((temp)=>{return temp.id === item.id}))
        setCart(oldArray => [...oldArray, item])
    }

    function RemoveCart(id) {
      setCart(cart.filter(item => item.id !== id));
    }

  return(
    <CartContext.Provider value={{
        AddCart,
        RemoveCart,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext;