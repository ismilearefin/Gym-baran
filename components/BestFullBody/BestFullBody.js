import Image from 'next/image';
import React from 'react';
import {FaArrowRight} from 'react-icons/fa'

const BestFullBody = () => {
    return (
        <div className='w-[1241px]  mx-auto grid grid-cols-2 my-[120px]'>
            <div>
                <Image src='/BestbodyImage.png' width={570} height={496}></Image>
            </div>
            <div className='ml-10 mt-4'>
                <h1 className='mb-[30px] font-[Grotesque] text-[46px] leading-[73px] text-[#262524] font-normal'>Best full body workout to lose fat</h1>
                <p className='w-[553px] mb-[50px] font-base text-[#262524] leading-7 opacity-50'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.</p>
                <button className='flex items-center w-[246px] rounded-[10px] bg-[#264373] px-6 py-[14px] text-base text-white'>Get started <FaArrowRight className='ml-auto text-2xl'></FaArrowRight></button>
            </div>
        </div>
    );
};

export default BestFullBody;