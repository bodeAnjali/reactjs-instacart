import React, { useState, useEffect } from "react";

import MenuList from "../../component/menulist/menulist.component";
import Offer from "../../component/offer/offer.component";
import NeighborhoodList from "../../component/neighborhood-list/neighborhood-list.component";
import NewOrderList from "../../component/new-order-list/neworder-list.component";
import AllStoresOverview from '../../component/AllStores-overview/AllStores-overview.component';
import Header from '../../component/header/header.component.jsx';
import SideBar from "../../component/drawer/drawer.component";
import Loader from "../../component/loader/loader.component";

const HomePage = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //console.log(localStorage.getItem('user-info'))
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])

    return (
        <div>
            {!isLoading &&
                (
                    <div className="flex-col">
                        <div className="flex">
                            <SideBar />
                            <Header />
                        </div>
                        <div className='flex-col w-[72%] h-auto mt-8 ml-52 -z-20'>
                            <MenuList />
                            <Offer />
                            <NeighborhoodList />
                            <NewOrderList />
                            <AllStoresOverview />
                        </div>
                    </div>)}
                {isLoading && <Loader />}
        </div>

    )
};

export default HomePage;