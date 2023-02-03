import Image from 'next/image';
import React from 'react';
import {FaArrowRight} from 'react-icons/fa'

const DailyWorkout = () => {
    return (
        <div className='w-[1241px]  mx-auto grid grid-cols-2 my-[120px] '>
            <div className='ml-10'>
                <h1 className='mb-[30px] font-[Grotesque] text-[46px] leading-[73px] text-[#262524] font-normal'>Daily morning workout in home</h1>
                <p className='w-[553px] mb-[50px] font-base text-[#262524] leading-7 opacity-50'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.</p>
                <button className='flex items-center w-[246px] rounded-[10px] bg-[#264373] px-6 py-[14px] text-base text-white'>Get started <FaArrowRight className='ml-auto text-2xl'></FaArrowRight></button>
            </div>
            <div className='relative ml-16'>
                <Image src='/dailyWorkOut.png' width={492} height={484}></Image>
                <Image src='/manIcon.png' width={60} height={60} className='absolute top-12 left-16'></Image>
                <Image src='/pinkIcon.png' width={60} height={60} className='absolute top-44 left-16'></Image>
                <Image src='/gallery.png' width={80} height={80} className='absolute top-44 left-[220px]'></Image>
            </div>
        </div>
    );
};

export default DailyWorkout;