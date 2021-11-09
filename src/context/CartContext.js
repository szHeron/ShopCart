import React, { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }){
  const [cart, setCart] = useState([]);

    function AddCart(newItem, qtd) {
      if(!cart.find((temp)=>{return temp.item.id === newItem.id}))
        setCart(oldArray => [...oldArray, {item: newItem, amount: 1}])
      RemoveCart(newItem.id);
      setCart(oldArray => [...oldArray, {item: newItem, amount: !qtd?1:qtd}])
    }

    function RemoveCart(id) {
      setCart(cart.filter(temp => temp.item.id !== id));
    }

    function GetAmount() {
      return cart.length;
    }

  return(
    <CartContext.Provider value={{
        AddCart,
        RemoveCart,
        GetAmount,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext;