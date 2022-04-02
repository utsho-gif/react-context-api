import React, { useState } from "react";
import "./Home.css";
import "../Cart/Cart.css";
import useTShirts from "../../hooks/useTShirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";

const Home = () => {
  const [tShirts, setTShirts] = useTShirts();
  const [cart, setCart] = useState([]);

  const addCart = (selectedItem) => {
    const exist = cart.find((tShirt) => tShirt._id === selectedItem._id);
    if (!exist) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    }
    else{
        alert(`${selectedItem.name} is already exist. Don't try to push it harder ;)`)
    }
  };

  const removeCart = (selectedItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== selectedItem._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((tShirt) => (
          <TShirt key={tShirt._id} tShirt={tShirt} addCart={addCart}></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeCart={removeCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
