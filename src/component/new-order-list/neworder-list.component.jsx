import React, { useState } from "react";
import NewOrder from "../new-order/neworder.component";

import Carousel from 'react-elastic-carousel';

import NEW_ORDER_DATA from '../../data/new-order-data';

const NewOrderList = () => {
    const [neworder] = useState(NEW_ORDER_DATA);


    const breakPoints = [
        {width:1, itemsToShow:8}
      ];

    return (
        <div className='flex-col w-full mt-8'>
            <div className='text-[#343538] font-bold text-2xl ml-20'>Start a new order</div>
                <div className="mt-4">
                <Carousel breakPoints={breakPoints} >
                    {
                        neworder.map((neworder) => (<NewOrder key={neworder.id} neworder={neworder} />))
                    }
                    </Carousel>
                </div>
            
        </div>
    )
};

export default NewOrderList;