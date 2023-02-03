import Image from 'next/image';
import React from 'react';

const Programs = () => {
    return (
        <div className='my-[120px] grid justify-center'>
            <h1 className='font-[Grotesque] text-[46px] text-center mb-[50px]'>Programs that can<br/> be taken</h1>
        
            <div className='grid grid-cols-3 gap-20'>
                <div className='flex items-center'>
                    <div className='mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#5478EF] to-[#D6DFFF] rounded-full drop-shadow-md'>
                        <Image src='/man-doing-yoga-.png' width={50} height={50}></Image>
                    </div>
                    <div className='text-base'>
                        <p className='font-bold mb-[10px]'>Gets ABS in 2 weeks</p>
                        <p className='opacity-50'>Exercise is a very important<br/> need for our body. </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#4BACE1] to-[#D8F1FF] rounded-full drop-shadow-md'>
                        <Image src='/man-doing-yoga.png' width={50} height={50}></Image>
                    </div>
                    <div className='text-base'>
                        <p className='font-bold mb-[10px]'>25 Mins full body workout</p>
                        <p className='opacity-50'>Exercise is a very important<br/> need for our body. </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#DD69C7] to-[#FFC0F3] rounded-full drop-shadow-md'>
                        <Image src='/stretching.png' width={50} height={50}></Image>
                    </div>
                    <div className='text-base'>
                        <p className='font-bold mb-[10px]'>10 Mins toned arms workout</p>
                        <p className='opacity-50'>Exercise is a very important<br/> need for our body. </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#DD69C7] to-[#FFC0F3] rounded-full drop-shadow-md'>
                        <Image src='/man-doing-yoga.png' width={50} height={50}></Image>
                    </div>
                    <div className='text-base'>
                        <p className='font-bold mb-[10px]'>15 Mins full body fat burn</p>
                        <p className='opacity-50'>Exercise is a very important<br/> need for our body. </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#5478EF] to-[#D6DFFF] rounded-full drop-shadow-md'>
                        <Image src='/person.png' width={50} height={50}></Image>
                    </div>
                    <div className='text-base'>
                        <p className='font-bold mb-[10px]'>25 Mins HIIT workout</p>
                        <p className='opacity-50'>Exercise is a very important<br/> need for our body. </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='mr-[23px] grid justify-center items-center w-20 h-20 p-4 bg-gradient-to-r from-[#4BACE1] to-[#D8F1FF] rounded-full drop-shadow-md'>
                        <Image src='/yoga-posture.png' width={50} height={50}></Image>
                    </div>
                    <div className='text-base'>
                        <p className='font-bold mb-[10px]'>Intense lower Abs workout</p>
                        <p className='opacity-50'>Exercise is a very important<br/> need for our body. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programs;