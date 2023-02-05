import Head from "next/head";
import React from "react";

const TextSection = () => {
  return (
    <div className="lg:flex items-center justify-evenly mt-[120px] px-6">
      {/* SEO */}
      <Head>
        <title>Healthy In Side Fresh Out side</title>
        <meta
          name="description"
          content="Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine."
        />
        <meta name="Keyword" content="Gym Baran, Gym" />
      </Head>
      <div>
        <h1 className="text-[28px] mb-3 leading-10 lg:leading-[73px] lg:text-[46px] font-bold lg:font-normal font-[Grotesque] text-[#262524]">
          Healthy in side
          <br /> fresh out side
        </h1>
      </div>
      <div className="lg:w-[674px]">
        <p className="text-[12px] lg:text-base">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home. Healthy life makes you more
          excited to live the day
        </p>
      </div>
    </div>
  );
};

export default TextSection;
