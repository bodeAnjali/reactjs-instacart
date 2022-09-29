import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutButton = () => {
    const{ cartTotal } = useContext(CartContext);

    return (
        <Link className='flex mt-24 w-[30rem] h-[3.5rem] ml-2 justify-center fixed text-white bg-green-600 font-semibold p-2 cursor-pointer' to='/checkout'>
            <span className='text-2xl fixed mt-[0.3rem]'>Checkout</span>
            <span className='text-base ml-[25rem] border-gray-600 p-[0.5rem] bg-green-800'>${cartTotal.toFixed(2)}</span>
        </Link>
    )
};

export default CheckoutButton;