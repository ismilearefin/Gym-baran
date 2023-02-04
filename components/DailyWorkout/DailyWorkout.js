import Image from 'next/image';
import React from 'react';
import {FaArrowRight} from 'react-icons/fa'

const DailyWorkout = () => {
    return (
        <div className='lg:w-[1241px]  mx-auto grid lg:grid-cols-2 my-[120px] px-6'>
            <div className='lg:ml-10'>
                <h1 className='mb-[30px] font-[Grotesque] text-[28px] leading-10  lg:text-[46px] lg:leading-[73px] text-[#262524] lg:font-normal font-bold'>Daily morning workout in home</h1>
                <p className='lg:w-[553px] mb-[50px] font-base text-[#262524] leading-7 opacity-50'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.</p>
                <button className='flex items-center w-[176px] lg:w-[246px] rounded-[10px] bg-[#264373] px-6 py-[14px] text-[12px] lg:text-base text-white'>Get started <FaArrowRight className='ml-auto text-2xl'></FaArrowRight></button>
            </div>
            <div className='relative lg:ml-16 mt-[60px] lg:mt-0 lg:mb-0'>
                <Image src='/dailyWorkOut.png' width={492} height={484} className=''></Image>
                <Image src='/manIcon.png' width={60} height={60} className='absolute top-12 left-16 hidden lg:block'></Image>
                <Image src='/pinkIcon.png' width={60} height={60} className='absolute top-44 left-16 hidden lg:block'></Image>
                <Image src='/gallery.png' width={80} height={80} className='absolute top-[110px] right-36 lg:top-44 lg:left-[220px] w-[50px] md:w-[60px]'></Image>
            </div>
        </div>
    );
};

export default DailyWorkout;