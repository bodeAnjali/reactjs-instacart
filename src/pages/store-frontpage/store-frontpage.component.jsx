import React, { useState, useEffect } from "react";
import ItemOverview from "../../component/item-overview/item-overview.component";

import SideMenu from "../../component/sidemenu/sidemenu.component";
import StoreFrontHeader from '../../component/store-front-header/storefront-header.component';
import Loader from "../../component/loader/loader.component";
import SideBar from '../../component/drawer/drawer.component';

const StoreFrontPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])

    return (
        <div>
            {!isLoading && (
                <div className="flex-col">
                    <div className="flex">
                        <SideBar />
                        <StoreFrontHeader />
                    </div>
                    <div className="flex">
                        <SideMenu />
                        <ItemOverview />
                    </div>
                </div>)}
            {isLoading && <div><Loader /></div>}
        </div>
    )
};

export default StoreFrontPage;