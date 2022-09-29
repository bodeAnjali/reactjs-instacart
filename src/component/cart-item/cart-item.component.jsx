import React, { useState, useContext, useEffect } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

import { GrAdd } from 'react-icons/gr';
import { IoIosRemove } from 'react-icons/io';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiPencil } from 'react-icons/bi';
import SkeletonCart from "../skeleton/skeleton-cart";


const CartItem = ({ item }) => {
    const { icon, cartprice, name, quantity, weight } = item;
    const [isHovering, setIsHovering] = useState(false);
    const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 10000)
    }, [])

    const handleMouseEnter = () => {
        setIsHovering(true)

    }

    const handleMouseRemove = () => {
        setIsHovering(false)
    }
    return (<div>
        {!isLoading ? (
            <div className="w-full flex h-20 p-4 mt-4">
                <img src={icon} alt='item' className="w-14 h-14" />

                <div className='w-[25rem] flex'>

                    <div className="flex-col">
                        <p className='text-sm text-gray-500 ml-3 w-60 mr-8'>{name}</p>
                        <p className='text-gray-500  text-xs ml-3 mt-1'>{weight}</p>

                        <div className="flex p-2 w-60 cursor-pointer">
                            <div className="w-full h-8 flex">
                                <BiPencil className="text-green-600 w-1/4" />
                                <span className="text-sm w-4 ml-2">Preference</span>
                            </div>

                            <div className="w-full h-8 flex" onClick={() => clearItemFromCart(item)}>
                                <RiDeleteBin5Line className="text-green-600 w-1/4" />
                                <span className="text-sm w-4 ml-2">Remove</span>
                            </div>
                        </div>
                    </div>


                    <div className="flex w-60">
                        <div className='text-center h-10 w-20 p-2 border-[1px] border-gray-300 -ml-8' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseRemove}>
                            {quantity}
                        </div>
                        <div className={`${isHovering ? "text-center h-10 w-20 -ml-8 p-2 border-[1px] border-gray-300 absolute flex justify-between" : "invisible"}`}>
                            <IoIosRemove className=" text-black mt-[0.2rem]" onClick={() => removeItem(item)} />
                            {quantity}
                            <GrAdd className=" text-black mt-[0.2rem]" onClick={() => addItem(item)} />
                        </div>
                    </div>

                    <div className="mt-2 w-12 h-6">
                        ${cartprice}
                    </div>

                </div>
            </div>)
            :
            (<SkeletonCart />)
        }

    </div>
    )
};

export default CartItem;