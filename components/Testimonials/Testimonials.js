import Image from 'next/image';
import React from 'react';

const Testimonials = () => {
    return (
        <div className='mb-[120px] w-[1216px] mx-auto'>
            <h1 className='mb-5 font-[Grotesque] text-[46px] text-center font-normal'>Testimonials</h1>
            <div className='grid grid-cols-2 gap-[60px]'>
                <div className='w-[573px] rounded-[10px] bg-white shadow-lg'>
                <div className='relative ml-4 px-[43px] py-[45px]'>
                    <h1 className='text-base opacity-50 text-[#262524]'>It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.</h1>
                    <span className='text-[46px] opacity-50 absolute text-black top-[27px] left-[25px]'>“</span>
                <div className='flex mt-14'>
                    <div className='flex justify-center items-center rounded-[20px] w-[69px] h-[69px] bg-[#E275CD]'>
                        <Image src='/gallery.png' width={20} height={20} className='absolute '></Image> 
                    </div>
                    <div className='ml-[30px] text-[#262524] font-base'>
                        <p className='mb-[10px] font-bold'>Suketi Mantapo</p>
                        <p className='opacity-50'>Designer Graphic</p>
                    </div>
                </div>
                </div>
                </div>
                <div className='w-[573px] rounded-[10px] bg-white shadow-lg'>
                <div className='relative ml-4 px-[43px] py-[45px]'>
                    <h1 className='text-base opacity-50 text-[#262524]'>exercise used to be a boring thing for me, but after following the gymbaran I became fond of sports and sports became my new hobby. I participate in sports 5 times a week.</h1>
                    <span className='text-[46px] opacity-50 absolute text-black top-[27px] left-[25px]'>“</span>
                <div className='flex mt-14'>
                    <div className='flex justify-center items-center rounded-[20px] w-[69px] h-[69px] bg-[#E275CD]'>
                        <Image src='/gallery.png' width={20} height={20} className='absolute '></Image> 
                    </div>
                    <div className='ml-[30px] text-[#262524] font-base'>
                        <p className='mb-[10px] font-bold'>Ada Apose</p>
                        <p className='opacity-50'>Designer Graphic</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;