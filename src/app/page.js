import BestFullBody from "components/BestFullBody/BestFullBody";
import DailyWorkout from "components/DailyWorkout/DailyWorkout";
import HeroSection from "components/HeroSection/HeroSection";
import HowItWorks from "components/HowItWorks/HowItWorks";
import StaticBar from "components/StaticBar/StaticBar";
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
    </main>
  )
}
