import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SkeletonNewOrder from "../skeleton/Skeleton-neworder";

const NewOrder = ({ neworder }) => {
    
    const { icon, name, status } = neworder;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 6000)
    }, [])
    
    return (<div>
        { !isLoading ? (<Link className="flex-col px-8 text-center cursor-pointer" to='/storefront'>
            <img src={`${icon}`} alt='icon' className="h-24 w-24 rounded-full" />
            <div className="flex-col">
            <p className="pt-4 text-xs font-semibold w-24">{name}</p>
            <p className="font-semibold text-xs text-lime-600">{status}</p>
            </div>
        </Link>)
        :
        (<SkeletonNewOrder />)
    }
        </div>
    )
};

export default NewOrder;