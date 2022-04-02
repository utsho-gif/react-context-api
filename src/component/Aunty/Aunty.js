import React, { useContext } from 'react';
import { GiftContext } from '../Grandpa/Grandpa';

const Aunty = ({house}) => {
   
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <p></p>
        </div>
    );
};

export default Aunty;