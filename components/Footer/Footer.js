import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='w-[1440px] h-[448px] bg-[#1C3764] relative grid justify-center items-center'>
            <Image src='/Stroke.png' width={200} height={185} className='absolute top-0 left-0 z-10'></Image>
            <Image src='/Stroke.png' width={200} height={192} className='absolute bottom-0 right-0 opacity-80'></Image>
            <div className='w-[1150px] flex justify-between'>
                <div className='w-1/2'>
                    <div className="flex font-[Grotesque] items-center text-xl z-20">
                        <span className="bg-white text-[#7270EE] rounded-[10px] w-[67px] h-[38px]  px-[6px] py-[3px]">
                            <h1>Gym</h1>
                        </span>
                        <h1 className="text-white mx-1">baran</h1>
                    </div>
                    <p className='text-[18px] leading-8 text-white opacity-60 my-[30px]'>We take care of your health with<br/> regular and fun exercise</p>
                    <div className='flex gap-[18px]'>
                        <div className='w-[30px] bg-[#E275CD] h-[30px] flex justify-center items-center'>
                            <Image src='/gallery.png' width={16} height={16}></Image>
                        </div>
                        <div className='w-[30px] bg-[#E275CD] h-[30px] flex justify-center items-center'>
                            <Image src='/gallery.png' width={16} height={16}></Image>
                        </div>
                        <div className='w-[30px] bg-[#E275CD] h-[30px] flex justify-center items-center'>
                            <Image src='/gallery.png' width={16} height={16}></Image>
                        </div>
                        <div className='w-[30px] bg-[#E275CD] h-[30px] flex justify-center items-center'>
                            <Image src='/gallery.png' width={16} height={16}></Image>
                        </div>
                        <div className='w-[30px] bg-[#E275CD] h-[30px] flex justify-center items-center'>
                            <Image src='/gallery.png' width={16} height={16}></Image>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 justify-evenly w-1/2'>
                    <div>
                        <h1 className='mb-4 font-[Grotesque] text-[#F0F6FF] text-[18px] font-bold leading-8'>Program</h1>
                        <p className='mb-2 text-[18px] text-white opacity-50'>Workout</p>
                        <p className='mb-2 text-[18px] text-white opacity-50'>Gym</p>
                        <p className='mb-2 text-[18px] text-white opacity-50'>Cardio</p>
                        <p className='mb-2 text-[18px] text-white opacity-50'>Zumba</p>
                    </div>  
                    <div>
                        <h1 className='mb-4 font-[Grotesque] text-[#F0F6FF] text-[18px] font-bold leading-8'>Blog</h1>
                        <p className='mb-2 text-[18px] text-white opacity-50'>Daily stretch</p>
                        <p className='mb-2 text-[18px] text-white opacity-50'>Daily Workout</p>
                    </div>  
                    <div>
                        <h1 className='mb-4 font-[Grotesque] text-[#F0F6FF] text-[18px] font-bold leading-8'>About Us</h1>
                        <p className='mb-2 text-[18px] text-white opacity-50'>Support</p>
                        <p className='mb-2 text-[18px] text-white opacity-50'>Contact</p>
                        <p className='mb-2 text-[18px] text-white opacity-50'>Address</p>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Footer;