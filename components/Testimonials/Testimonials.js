import Head from "next/head";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="mb-[120px] lg:w-[1216px] mx-auto px-6">
      {/* SEO */}
      <Head>
        <title>Testimonials</title>
        <meta
          name="description"
          content="It's great to be able to work out from home and be helped by the gymbaran. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches"
        />
        <meta name="Keyword" content="Gym Baran, Gym, testimonials" />
      </Head>
      <div className="lg:flex lg:justify-center">
        <h1 className="mb-5 font-[Grotesque] lg:text-[46px] text-[28px] leading-10 lg:leading-[73px]  font-bold lg:font-normal">
          Testimonials
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-[60px]">
        <div className="lg:w-[573px] rounded-[10px] bg-white shadow-lg">
          <div className="relative p-6 lg:px-[43px] lg:py-[45px]">
            <h1 className="text-[12px] lg:text-base opacity-50 text-[#262524]">
              It's great to be able to work out from home and be helped by the
              gymbaran. My day feels fresher when I regularly participate in
              this fun sport. Good luck to the coaches.
            </h1>
            <span className="text-[46px] opacity-50 absolute text-black lg:top-[27px] lg:left-[25px] top-[5px] left-[5px]">
              “
            </span>
            <div className="flex items-center lg:mt-14 mt-6">
              <div className="flex justify-center items-center rounded-[10px] lg:rounded-[20px] w-[36px] h-[36px] lg:w-[69px] lg:h-[69px] bg-[#E275CD]">
                <Image
                  src="/gallery.png"
                  width={20}
                  height={20}
                  className="absolute "
                ></Image>
              </div>
              <div className="ml-[30px] text-[#262524] lg:text-base text-[14px] ">
                <p className="lg:mb-[10px] mb-2 font-bold">Suketi Mantapo</p>
                <p className="opacity-50">Designer Graphic</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[573px] rounded-[10px] bg-white shadow-lg">
          <div className="relative p-6 lg:px-[43px] lg:py-[45px]">
            <h1 className="text-[12px] lg:text-base opacity-50 text-[#262524]">
              exercise used to be a boring thing for me, but after following the
              gymbaran I became fond of sports and sports became my new hobby. I
              participate in sports 5 times a week.
            </h1>
            <span className="text-[46px] opacity-50 absolute text-black lg:top-[27px] lg:left-[25px] top-[5px] left-[5px]">
              “
            </span>
            <div className="flex items-center lg:mt-14 mt-6">
              <div className="flex justify-center items-center rounded-[10px] lg:rounded-[20px] w-[36px] h-[36px] lg:w-[69px] lg:h-[69px] bg-[#E275CD]">
                <Image
                  src="/gallery.png"
                  width={20}
                  height={20}
                  className="absolute "
                ></Image>
              </div>
              <div className="ml-[30px] text-[#262524] font-base">
                <p className="lg:mb-[10px] mb-2 font-bold">Ada Apose</p>
                <p className="opacity-50">Designer Graphic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[1216px] flex justify-center lg:justify-end  mt-8 lg:mt-6 lg:ml-0">
        <Image
          src="/Vector.png"
          width={27}
          height={7}
          className="lg:mr-[30px] opacity-50"
        ></Image>
      </div>
    </div>
  );
};

export default Testimonials;
