import React, { useState, useContext } from "react";
import FormInput from "../Form-Input/form-input.component";
import { withRouter } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';

import { UserContext } from "../../providers/user/user.provider";


const LogIn = ({ checklog, history }) => {
    const { LogInUser } = useContext(UserContext);

    const [modal, setModal] = useState(false);

    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    };

     const userlogin = localStorage.getItem('isLogIn')
     const IsLogIn = JSON.parse(userlogin)

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        LogInUser(userCredentials);
        setModal(!modal);
        history.push('/storefront');

    };

    return (
        <div>
            {modal &&
                (<div className="w-[100vw] h-[100vh] top-0 right-0 bottom-0 left-0 fixed z-20">
                    <div className="bg-[rgba(49,49,49,0.5)] w-[100vw] h-[100vh] top-0 right-0 bottom-0 left-0 fixed z-20" onClick={toggleModal}></div>
                    <div className="flex-col h-[40rem] w-[30rem] bg-white z-20 absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 rounded-2xl">
                        <GrFormClose size={30} className='ml-2 mt-3 cursor-pointer' onClick={toggleModal} />
                        <p className="font-bold text-3xl ml-4 mt-4">LogIn</p>
                        <form className="mt-10" onSubmit={handleSubmit}>
                            <FormInput
                                name="email"
                                type="email"
                                value={email}
                                handleChange={handleChange}
                                label='Email'
                                required
                            />

                            <FormInput
                                name="password"
                                type="password"
                                value={password}
                                handleChange={handleChange}
                                label='Password'
                                required
                            />

                            <div className="flex ml-4 cursor-pointer">
                                <p className="text-sm text-gray-500 font-light">Forgot password?</p>
                                <p className="text-sm text-green-600 ml-2 font-medium">Reset it</p>
                            </div>

                            <button className="text-white bg-green-600 rounded-xl p-4 w-[96%] ml-2 font-bold mt-8" type="submit">
                                LogIn
                            </button>

                            <p className="text-center text-gray-500 mt-6">or</p>

                            <div className="flex-col ml-6">
                                <div className="flex items-center mt-4 w-[95%] cursor-pointer bg-[#f5f6f7] h-12 rounded-3xl">
                                    <BsFillTelephoneFill size={25} className='ml-16' />
                                    <p className="text-lg text-slate-700 font-semibold ml-12">Continue With Phone</p>
                                </div>
                                <div className="flex items-center mt-4  w-[95%] cursor-pointer bg-[#f5f6f7] h-12 rounded-3xl">
                                    <img src='https://i.postimg.cc/wjq4NbXY/fb.png' alt='icon' className="ml-12 h-8 w-12" />
                                    <p className="text-lg text-slate-700 font-semibold ml-8">Continue With Facebook</p>
                                </div>
                                <div className="flex items-center mt-4  w-[95%] cursor-pointer bg-[#f5f6f7] h-12 rounded-3xl">
                                    <img src="https://i.postimg.cc/tg01f82L/googlr.png" alt='icon' className="ml-[3.5rem] h-8 w-8" />
                                    <p className="text-lg text-slate-700 font-semibold ml-12">Continue With Google</p>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>)}

            { !IsLogIn &&
                (
                    <div>
                        <button className={checklog ? 'w-[20rem] h-14 text-slate-800 font-medium text-xl rounded-lg bg-[#f7f7f7] ml-8' : 'bg-green-600 w-24 h-12 rounded-3xl text-white mt-3 mr-4 font-semibold'} onClick={toggleModal}>
                            Log in
                        </button>
                    </div>
                )}


        </div>
    )
};

export default withRouter(LogIn);