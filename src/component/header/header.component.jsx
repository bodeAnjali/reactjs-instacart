import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import Location from '../location/location.component';
import CartDrawer from '../cartdrawer/cartdrawer.component';
import LogIn from '../login/login.component';
import LogOut from '../logout/logout.component';

import './styles.css';

const Header = () => {

    //const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000)
    // }, [])


    return (
        <div className='fixed h-20 flex ml-12 w-full z-10 cursor-pointer bg-white'>
            <img src='https://www.instacart.com/image-server/120x24/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png' alt='app-name'
                className='mt-4 px-4 py-3 w-36 h-12'
            />

            <div className="flex relative ml-16 mt-4 w-3/4">
                <input
                    type='search'
                    placeholder="Search products, stores, and recipes"
                    className='w-full h-7 decoration-slate-700 bg-[#F6F7F8] py-6 px-8 outline-none rounded-lg font-semibold '
                />
                <div className="absolute mt-2.5 left-[94%]">
                    <SearchIcon />
                </div>

            </div>
            
            <div>
                <Location />
            </div>

            <div>
                <LogIn />
            </div>
            
            <LogOut />

            <CartDrawer />

        </div>
    )
};

export default Header;
