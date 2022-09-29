import React, { useState, useContext } from "react";

import { IoLocationOutline } from 'react-icons/io5'
import { BiUser } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiTruck } from 'react-icons/fi'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlinePayment } from 'react-icons/md';

import { CartContext } from '../../providers/cart/cart.provider';

import LogIn from "../login/login.component";
import SignUp from "../sign-up/signup.component";
import CheckoutFormInput from "./checkout-forminput/checkout-forminput.component";

const Checkout = () => {


    const { cartTotal, cartItems } = useContext(CartContext);
 
    const items = cartItems.map(object => { return object.icon })

    const [index, setIndex] = useState(1);

    const [resident, setResident] = useState({ address: '', address2: '', business: '', zip: '', instruction: '' })
    const { address, address2, business, zip, instruction } = resident;

    const handleChange = event => {
        const { value, name } = event.target;
        setResident({ ...resident, [name]: value })
    };

    return (
        <div className="flex">
            <div className="w-[50rem] ml-[25rem] mt-8 bg-white">
                <div className="mt-10">
                    <div className="checkout-tabs flex w-[50rem] h-[5.5rem] justify-between  border-b-[1px] border-gray-300">
                        <div className={index === 1 ? "px-4 pt-6 w-[25rem] h-full text-xl text-center border-b-2 border-green-500 text-green-500 cursor-pointer" : "px-4 pt-6 w-[25rem] text-xl text-slate-500 text-center cursor-pointer"} onClick={() => { setIndex(1) }} >
                            Delivery
                        </div>
                        <div className={index === 2 ? "px-4 pt-6 w-[25rem] h-full text-xl text-green-500 text-center border-b-2 border-green-500 cursor-pointer" : "px-4 pt-6 w-[25rem] text-xl text-slate-500 text-center cursor-pointer"} onClick={() => { setIndex(2) }} >
                            Pickup
                        </div>
                    </div>
                </div>


                <div className="fggg" hidden={index !== 1}>
                    <div className="w-[45rem] h-auto pl-8 mt-8">
                        <div className="flex">
                            <IoLocationOutline size={30} className="text-green-500" />
                            <p className="ml-2 mt-[0.2rem] text-base font-semibold text-slate-800">Add delivery address</p>
                        </div>

                        <form className="mt-4">
                            <CheckoutFormInput
                                name="address"
                                type="address"
                                handleChange={handleChange}
                                value={address}
                                label='Address Line 1'
                                required
                            />

                            <CheckoutFormInput
                                name="address2"
                                type="address2"
                                handleChange={handleChange}
                                value={address2}
                                label='Address Line 2(optional)'
                            />

                            <CheckoutFormInput
                                name="business"
                                type="text"
                                handleChange={handleChange}
                                value={business}
                                label='Business Name(optional)'
                            />
                            <CheckoutFormInput
                                name="zip"
                                type="number"
                                handleChange={handleChange}
                                value={zip}
                                label='Zip code'
                                className='zip'
                                required
                            />
                            <CheckoutFormInput
                                name="instruction"
                                type="text"
                                handleChange={handleChange}
                                value={instruction}
                                label='Instructions for delivery(optional)'
                            />
                            <button className="px-16 py-2 ml-[22rem] mt-8 bg-green-500 rounded-md text-white font-medium">Save</button>
                        </form>
                    </div>

                    <div className="flex-col mt-8 w-[100%]">
                        <div className="flex py-6 pl-10 border-t-[1px] border-gray-300">
                            <BiUser size={30} className='text-gray-300' />
                            <p className="text-base text-gray-500 font-bold pl-4 mt-1">Account</p>
                        </div>
                        <div className="flex py-6 pl-10 border-t-[1px] border-gray-300">
                            <AiOutlineClockCircle size={30} className='text-gray-300' />
                            <p className="text-base text-gray-500 font-bold pl-4 mt-1">Delivery time</p>
                        </div>
                        <div className="flex py-6 pl-10 border-t-[1px] border-gray-300">
                            <FiTruck size={30} className='text-gray-300' />
                            <p className="text-base text-gray-500 font-bold pl-4 mt-1">Delivery Instruction</p>
                        </div>
                        <div className="flex py-6 pl-10 border-t-[1px] border-gray-300">
                            <BsTelephone size={30} className='text-gray-300' />
                            <p className="text-base text-gray-500 font-bold pl-4 mt-1">Mobile number</p>
                        </div>
                        <div className="flex py-6 pl-10 border-t-[1px] border-gray-300">
                            <MdOutlinePayment size={30} className='text-gray-300' />
                            <p className="text-base text-gray-500 font-bold pl-4 mt-1">Payment</p>
                        </div>
                        <div className="flex py-6 pl-10 border-t-[1px] border-gray-300">
                            <img src='https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png' alt='store' className="h-6 w-6 mt-1" />
                            <p className="text-base text-gray-500 font-bold pl-4 mt-1">Share with Sprouts Farmer Market</p>
                        </div>
                        <div className="flex-col py-6 pl-10 border-t-[1px] border-gray-300">
                            <div className="flex">
                                <img src='https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png' alt='store' className="h-6 w-6 mt-1" />
                                <p className="text-base text-gray-500 font-bold pl-4 mt-1">2 items</p>
                            </div>
                            <div className="flex ml-4">
                                {items.map(item => (
                                    <img key={item.id} src={`${item}`} width={40} height={20} alt='icon' />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ghhhg" hidden={index !== 2}>
                    <div className="mt-8 flex-col">
                        <div className="flex pl-8 pb-8 border-b-[1px] border-gray-300">
                            <IoLocationOutline size={30} className='text-gray-400' />
                            <p className='ml-4 text-base text-slate-800 font-bold mt-1'>Pickup at Sprouts Farmer Market</p>
                        </div>

                        <div className="pt-4 pl-8 pb-8 border-b-[1px] border-gray-300">
                            <div className="flex">
                                <BiUser size={30} className='text-green-500' />
                                <p className='ml-4 text-base text-slate-800 font-bold mt-1'>Create an account</p>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">Please sign up or log in to Instacart to continue checking out and receive your order receipt via email.</p>
                            <div className="flex mt-4">
                                <SignUp checksign />
                                <LogIn checklog />
                            </div>
                        </div>

                        <div className="flex-col mt-8 w-[100%]">
                            <div className="flex py-6 pl-10 border-t-[1px] border-gray-300">
                                <AiOutlineClockCircle size={30} className='text-gray-300' />
                                <p className="text-base text-gray-500 font-bold pl-4 mt-1">Pickup time</p>
                            </div>

                            <div className="flex py-6 pl-10 border-t-[1px] border-gray-300">
                                <BsTelephone size={30} className='text-gray-300' />
                                <p className="text-base text-gray-500 font-bold pl-4 mt-1">Mobile number</p>
                            </div>

                            <div className="flex py-6 pl-10 border-t-[1px] border-gray-300">
                                <MdOutlinePayment size={30} className='text-gray-300' />
                                <p className="text-base text-gray-500 font-bold pl-4 mt-1">Payment</p>
                            </div>

                            <div className="flex py-6 pl-10 border-t-[1px] border-gray-300">
                                <img src='https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png' alt='store' className="h-6 w-6 mt-1" />
                                <p className="text-base text-gray-500 font-bold pl-4 mt-1">Share with Sprouts Farmer Market</p>
                            </div>
                            <div className="flex-col py-6 pl-10 border-t-[1px] border-gray-300">
                                <div className="flex">
                                    <img src='https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png' alt='store' className="h-6 w-6 mt-1" />
                                    <p className="text-base text-gray-500 font-bold pl-4 mt-1">2 items</p>
                                </div>
                                <div className="flex ml-4">
                                    {items.map(item => (
                                        <img key={item.id} src={`${item}`} width={40} height={20} alt='icon' />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {index === 2 &&
                (<div className="ml-8 mt-8 bg-white w-[20rem] h-[45rem] flex-col">
                    <button className="w-[80%] h-12 text-white font-bold text-xl rounded-lg bg-green-500 ml-8 mt-8">Place order</button>

                    <div className="flex mt-8 w-[80%] ml-8">
                        <img src='https://www.instacart.com/image-server/48x48/www.instacart.com/assets/checkout/quality_guarantee/ribbon-a93eef7e76db2d7610608da27c5a9f5cb489ba37932c9624309ea1756817018e.png' alt='icon' className="h-12 w-12 mt-1" />

                        <div className="flex-col ml-2">
                            <p className="text-sm text-sky-600 font-semibold">100% satisfaction guarantee</p>
                            <p className="text-xs text-gray-600 font-semibold">Place your order with peace of mind.</p>
                        </div>
                    </div>

                    <div className="mt-6 ml-8 w-[16rem] pb-4 justify-between flex border-b-[1px] border-gray-300">
                        <p className="text-sm text-slate-800 font-bold">Sub total</p>
                        <p className="text-sm text-slate-700">${cartTotal.toFixed(2)}</p>
                    </div>

                    <div className="mt-4 ml-8 w-[16rem] pb-4 justify-between flex border-b-[1px] border-gray-300">
                        <p className="text-sm text-slate-800 font-bold">Total</p>
                        <div className="flex-col w-[8rem]">
                            <p className="text-sm ml-20 text-slate-700">${cartTotal.toFixed(2)}</p>
                            <p className="text-[0.9rem] text-red-500 font-bold">You saved $0.12</p>
                        </div>
                    </div>

                    <div className="w-[16rem] pb-8 mt-8 ml-8 border-b-[1px] border-gray-300">
                        <p className="text-base text-green-600 ml-6 font-semibold">Add promo code or gift card</p>
                    </div>

                    <div className="mt-4 ml-6 flex-col">
                        <p className="text-base text-slate-800 font-bold">Coming Soon</p>
                        <p className="text-sm text-gray-500">in the future, you'll be able to connect your Sprouts app barcode.</p>
                        <div className="flex mt-6">
                            <img src='https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png' alt='store' className="h-10 w-10 mt-1" />
                            <input type='text' placeholder="Card Number" className="h-12 border-[1px] border-gray-400 ml-4 w-[12rem] rounded-lg"></input>
                        </div>
                    </div>

                    <div className=" mt-8 h-[10rem] ">
                        <p className="text-[0.6rem] pl-8 bg-[#f7f7f7] pt-8 pr-8 text-gray-400">By placing your order, you agree to be bound by the Instacart Terms of Service and Privacy Policy. Your credit/debit card will be temporarily authorized for $11.71. Your statement will reflect the final order total after order completion. Learn more
                            A bag fee may be added to your final total if required by law or the retailer. The fee will be visible on your receipt after delivery.
                            Prices may vary from those in store.</p>
                    </div>
                </div>)
            }



            {index === 1 &&
                (<div className="ml-8 mt-8 bg-white w-[20rem] h-[40rem] flex-col">

                    <div className="flex mt-8 w-[80%] ml-8">
                        <img src='https://www.instacart.com/image-server/48x48/www.instacart.com/assets/checkout/quality_guarantee/ribbon-a93eef7e76db2d7610608da27c5a9f5cb489ba37932c9624309ea1756817018e.png' alt='icon' className="h-12 w-12 mt-1" />

                        <div className="flex-col ml-2">
                            <p className="text-sm text-sky-600 font-semibold">100% satisfaction guarantee</p>
                            <p className="text-xs text-gray-600 font-semibold">Place your order with peace of mind.</p>
                        </div>
                    </div>

                    <div className="mt-6 ml-8 w-[16rem] pb-4 justify-between flex border-b-[1px] border-gray-300">
                        <p className="text-sm text-slate-800 font-bold">Sub total</p>
                        <p className="text-sm text-slate-700">${cartTotal.toFixed(2)}</p>
                    </div>

                    <div className="mt-4 ml-8 w-[16rem] pb-4 justify-between flex border-b-[1px] border-gray-300">
                        <p className="text-sm text-slate-800 font-bold">Total</p>
                        <div className="flex-col w-[8rem]">
                            <p className="text-sm ml-20 text-slate-700">${cartTotal.toFixed(2)}</p>
                            <p className="text-[0.9rem] text-red-500 font-bold">You saved $0.12</p>
                        </div>
                    </div>

                    <div className="w-[16rem] pb-8 mt-8 ml-8 border-b-[1px] border-gray-300">
                        <p className="text-base text-green-600 ml-6 font-semibold">Add promo code or gift card</p>
                    </div>

                    <div className="mt-4 ml-6 flex-col">
                        <p className="text-base text-slate-800 font-bold">Coming Soon</p>
                        <p className="text-sm text-gray-500">in the future, you'll be able to connect your Sprouts app barcode.</p>
                        <div className="flex mt-6">
                            <img src='https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png' alt='store' className="h-10 w-10 mt-1" />
                            <input type='text' placeholder="Card Number" className="h-12 border-[1px] border-gray-400 ml-4 w-[12rem] rounded-lg"></input>
                        </div>
                    </div>

                    <div className=" mt-8 h-[10rem] ">
                        <p className="text-[0.6rem] pl-8 bg-[#f7f7f7] pt-8 pr-8 text-gray-400">By placing your order, you agree to be bound by the Instacart Terms of Service and Privacy Policy. Your credit/debit card will be temporarily authorized for $11.71. Your statement will reflect the final order total after order completion. Learn more
                            A bag fee may be added to your final total if required by law or the retailer. The fee will be visible on your receipt after delivery.
                            Prices may vary from those in store.</p>
                    </div>
                </div>)}
        </div>
    )
};

export default Checkout;