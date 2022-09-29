import React from 'react';
import Skeleton from './skeleton';

const SkeletonStore = () => {
    return (
        <div className='skeleton-store'>
            <Skeleton type='icon' />
            <div className='flex-col w-[10rem] ml-4'>
                <Skeleton type='store-d1' />
                <Skeleton type='store-d2' />
                <Skeleton type='store-d3' />
                <Skeleton type='store-d4' />
                <Skeleton type='store-d5' />
                <Skeleton type='store-d6' />
            </div>
        </div>
    )
};

export default SkeletonStore;