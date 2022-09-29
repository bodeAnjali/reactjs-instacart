import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import { MdDeliveryDining } from 'react-icons/md';
import { GiCardPickup } from 'react-icons/gi'

import LogIn from '../login/login.component';
import CartDrawer from '../cartdrawer/cartdrawer.component';
import TimingModal from '../timing-modal/timing-modal.component';
import Location from '../location/location.component';



const StoreFrontHeader = () => {

    return (
        <div className='fixed h-20 flex ml-12 w-full z-20 cursor-pointer bg-white'>
            <img src='https://www.instacart.com/image-server/120x24/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png' alt='app-name'
                className='mt-4 px-4 py-3 w-36 h-12'
            />

            <div className="flex relative ml-16 mt-4 w-[60%]">
                <input
                    type='search'
                    placeholder="Search Sprouts Farmers Market..."
                    className='w-full h-7 decoration-slate-700 outline-none appearance-none bg-[#f6f7f8] px-4 py-6 rounded-lg font-semibold mr-8'
                />
                <div className="absolute mt-2.5 ml-[45rem]">
                    <SearchIcon />
                </div>

            </div>

            <div className='flex mt-4 h-14 w-[18rem] bg-[#f5f6f7] rounded-[25px] justify-center'>
                <div className='flex border-[2px] border-black rounded-[25px] p-2 h-12 mt-1'>
                    <MdDeliveryDining className='h-7 w-7' />
                    <p className='text-[0.9rem] decoration-slate-[#343538] ml-2 mt-1 font-semibold'>Delivery</p>
                </div>

                <div className='flex ml-2 mt-3 h-12 pr-4'>
                    <GiCardPickup className='h-7 w-7' />
                    <p className='text-[0.9rem] decoration-slate-[#343538] ml-2 mt-1 font-semibold'>Pickup</p>
                </div>
            </div>

            <div className='-mr-8'>
                <Location />
            </div>
            
            <TimingModal />

            <div>
                <LogIn />
            </div>

            <CartDrawer />

        </div>
    )
};

export default StoreFrontHeader;
