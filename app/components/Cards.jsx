import Image from 'next/image'
import React from 'react'

const Cards = () => {
    const content = [
        {
            title: "Indulge your passions",
            description: "Your passions shouldn&apos;t be just for the weekend. Earn a living doing what you love.",
            img: '/images/Group 7.svg'
        },
        {
            title: "Gain financial freedom",
            description: "Start making money work for you. There&apos;s nothing quite like earning while you sleep. ",
            img: '/images/Group 9.svg',
            mt: '48px'
        },
        {
            title: "Choose your lifestyle",
            description: "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.",
            img: '/images/Group 10.svg'
        },
        {
            title: "Work from anywhere",
            description: "Selling online means not being pinned down. Want to work AND travel? Go for it!",
            img: '/images/Group 12.svg',
            mt: '48px'
        },
    ]
    return (
        <section className='container grid lg:grid-cols-4 md:grid-cols-1 lg:gap-0 md:gap-[40px] gap-[56px]'>
            {content.map((item, index) => (
                <div key={index} className={` ${item.mt && 'lg:mt-[48px] lg:ml-0 md:ml-[48px] md:mt-0'}  lg:block md:flex gap-[55px] text-center md:text-left`} >
                    <Image src={item.img} width={160} height={160} alt='...' className='m-auto md:m-0' />
                    <div>
                        <div className='headingFour pt-[48px] pb-[24px]'>{item.title}</div>
                        <div className='text-therd lg:w-[260px] md:w-[500px]'>{item.description}</div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Cards