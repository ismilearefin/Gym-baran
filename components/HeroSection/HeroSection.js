import Navbar from "components/Navbar/Navbar";
import Image from "next/image";

const HeroSection = () => {
    return (
            <div className=" lg:bg-left bg-no-repeat bg-auto ">
            <div className="bg-[url('/bgone.png')] relative">
            <Navbar></Navbar>
            <div className="flex flex-col md:flex-row lg:gap-8 md:mt-[85px] md:h-[580px] px-6">
                <div className="lg:w-1/2 lg:ml-20 mt-12">
                    <h1 className="font-[Grotesque] font-bold leading-10 lg:leading-[73px] text-[28px] lg:text-[56px] text-[#262524]">Healthy in side<br/> <span className="text-[#8382EB]">fresh</span> out side</h1>
                    <p className="leading-7 lg:text-base text-[12px] my-6">Exercise is a very important need for our body. Health and<br/> fitness will be obtained if you can do regular exercise and<br/> run a healthy routine.</p>
                    <div className="flex mb-[50px]">
                        <div className="flex items-center justify-between w-[176px] lg:w-[246px] bg-[#264373] px-4 lg:px-6 py-3 rounded-[10px] mr-[22px] lg:mr-9 ">
                            <button className="lg:text-base text-[12px] text-white">Get started</button>
                            <Image src='/CaretCircleRight.png' width={32} height={32}></Image>
                        </div>
                        <div className="flex items-center justify-center gap-2 w-[125px] lg:w-[174px] rounded-[10px] px-3 lg:px-[18px] py-3 bg-white drop-shadow-2xl">
                            <Image src='/PlayCircle.png' width={26} height={26}></Image>
                            <button className="lg:text-base text-[12px]">Learn more</button>
                        </div>
                    </div>
                    <p>Brands:</p>
                    <Image src='/brandslogo.png' width={462} height={64}
                    ></Image>
                </div>
                <div className="flex justify-center lg:w-1/2 mt-[60px] lg:mt-0 ">
                    <Image src='/GroupHero.png'
                     width={584}
                     height={580}
                      ></Image>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HeroSection;