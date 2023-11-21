'use client'

import React, { useState } from 'react'


const Footer = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);


    const handleEmailChange = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(inputEmail));
    };
    return (
        <footer className='py-[52px] footerbg px-4'>
            <div className='headingThree text-center mb-[42px] '>Get notified when we launch</div>
            <form onSubmit={(e) => e.preventDefault()}
                className='flex flex-col md:flex-row justify-center items-center gap-[16px] w-full '>
                <div className='flex flex-col'>
                    <input value={email}
                        onChange={handleEmailChange}
                        className={`py-[12px] px-[16px] ${!isValidEmail && 'border-2 border-red-700'} outline-none text-white bg-secondary md:w-[320px]  w-[96dvw] rounded-[24px]`} type="email" placeholder='Email address' />
                    <span className='text-red-700 h-1 ml-4 '>{!isValidEmail && "Please enter a valid email address"}</span>
                </div>
                <button type='submit' className='py-[12px] px-[18px] !text-secondary md:w-[140px] w-full !text-[15px] headingFour bg-colorprimary hover:bg-opacity-0 transition-colors hover:!text-white  border-colorprimary border-2 rounded-full'>Get notified</button>
            </form>
        </footer>
    )
}

export default Footer