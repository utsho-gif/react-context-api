import React, { useContext } from 'react';
import { GiftContext } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    return (
        <div>
            <h4>Sister</h4>
            <p>House: {house}</p>
            <p></p>
        </div>
    );
};

export default Sister;