import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RandContext = createContext("money");

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const handleBuy = () => {
    setHouse(house + 1);
  };
  const gift = "Platinum Ring";
  const money = 34500;
  return (
    <RandContext.Provider value={money}>
      <div className="grandpa">
        <h2>Grandpa</h2>
        <p>House: {house}</p>
        <button onClick={handleBuy}>Buy a house</button>
        <div style={{ display: "flex" }}>
          <Father house={house} gift={gift}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RandContext.Provider>
  );
};

export default Grandpa;
