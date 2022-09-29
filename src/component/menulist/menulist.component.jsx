import React, { useState } from "react";
import MENU_DATA from '../../data/menudata';
import Menu from "../menu/menu.component";

import Carousel from 'react-elastic-carousel';

import './carousel.styles.css';

const MenuList = () => {
    const [menu] = useState(MENU_DATA);

    const breakPoints = [
        {width:1, itemsToShow:14}
      ];

    return (
        <div className="flex mt-24">
            <Carousel breakPoints={breakPoints} >
            {
                menu.map((menu) => (<Menu key={menu.id} menu={menu} />))
            }
            </Carousel>
        </div>
    )
}

export default MenuList;