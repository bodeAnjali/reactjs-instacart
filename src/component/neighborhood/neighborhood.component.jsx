import React, { useState, useEffect } from "react";
import SkeletonNeighbor from "../skeleton/skeleton-neighborhood";

const Neighborhood = ({ neighborhood }) => {
    const { name, imgUrl } = neighborhood;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 6000)
    }, [])

    return (
        <div>
            {!isLoading ?
                (<div className="flex-col h-auto cursor-pointer">
                    <img src={`${imgUrl}`} alt='icon' className="h-[8rem] w-[8rem] p-4 rounded-[35px]" />
                    <p className="w-32 h-auto text-xs font-semibold p-2 text-center -mt-4">{name}</p>
                </div>)
                :
                (<SkeletonNeighbor/>)
            }
        </div>
    )
};

export default Neighborhood;