import Image from 'next/image';
import React from 'react';
import {FaArrowRight} from 'react-icons/fa'

const StaticBar = () => {
    return (
        <div className='w-[1236px] rounded-[30px] bg-gradient-to-r from-[#6462F0] to-[#9190E9] p-[85px] grid grid-cols-3 justify-center mx-auto'>
            <div className='flex'>
                <div className='mr-[30px] bg-[url(/Rectangleicon.png)] w-[100px] h-[100px] rounded-[20px] grid justify-center items-center'>
                    <Image src='/crucifiedpose.png' width={50} height={50} ></Image>
                </div>
                <div className=''>
                    <p className='text-white text-xl mb-4 font-bold'>Get that 11 line<br/> in 30 days</p>
                    <button className='flex items-center gap-x-5 text-white opacity-50'>Learn more <FaArrowRight className='hover:text-black'></FaArrowRight></button>
                </div>
            </div>
            <div className='flex'>
                <div className='mr-[30px] bg-[url(/Rectangleicon.png)] w-[100px] h-[100px] rounded-[20px] grid justify-center items-center'>
                    <Image src='/dancer-balance-posture-on-one-leg.png' width={50} height={50} ></Image>
                </div>
                <div className=''>
                    <p className='text-white text-xl mb-4 font-bold'>14 Days<br/> sherd challenge</p>
                    <button className='flex items-center gap-x-5 text-white opacity-50'>Learn more <FaArrowRight className='hover:text-black'></FaArrowRight></button>
                </div>
            </div>
            <div className='flex'>
                <div className='mr-[30px] bg-[url(/Rectangleicon.png)] w-[100px] h-[100px] rounded-[20px] grid justify-center items-center'>
                    <Image src='/dancer-motion.png' width={50} height={50} ></Image>
                </div>
                <div className=''>
                    <p className='text-white text-xl mb-4 font-bold'>Get that 11 line<br/> in 30 days</p>
                    <button className='flex items-center gap-x-5 text-white opacity-50'>Learn more <FaArrowRight className='hover:text-black'></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default StaticBar;