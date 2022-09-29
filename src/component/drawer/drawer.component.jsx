import * as React from 'react';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import { FiMenu } from 'react-icons/fi';
import { FaReceipt } from 'react-icons/fa';
import { IoIosBookmarks, IoMdHome } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { CgDollar } from 'react-icons/cg';
import { AiFillGift, AiFillTag, AiFillBulb } from 'react-icons/ai';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { MdOutlineLogout } from 'react-icons/md';

import SignUp from '../sign-up/signup.component.jsx';

import { UserContext } from '../../providers/user/user.provider.jsx';


const SideBar = () => {

    const { LogOut } = useContext(UserContext)

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const userlogin = localStorage.getItem('isLogIn')
    const IsLogIn = JSON.parse(userlogin)

    const list = (anchor) => (
        <Box
            sx={{ width: 275 }}
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >

            <SignUp />
            <div className='px-6 py-4 text-xs mr-12 mt-6 font-normal'>
                <p>Instacart Customer since April 2022</p>
            </div>

            <div className='flex flex-col w-64 h-auto mx-4 mb-8 bg-amber-200 px-4 pb-4 rounded-2xl cursor-pointer'>
                <span className='font-extrabold w-56 mt-3'>Start your free trial today!</span>
                <p className='text-xs'>You can cancel at any time.</p>
                <span className='text-xs font-semibold bg-orange-400 w-32 text-center px-1 py-2 rounded-xl mt-2'>Try Express for free</span>
            </div>

            <Divider />

            <div className='flex flex-col'>
                <Link className='flex cursor-pointer' to='/'>
                    <IoMdHome className='h-6 w-6 mt-8 ml-8' />
                    <span className='mt-[2rem] ml-4'>Stores</span>
                </Link>

                <div className='flex cursor-pointer'>
                    <FaReceipt className='h-6 w-6 mt-8 ml-8' />
                    <span className='mt-[2rem] ml-4'>Your orders</span>
                </div>

                <div className='flex cursor-pointer'>
                    <IoIosBookmarks className='h-6 w-6 mt-8 ml-8' />
                    <span className='mt-[2rem] ml-4'>Your recipes</span>
                </div>

                <div className='flex cursor-pointer'>
                    <IoSettingsSharp className='h-6 w-6 mt-8 ml-8' />
                    <span className='mt-[2rem] ml-4'>Your account settings</span>
                </div>

                <div className='flex cursor-pointer'>
                    <img src='https://www.instacart.com/image-server/24x24/www.instacart.com/assets/express/badges/bolt-gold@3x-ff5fe97de1da8afe6518f47d53c33500e4938cbe67af5ab413a3e40a64e36ade.png' alt='icon'
                        className='h-6 w-6 mt-8 ml-8'
                    />
                    <span className='mt-[2rem] ml-4'>Try Instacart Express</span>
                </div>

                <div className='text-gray-400 text-sm mt-8 mr-8 ml-8 font-semibold '>
                    <span>Credits and Promos</span>
                </div>

                <div className='flex cursor-pointer'>
                    <CgDollar className='h-6 w-6 mt-8 ml-8' />
                    <span className='mt-[2rem] ml-4'>Invite friends, get $1000</span>
                </div>

                <div className='flex cursor-pointer'>
                    <AiFillGift className='h-6 w-6 mt-8 ml-8' />
                    <span className='mt-[2rem] ml-4'>Buy gift cards</span>
                </div>

                <div className='flex cursor-pointer'>
                    <AiFillTag className='h-6 w-6 mt-8 ml-8' />
                    <span className='mt-[2rem] ml-4'>Add Promo or Gift Card</span>
                </div>

                <div className='text-gray-400 text-sm mt-8 mr-8 ml-8 font-semibold '>
                    <span>Support</span>
                </div>

                <div className='flex cursor-pointer'>
                    <RiCustomerServiceFill className='h-6 w-6 mt-8 ml-8' />
                    <span className='mt-[2rem] ml-4'>Help center</span>
                </div>

                <div className='flex cursor-pointer'>
                    <AiFillBulb className='h-6 w-6 mt-8 ml-8' />
                    <span className='mt-[2rem] ml-4'>How Instacart works</span>
                </div>

                {
                    IsLogIn && (
                        <div className='flex cursor-pointer' onClick={() => LogOut()}>
                            <MdOutlineLogout className='h-6 w-6 mt-8 ml-8' />
                            <span className='mt-[2rem] ml-4'>Log out</span>
                        </div>
                    )}

            </div>

        </Box>
    );

    return (
        <div className='drawer'>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div className='out-drawer'>
                        <FiMenu className='h-8 w-6 ml-2  mt-[1.4rem] fixed cursor-pointer' onClick={toggleDrawer(anchor, true)} />
                    </div>

                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>

                </React.Fragment>
            ))}
        </div>
    );
}

export default SideBar;