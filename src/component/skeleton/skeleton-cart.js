import React from 'react';
import Skeleton from './skeleton';

const SkeletonCart = () => {
    return (
        <div className='skeleton-cart'>
            <Skeleton type='cartitem-icon' />
            <div className='flex-col'>
                <Skeleton type='cart-detail1' />
                <Skeleton type='cart-detail2' />
            </div>
            <Skeleton type='cart-detail3' />
            <Skeleton type='cart-detail4' />
        </div>
    )
};

export default SkeletonCart;