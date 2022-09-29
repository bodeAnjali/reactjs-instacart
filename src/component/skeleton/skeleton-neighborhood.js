import React from 'react';
import Skeleton from './skeleton';

const SkeletonNeighbor = () => {
    return (
        <div className='skeleton-neighbor'>
            <Skeleton type='neighbor-icon'/>
            <Skeleton type='neighbor-name'/>
        </div>
    )
};

export default SkeletonNeighbor;