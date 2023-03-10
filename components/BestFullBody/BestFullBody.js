import Head from "next/head";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BestFullBody = () => {
  return (
    <div className="lg:w-[1241px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 my-[120px] px-6">
      {/* SEO */}
      <Head>
        <title>Best Full Body workout to lose fat</title>
        <meta
          name="description"
          content="Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine."
        />
        <meta name="Keyword" content="Gym Baran, Gym" />
      </Head> 
      <div className="mt-[60px] lg:mt-0 ml-[-15px] lg:ml-0">
        <Image src="/BestbodyImage.png" width={570} height={496}></Image>
      </div>
      <div className="lg:ml-10 mt-4">
        <h1 className="mb-[30px] font-[Grotesque] text-[28px] lg:text-[46px] lg:leading-[73px] leading-10 text-[#262524] font-bold lg:font-normal">
          Best full body workout to lose fat
        </h1>
        <p className="lg:w-[553px] mb-[50px] text-[12px] lg:text-base text-[#262524] leading-5 lg:leading-7 opacity-50">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home.
        </p>
        <button className="flex items-center w-[176px] lg:w-[246px] rounded-[10px] bg-[#264373] px-6 py-[14px] text-[12px] lg:text-base text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#8382EB] duration-[400ms,700ms] transition-[color,box-shadow]">
          Get started{" "}
          <FaArrowRight className="ml-auto text-[12px] lg:text-2xl"></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default BestFullBody;
