import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
    return (
        <div className='w-[1229px] mx-auto grid grid-cols-2 items-center'>
            <div className='relative'>
                <Image src='/Howitworks.png' width={605} height={444} className='mr-4'></Image>
                <Image src='/gallery.png' width={80} height={80} className='absolute top-[200px] left-[275px]'></Image>
            </div>
            <div className='text-[#262524] ml-8'>
                <h1 className='mb-8 font-[Grotesque] text-[46px] leading-[73px]  font-normal'>How it works?</h1>
                <div className='font-normal w-[566px] text-[18px]'>
                    <div className='px-9 py-8 rounded-[10px] mb-4 bg-white opacity-50 drop-shadow-md hover:drop-shadow-2xl hover:opacity-100'>
                        <p>The body becomes sick because of rarely exercise</p>
                    </div>
                    <div className='px-9 py-8 rounded-[10px] mb-4 bg-white opacity-50 drop-shadow-md hover:drop-shadow-2xl hover:opacity-100'>
                        <p>Don't give up in order to get a healthy and ideal body</p>
                    </div>
                    <div className='px-9 py-8 rounded-[10px] mb-4 bg-white opacity-50 drop-shadow-md hover:drop-shadow-2xl hover:opacity-100'>
                        <p>Become addicted to the exercise that is given</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;