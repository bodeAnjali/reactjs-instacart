import React from 'react';
import Skeleton from './skeleton';

const SkeletonProduct = () => {
    return (
        <div className='skeleton-wrapper'>
            <Skeleton type='thumbnail' />
            <Skeleton type='text-lg' />
            <Skeleton type='text-md' />
        </div>
    )
};

export default SkeletonProduct;