import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
    return (
        <div className='lg:w-[1229px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center px-6'>
            <div className='relative mt-[60px] lg:mt-0'>
                <Image src='/Howitworks.png' width={605} height={444} className='mr-4 ml-[-10px] md:ml-[-50px] lg:ml-0'></Image>
                <Image src='/gallery.png' width={80} height={80} className='absolute lg:top-[200px] top-[120px] right-[140px] lg:left-[265px] w-[50px] lg:w-[80px]'></Image>
            </div>
            <div className='text-[#262524] lg:ml-8 '>
                <h1 className='mb-8 font-[Grotesque] text-[28px] lg:text-[46px] leading-10 lg:leading-[73px] font-bold lg:font-normal'>How it works?</h1>
                <div className='font-normal lg:w-[566px] text-[18px]'>
                    <div className='px-9 py-8 rounded-[10px] mb-5 lg:mb-4 bg-white opacity-50 drop-shadow-2xl lg:drop-shadow-md hover:drop-shadow-2xl hover:opacity-100'>
                        <p>The body becomes sick because of rarely exercise</p>
                    </div>
                    <div className='px-9 py-8 rounded-[10px] mb-5 lg:mb-4 bg-white opacity-50 drop-shadow-2xl lg:drop-shadow-md hover:drop-shadow-2xl hover:opacity-100'>
                        <p>Don't give up in order to get a healthy and ideal body</p>
                    </div>
                    <div className='px-9 py-8 rounded-[10px]  lg:mb-4 bg-white opacity-50 drop-shadow-2xl lg:drop-shadow-md hover:drop-shadow-2xl hover:opacity-100'>
                        <p>Become addicted to the exercise that is given</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;