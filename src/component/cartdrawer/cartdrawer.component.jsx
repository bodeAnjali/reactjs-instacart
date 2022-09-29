import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

//import Divider from '@mui/material/Divider';

import CartItemList from '../cartitem-list/cartitem-list.component';
import CheckoutButton from '../checkout-button/checkoutbutton.component';
import { CartContext } from '../../providers/cart/cart.provider';

import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const CartDrawer = () => {
    const { CartItemsCount } = useContext(CartContext);
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => {

        return (
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
                role="presentation"
                //onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <div className='my-4 mx-96 cursor-pointer'  onClick={toggleDrawer(anchor, false)}>
                    <AiOutlineClose className='absolute mt-[0.9rem] h-[1.2rem] w-[1.3rem] ml-2 text-green-700' />
                    <button className='py-3 px-6 text-base text-green-700 ml-[0.2rem] rounded-md border-green-700 border-[1px]'>Close</button>
                </div>
                <div className='flex-col align-middle'>
                    <CartItemList toggleDrawer={toggleDrawer(anchor, false)}/>
                    <CheckoutButton />
                </div>
            </Box>
        )
    };

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div className='out-drawer'>
                        <div className='flex bg-[#F6F7F8] border-none rounded-[18px] p-2 mt-3 mr-20' onClick={toggleDrawer(anchor, true)}>
                            <FaShoppingCart className='h-5 w-5 mt-2'/>
                            <div className='text-slate-900 text-[0.9rem] mt-[0.4rem] ml-2 py-[0.1rem] px-2'>{CartItemsCount}</div>
                        </div>
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
export default CartDrawer;