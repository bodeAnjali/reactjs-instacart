import React from "react";

import FreeDelivery from './freedelivery/freedelivery.component';
import Refer from './refer/refer.component';

import Carousel from 'react-elastic-carousel';

import './carousel2.styles.css';

const Offer = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 }
    ];

    return (

        <div className="flex">
            <Carousel breakPoints={breakPoints} >
                <FreeDelivery />
                <Refer />
            </Carousel>
        </div>
    )
};

export default Offer;