import React, { useContext } from 'react';
import { RandContext } from '../Grandpa/Grandpa';

const Special = () => {
    const money = useContext(RandContext);
    return (
        <div>
            <h5>Special One</h5>
            <p>{money}</p>
        </div>
    );
};

export default Special;