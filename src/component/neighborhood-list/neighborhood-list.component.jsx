import React, { useState } from "react";

import NEIGHBORHOOD_DATA from '../../data/neighborhood';
import Neighborhood from "../neighborhood/neighborhood.component";

const NeighborhoodList = () => {
    const [neighborhood] = useState(NEIGHBORHOOD_DATA);
    return (
        <div className="flex flex-col ml-16 w-full mt-8">
            <div className="flex w-[93%] justify-between ml-6">
                <div className="text-[#343538] font-bold text-2xl">Neighborhood</div>
                <div className="text-base font-semibold mt-2 cursor-pointer ml-8">View all &#8594;</div>
            </div>

            <p className="text-xs ml-6">Shop local</p>
            <div className="flex">
                {
                    neighborhood.map((neighborhood) => (<Neighborhood key={neighborhood.id} neighborhood={neighborhood} />))
                }
            </div>
        </div>
    )
};

export default NeighborhoodList;