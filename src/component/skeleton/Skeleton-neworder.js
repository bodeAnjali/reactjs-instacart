import React from 'react';
import Skeleton from './skeleton';

const SkeletonNewOrder = () => {
    return (
        <div className='skeleton-neworder'>
            <Skeleton type='neworder-icon'/>
            <Skeleton type='neworder-name'/>
            <Skeleton type='neworder-name2'/>
        </div>
    )
};

export default SkeletonNewOrder;