import HeroSection from "components/HeroSection/HeroSection";
import StaticBar from "components/StaticBar/StaticBar";
import TextSection from "components/TextSection/TextSection";


export default function Home() {
  return (
    <main className=" w-[1440px] mx-auto">
      <HeroSection></HeroSection>
      <TextSection></TextSection>
      <StaticBar></StaticBar>
    </main>
  )
}
