import React from "react";
import Checkout from "../../component/checkout/Checkout.component";

const CheckoutPage = () => {
    return (
        <div className="w-[100%] h-[100%] flex-col bg-[#f7f7f7]">
            <div className="w-full border-b-[1px] border-gray-300 bg-white">
                <img src='https://www.instacart.com/image-server/120x24/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png' alt='app-name'
                    className='mt-1 px-4 py-3 w-40 h-[3.3rem] ml-auto mr-auto'
                />
            </div>

            <Checkout />
        </div>
    )
};

export default CheckoutPage;