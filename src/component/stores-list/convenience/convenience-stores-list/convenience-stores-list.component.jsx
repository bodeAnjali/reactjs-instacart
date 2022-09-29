import React, { useState } from "react";

import Store from '../../../store/store.component';
import CONVENIENCE_STORES_DATA from '../convenience-data';

const ConvenienceStoresList = () => {
    const [stores] = useState( CONVENIENCE_STORES_DATA);
    return (
        <div className="flex-col ml-4 w-[97%] mt-8">
         <div  className="text-[#343538] font-bold text-2xl">Convenience stores in San Francisco</div>
            <div className="grid grid-cols-3 mt-4">
            {
                stores.map((stores) => (<Store key={stores.id} stores={stores} />))
            }
            </div>
        </div>
    )
};

export default ConvenienceStoresList;