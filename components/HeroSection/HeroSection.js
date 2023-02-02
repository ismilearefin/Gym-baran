import Navbar from "components/Navbar/Navbar";
import Image from "next/image";

const HeroSection = () => {
    return (
            <div className=" bg-left bg-no-repeat bg-auto ">
            <div className="bg-[url('/bgone.png')] ">
            <Navbar></Navbar>
            <div className="flex mt-[85px] h-[580px]">
                <div className="w-1/2 ml-20 mt-12">
                    <h1 className="font-[Grotesque] font-bold text-[56px] text-[#262524]">Healthy in side <span className="text-[#8382EB]">fresh</span> out side</h1>
                    <p className="leading-7 text-base my-6">Exercise is a very important need for our body. Health and<br/> fitness will be obtained if you can do regular exercise and<br/> run a healthy routine.</p>
                    <div className="flex mb-[50px]">
                        <div className="flex items-center justify-between w-[246px] bg-[#264373] px-6 py-3 rounded-[10px] mr-9">
                            <button className="text-base text-white">Get started</button>
                            <Image src='/CaretCircleRight.png' width={32} height={32}></Image>
                        </div>
                        <div className="flex items-center justify-center w-[174px] rounded-[10px] px-[18px] py-3 bg-white drop-shadow-2xl">
                            <Image src='/PlayCircle.png' width={26} height={26}></Image>
                            <button className="text-base">Learn more</button>
                        </div>
                    </div>
                    <p>Brands:</p>
                    <Image src='/brandslogo.png' width={462} height={64}></Image>
                </div>
                <div className="flex justify-center w-1/2">
                    <Image src='/GroupHero.png' width={584} height={580}></Image>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HeroSection;