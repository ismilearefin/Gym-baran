import BestFullBody from "components/BestFullBody/BestFullBody";
import DailyWorkout from "components/DailyWorkout/DailyWorkout";
import Footer from "components/Footer/Footer";
import HeroSection from "components/HeroSection/HeroSection";
import HowItWorks from "components/HowItWorks/HowItWorks";
import Navbar from "components/Navbar/Navbar";
import Programs from "components/Programs/Programs";
import StaticBar from "components/StaticBar/StaticBar";
import Testimonials from "components/Testimonials/Testimonials";
import TextSection from "components/TextSection/TextSection";


export default function Home() {
  return (
    <main className=" w-[1440px] mx-auto">
      <HeroSection></HeroSection>
      <TextSection></TextSection>
      <StaticBar></StaticBar>
      <BestFullBody></BestFullBody>
      <DailyWorkout></DailyWorkout>
      <HowItWorks></HowItWorks>
      <Programs></Programs>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </main>
  )
}
