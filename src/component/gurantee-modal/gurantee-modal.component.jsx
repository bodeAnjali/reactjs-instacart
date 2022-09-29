import React, { useState } from "react";

import { GrFormClose } from 'react-icons/gr';

const GuranteeModal = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <div>
            {
                modal && (
                    <div className="w-[100vw] h-[100vh] top-0 right-0 bottom-0 left-0 fixed z-20">
                        <div className="bg-[rgba(49,49,49,0.5)] w-[100vw] h-[100vh] top-0 right-0 bottom-0 left-0 fixed z-30" onClick={toggleModal}></div>
                        <div className="flex-col h-[30rem] w-[35rem] bg-white z-40 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 rounded-2xl">
                            <GrFormClose size={30} className='ml-2 mt-3 cursor-pointer' onClick={toggleModal} />

                            <div className="mt-8 flex-col">
                                <img src='https://www.instacart.com/image-server/48x48/www.instacart.com/assets/checkout/quality_guarantee/ribbon-a93eef7e76db2d7610608da27c5a9f5cb489ba37932c9624309ea1756817018e.png' alt='icon' className="mx-auto h-16 w-16" />
                                <p className="text-xl text-center font-bold mt-6">100% satisfaction guarantee</p>
                                <p className="text-sm font-normal ml-8 mt-4 text-gray-500">Place your order with peace of mind. If you experience any of the following issues, you're eligible for a refund or credit:</p>
                                <div className="ml-10 mt-6 text-sm">
                                    <li className="py-1">Damaged or missing items</li>
                                    <li className="py-1">Poor item replacements</li>
                                    <li className="py-1">Late arrival</li>
                                    <li className="py-1">Unprofessional service</li>
                                </div>

                                <button className="text-white bg-green-500 w-[30rem] px-4 py-4 ml-8 mt-4 font-bold text-xl rounded-2xl" onClick={toggleModal}>Got it</button>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="flex -ml-4 -mt-1" onClick={toggleModal}>
                <img src='https://i.postimg.cc/3RyHRysf/correct-2.jpg' alt="icon"
                    className="h-3 w-3 m-[0.1rem] mt-[0.3rem]" />
                <span className="text-sm text-sky-500 mt-[0.1rem]">100% satisfaction gurantee</span>
                <div className='text-gray-500 ml-1'>&#10095;</div>
            </div>
        </div>
    )
};

export default GuranteeModal;