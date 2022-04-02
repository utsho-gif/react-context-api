import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeCart }) => {
    let command;
    if(cart.length === 0){
        command = <p>Let's add something from shop.</p>
    }
    else if(cart.length === 1){
        command = <p>You're so picky. Pick more to the cart.</p>
    }
    else if(cart.length === 5){
        command = <p>Woah...you're a strom. let's gooooooooooooooooooooo</p>
    }
    else{
        command = <p>Thanks for adding</p>
    }
  return (
    <div>
      <h2>Added Product: {cart.length}</h2>
      
      {cart.map((tShirt) => (
        <h4>
          {tShirt.name}
          <button onClick={() => removeCart(tShirt)}>X</button>
        </h4>
      ))}
      {command}
      {cart.length === 4 ? <button>Confirm</button> : <p>You're good to go</p>}
    </div>
  );
};

export default Cart;
