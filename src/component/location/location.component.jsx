import React, { useState } from "react";

import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineClose } from 'react-icons/ai';
import { TiLocationArrow } from 'react-icons/ti';
import { IoLocationSharp } from 'react-icons/io5';

const Location = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (<div>
        {modal &&
            (<div className="w-[100vw] h-[100vh] top-0 right-0 bottom-0 left-0 fixed z-40">
            <div className="bg-[rgba(49,49,49,0.5)] w-[100vw] h-[100vh] top-0 right-0 bottom-0 left-0 fixed z-30" onClick={toggleModal}></div>
                <div className="flex-col h-[45rem] w-[35rem] bg-white z-40 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 rounded-2xl">
                    <div className="flex mt-4">
                        <AiOutlineClose className="h-6 w-6 ml-2 mt-2 cursor-pointer" onClick={toggleModal} />
                        <span className="text-2xl font-semibold mt-2 ml-40">Choose address</span>
                    </div>

                    <div className="w-96 h-4 relative mt-4">
                        <input
                            type='search'
                            placeholder="Add a new address"
                            className='w-[34rem] h-10 ml-2 bg-[#F6F7F8] absolute rounded-xl px-4'
                        />
                        <div className="absolute ml-[32rem] mt-2 decoration-gray-500">
                            <SearchIcon />
                        </div>

                    </div>

                    <div className="flex mt-12 ml-4">
                        <TiLocationArrow className="h-6 w-6" />
                        <p className="mt-[0.3rem]">Use current location</p>
                    </div>

                </div>
            </div>)
        }

            <div className='flex w-40 mt-4 ml-16' onClick={toggleModal} >
                <IoLocationSharp className='h-6 w-6 mt-[0.6rem] ml-4' />
                <span className='mt-[0.7rem] ml-4 decoration-slate-[#343538] text-[0.9rem] font-semibold'>94105</span>
            </div>

    </div>

    )
};

export default Location;