import React, { useState } from "react";
import { AiFillClockCircle } from 'react-icons/ai';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { MdClose } from 'react-icons/md';

import ReactReadMoreReadLess from 'react-read-more-read-less';

import './timing-modal.styles.scss';

const TimingModal = () => {

    const [modal, setModal] = useState(false);

    const [index, setIndex] = useState(1);

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
            {modal && (
                <div className="timing-modal">
                    <div onClick={toggleModal} className="timing-overlay">

                    </div>
                    <div className="timing-modal-content">
                        <MdClose size={25} className='text-white ml-[45rem] cursor-pointer' onClick={toggleModal} />

                        <div className="tab-header">
                            <div className={index === 1 ? "active-tab" : "tab"} onClick={() => { setIndex(1) }} >
                                <p>Info</p>
                            </div>
                            <div className={index === 2 ? "active-tab" : "tab"} onClick={() => { setIndex(2) }} >
                                <p>Delivery times</p>
                            </div>
                            <div className={index === 3 ? "active-tab" : "tab"} onClick={() => { setIndex(3) }} >
                                <p>Pick Up times</p>
                            </div>
                        </div>

                        <div className="ghhhg" hidden={index !== 1}>
                            <div className="info">
                                <div className="info-header">
                                    <p className="text-base font-semibold text-slate-700">Pricing</p>
                                    <div className="everyday-price">
                                        <div>
                                            <AiOutlineDollarCircle size={33} />
                                        </div>
                                        <div className="prices">
                                            <p className="text-base font-bold text-slate-700">Everyday store prices</p>
                                            <p className="text-sm text-slate-500">
                                                Sprouts Farmers Market sets the price of items on the Instacart marketplace. Item prices for this retailer generally reflect the everyday in-store prices in your area. Items on sale in the store may not be on sale through the Instacart platform. Prices and availability are based on available data feeds, subject to delays or errors and may change without notice. As a result, the in-store price of a particular item at the time a purchase is made, including for weighted items, may differ from what is available through the Instacart platform.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="middle">
                                    <p className="text-gray-500 text-base">NEXT DELIVERY TIME</p>
                                    <p className="text-2xl font-bold mt-2 text-slate-700">Today, 8am - 10am</p>
                                    <p className="text-base font-medium text-green-500 mt-2 flex">All delivery times <FiChevronRight className="mt-[0.3rem]" /></p>
                                    <br />
                                    <p className="text-gray-500 text-base">NEXT PICKUP TIME</p>
                                    <p className="text-2xl font-bold mt-2 text-slate-700">Today, 7am - 8am</p>
                                    <p className="text-base font-medium text-green-500 mt-2 flex">All pickup times <FiChevronRight className="mt-[0.3rem]" /></p>
                                </div>

                                <div className="about">
                                    <p className="text-gray-700 text-base">About</p>
                                    <div className="flex justify-between w-full mt-4">
                                        <div>
                                            <IoMdInformationCircleOutline size={25} className='mt-4' />
                                        </div>
                                        <ReactReadMoreReadLess
                                            readMoreClassName='readMoreClassName'
                                            readLessClassName='readLessClassName'
                                            charLimit={400}
                                            readMoreText='more'
                                            readLessText='..less'
                                        >
                                            Healthy in a hurry? Sprouts delivers! Get all the natural and organic foods you love, delivered right to you in as little as 1 hour. So you can spend time doing, well, whatever you want! Make your grocery list and we’ll gather our farm fresh produce, all-natural meats, deliciously prepared meals, pantry essentials, and scoopable or prepackaged bulk options. Affordable vitamins, supplements and body care – yeah, we’ve got that too! Because, at Sprouts we believe that good-for-you food and products should be affordable and available to everyone.
                                        </ReactReadMoreReadLess>
                                    </div>
                                    <p className="text-base text text-gray-500 ml-6 mt-4">Delivery and Pickup</p>

                                </div>

                                <div className="footer">
                                    <p className="text-gray-700 text-base">Hours</p>
                                    <div className="ml-4 flex-col w-[98%]">
                                        <div className="justify-between flex text-gray-500 text-sm py-2">
                                            <p>Monday</p>
                                            <p>7am - 9pm</p>
                                        </div>
                                        <div className="justify-between flex text-gray-500 text-sm py-2">
                                            <p>Tuesday</p>
                                            <p>7am - 9pm</p>
                                        </div>
                                        <div className="justify-between flex text-gray-500 text-sm py-2">
                                            <p>Wednesday</p>
                                            <p>7am - 9pm</p>
                                        </div>
                                        <div className="justify-between flex text-gray-500 text-sm py-2">
                                            <p>Thursday</p>
                                            <p>7am - 9pm</p>
                                        </div>
                                        <div className="justify-between flex  text-gray-500 text-sm py-2">
                                            <p>Friday</p>
                                            <p>7am - 9pm</p>
                                        </div>
                                        <div className="justify-between flex text-gray-500 text-sm py-2">
                                            <p>Saturday</p>
                                            <p>7am - 9pm</p>
                                        </div>
                                        <div className="justify-between flex text-gray-500 text-sm py-2">
                                            <p>Sunday</p>
                                            <p>7am - 9pm</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="ghhhg" hidden={index !== 2}>
                            <div className="delivery-times">
                                <div className="d-header">
                                    <IoMdInformationCircleOutline size={25} />
                                    <p className="text-gray-500 text-base ml-6">Minimum order amount $35</p>
                                </div>

                                <div className="d-middle">
                                    <li className="text-gray-800 text-sm">Friday,April 29</li>
                                    <div className="flex justify-between mt-6 text-gray-500 text-sm w-[95%]">
                                        <li>Fast & flexible: Apr 28 - Apr-29</li>
                                        <p>$3.99</p>
                                    </div>
                                </div>

                                <div className="d-footer">
                                    <li className="text-gray-800 text-sm">Friday,April 29</li>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>8am - 10am</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>9am - 11am</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>10am - Noon</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>11am - 1pm</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>1pm - 3pm</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>2pm - 4pm</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>3pm- 5pm</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>4pm - 6pm</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>5pm - 7pm</li>
                                        <p>$3.99</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="ghhhg" hidden={index !== 3}>
                            <div className="pick-up-times">

                                <div className="p-header">
                                    <IoMdInformationCircleOutline size={25} />
                                    <p className="text-gray-500 text-base ml-6">Minimum order amount $35</p>
                                </div>

                                <div className="p-footer">
                                    <li className="text-gray-800 text-sm">Friday,April 29</li>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>8am - 10am</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>9am - 11am</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>10am - Noon</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>11am - 1pm</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>1pm - 3pm</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>2pm - 4pm</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>3pm- 5pm</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>4pm - 6pm</li>
                                        <p>$3.99</p>
                                    </div>
                                    <div className="flex justify-between mt-8 text-gray-500 text-sm w-[95%]">
                                        <li>5pm - 7pm</li>
                                        <p>$3.99</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}

            <div className='flex w-48 mt-4 mr-8' onClick={toggleModal}>
                <AiFillClockCircle className='h-6 w-6 mt-[0.6rem] ml-4' />
                <p className='mt-[0.7rem] ml-4 decoration-slate-[#343538] text-[0.9rem] font-semibold'>Today, 8am - 10am</p>
            </div>

        </div>
    )
};

export default TimingModal;