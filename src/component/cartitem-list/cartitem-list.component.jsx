import React, { useContext } from "react";

import { CartContext } from '../../providers/cart/cart.provider';

import CartItem from "../cart-item/cart-item.component";

const CartItemList = ({toggleDrawer}) => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="flex-col overflow-y-auto h-[45rem] bg-white">
            {
                cartItems.length ?
                    (cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    ) : (
                        <div className="flex-col text-center mt-36 ml-6">
                            <img src='https://d2guulkeunn7d8.cloudfront.net/assets/EmptyStateGeneric-3950e2389a69f52d5457206d8ce16636.svg'
                             alt='cart'
                             className="ml-[5.5rem] w-80" 
                             />
                            <div className="text-base text-gray-400">Your personal Cart is empty</div>
                            <p className="text-2xl text-green-600 mt-8  cursor-pointer" onClick={toggleDrawer}>Shop now</p>
                        </div>
                    )
            }
        </div>
    )
};

export default CartItemList;


