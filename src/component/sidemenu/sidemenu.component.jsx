import React, { useContext, useEffect, useState } from "react";

import './sidemenu.styles.scss';

import { AiFillShop } from 'react-icons/ai';
import { AiTwotoneTag } from 'react-icons/ai';
import { GiAnticlockwiseRotation } from 'react-icons/gi';
import { MdFavorite } from 'react-icons/md';
import { IoIosBookmarks } from 'react-icons/io';
import { ItemContext } from "../../providers/Item/items.provider";

import SkeletonSideMenu from "../skeleton/skeleton-sidemenu";
import GuranteeModal from "../gurantee-modal/gurantee-modal.component";

const SideMenu = () => {
    const { filterItem, AllItem } = useContext(ItemContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000)
    }, [])

    return (<div>
        {!isLoading ?
            (<div className="flex-col w-60 h-[100%] mt-20 z-10 fixed overflow-y-auto side-menu bg-white">


                <div className="flex bg-white">
                    <div className="flex-col items-center mt-4 cursor-pointer border-b-gray-400 pb-4 fixed ml-6 z-40 bg-white">
                        <img src='https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png' alt='icon'
                            className="h-[5.5rem] w-[5.5rem] ml-10" />

                        <p className="font-semibold -ml-1">Sprouts Farmers Market</p>

                        <div className="flex">
                            <span className="text-xs text-gray-500 my-1 ml-4 mt-[0.4rem]">Everyday store prices</span>
                            <div className='text-gray-500 py-[0.2rem] px-[0.3rem]'>&#10095;</div>
                        </div>

                        <GuranteeModal />

                    </div>

                    <div className='flex-col p-4 ml-2 border-b-gray-400 mt-44 z-10 bg-white w-56 cursor-pointer fixed pt-8 '>
                        <div className='flex py-2 px-[0.1rem]'>
                            <AiFillShop className='h-6 w-6' />
                            <span className="ml-4 text-slate-800 font-semibold" onClick={AllItem}>Shop</span>
                        </div>

                        <div className='flex py-2 px-[0.1rem]'>
                            <AiTwotoneTag className='h-6 w-6' />
                            <span className="ml-4 text-slate-800 font-semibold">Deals</span>
                        </div>

                        <div className='flex py-2 px-[0.1rem]'>
                            <GiAnticlockwiseRotation className='h-6 w-6' />
                            <span className="ml-4 text-slate-800 font-semibold">Buy it again</span>
                        </div>

                        <div className='flex py-2 px-[0.1rem]'>
                            <MdFavorite className='h-6 w-6' />
                            <span className="ml-4 text-slate-800 font-semibold">Favorites</span>
                        </div>

                        <div className='flex py-2 px-[0.1rem]'>
                            <IoIosBookmarks className='h-6 w-6' />
                            <span className="ml-4 text-slate-800 font-semibold">Recipes</span>
                        </div>
                    </div>
                </div>

                <div className="flex-col p-4 ml-2 mt-[25rem] -z-10 cursor-pointer overflow-y-auto scroll">
                    <div className="flex-col">
                        <p className="py-4 mt-4 pl-2 detail" onClick={() => filterItem('Produce')}>Produce</p>
                        <p className="py-4 pl-2 detail" onClick={() => filterItem('Dairy')}>Dairy & Eggs</p>
                        <p className="py-4 pl-2 detail" onClick={() => filterItem('Baverages')}>Baverages</p>
                        <p className="py-4 pl-2 detail" onClick={() => filterItem('Meat')}>Meat & Seafood</p>
                        <p className="py-4 pl-2 detail" onClick={() => filterItem('Snacks')}>Snacks & Candy</p>
                        <p className="py-4 pl-2 detail" onClick={() => filterItem('Frozens')}>Frozen</p>
                        <p className="py-4 pl-2 detail" onClick={() => filterItem('Bakery')}>Bakery</p>
                        <p className="py-4 pl-2 detail" onClick={() => filterItem('Dry Goods')}>Dry Goods & Pasta</p>
                        <p className="py-4 pl-2 detail" onClick={() => filterItem('Sauces')}>Condiments & Sauces</p>
                    </div>

                </div>
            </div>) : <SkeletonSideMenu />}
    </div>
    )
};

export default SideMenu;