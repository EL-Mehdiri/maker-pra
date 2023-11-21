'use client'

import React, { useState } from 'react'


const Footer = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
            return setIsValidEmail(false);
        alert("Thank you for subscribing!");

    }

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(inputEmail));
    };
    return (
        <footer className='py-[52px] footerbg'>
            <div className='headingThree text-center mb-[42px] '>Get notified when we launch</div>
            <form onSubmit={onSubmit}
                className='flex  justify-center items-center gap-[16px] '>
                <div className='flex flex-col'>
                    <input value={email}
                        onChange={handleEmailChange}
                        className={`py-[12px] px-[16px] ${!isValidEmail && 'border-2 border-red-700'} outline-none text-white bg-secondary md:w-[320px] rounded-[24px]`} type="email" placeholder='Email address' />
                    <span className='text-red-700 h-1 ml-4 '>{!isValidEmail && "Please enter a valid email address"}</span>
                </div>
                <button type='submit' className='py-[12px] px-[18px] !text-secondary w-[140px] !text-[15px] headingFour bg-colorprimary hover:bg-opacity-0 transition-colors hover:!text-white  border-colorprimary border-2 rounded-full'>Get notified</button>
            </form>
        </footer>
    )
}

export default Footer