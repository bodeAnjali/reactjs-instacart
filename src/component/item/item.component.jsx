import React, { useState, useContext, useEffect } from "react";
import { withRouter } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';

import { CartContext } from "../../providers/cart/cart.provider";

import { MdDelete } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import { IoAdd } from 'react-icons/io5';
import { IoRemoveOutline } from 'react-icons/io5'
import { MdClose } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';

import SkeletonProduct from '../skeleton/skeletonProduct';


import './item.styles.scss'


const Item = ({ item }) => {

    const { icon, priceview, type, name, weight } = item;
    //const [selected, setSelected] = useState('');
    const [isHovering, setIsHovering] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const { addItem, removeItem, cartItems } = useContext(CartContext);

    const [modal, setModal] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 6000)
    }, [])


    const addedItem = cartItems.find(obj => {
        return obj.id === item.id
    })

    const quantity = addedItem ? addedItem.quantity : 0;


    const handleMouseEnter = () => {
        setIsHovering(true)
    }

    const handleMouseRemove = () => {
        setIsHovering(false)
    }

    const handleClick = () => {
        setIsShow(true);
        addItem(item);
    }

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (<div>

        {
            modal ? (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay">
                        <MdClose size={25} className='text-white ml-[100rem] mt-8 cursor-pointer' onClick={toggleModal} />
                    </div>
                    <div className="modal-content">
                        <div className="item-modal">

                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: `${item.icon}`
                                },

                                largeImage: {
                                    src: `${item.icon}`,
                                    width: 450,
                                    height: 500
                                }
                            }} enlargedImagePosition='over' className='ml-12' isActivatedOnTouch='true' pressMoveThreshold={20} hoverDelayInMs={100} />


                            <div className="item-detail">
                                <p className="i-m-name">{item.name}</p>
                                <p className="i-m-weight">{item.weight}</p>
                                <p className="i-m-price">{item.priceview}</p>

                                <div className="drop-button">

                                    {
                                        quantity > 0 ? (
                                            <div className="flex">
                                                <p className="quantity-box">{quantity}</p>
                                                <div className="border-2 border-green w-14 h-12 mt-2 ml-4 bg-green-600 cursor-pointer rounded-[20px]" onClick={() => removeItem(item)}>
                                                    <IoRemoveOutline size={30} className="p-1 ml-[0.6rem] mt-[0.5rem] text-white font-bold" />
                                                </div>
                                                <div className="border-2 border-green w-14 h-12 mt-2 ml-4 bg-green-600 cursor-pointer rounded-[20px]" onClick={() => addItem(item)}>
                                                    <IoAdd size={30} className="p-1 ml-[0.6rem] mt-[0.5rem] text-slate-100 font-bold " />
                                                </div>
                                            </div>
                                        )
                                            :
                                            (<button className="button" onClick={() => addItem(item)}>Add to cart</button>)}

                                </div>

                                <div className="satisfaction">
                                    <img src='https://www.instacart.com/image-server/48x48/www.instacart.com/assets/checkout/quality_guarantee/ribbon-a93eef7e76db2d7610608da27c5a9f5cb489ba37932c9624309ea1756817018e.png' alt='icon' />

                                    <div className="satisfaction-detail">
                                        <p className="text-sm text-sky-500 font-semibold">100% satisfaction guarantee</p>
                                        <p className="text-sm text-black font-semibold">Place your order with peace of mind.</p>

                                    </div>
                                </div>
                                <div>
                                    <a href={`${item.icon}`} rel="noreferrer noopener" target='_blank'>
                                        <AiOutlineSearch size={25} className="mt-4 cursor-pointer" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="details">
                            <p className="d-head">Details</p>
                            <p className="d-detail">{item.details}</p>
                        </div>

                        <p className="text-neutral-400 mt-[46rem] font-normal text-xs fixed">*Product information or packaging displayed may not be current or complete. Always refer to the physical product for the most accurate information and warnings. For additional information, contact the retailer or manufacturer. *Actual weight may vary based on seasonality and other factors. Estimated price is approximate and provided only for reference.</p>
                    </div>
                </div>
            )
                :
                (<div>
                    {!isLoading ?
                        (<div className="item" >
                            <img src={`${icon}`} alt='icon' />

                            <button className={`${isHovering ? "add-to-cart-button" : "hidden"}`} onClick={handleClick}>+ Add to cart</button>

                            {quantity === 0 ?
                                (<button className="add-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseRemove}>+ Add</button>)
                                :
                                (<button className={`${isShow ? "main-button" : "hidden"}`}>
                                    <MdDelete className="delete" onClick={() => removeItem(item)} />
                                    <div className="quantity">{quantity}</div>
                                    <GrAdd className="add" onClick={() => addItem(item)} />
                                </button>
                                )}
                            <div className="item-details" onClick={toggleModal}>
                                <span className="price">{priceview}</span>
                                <span className="type">{type}</span>
                                <span className="name">{name}</span>
                                <span className="weight">{weight}</span>
                            </div>
                        </div>)
                        :
                        <SkeletonProduct />
                    }
                </div>)
        }

    </div>
    )
}

export default withRouter(Item);