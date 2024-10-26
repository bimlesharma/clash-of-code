import AboutClashOfCode from "@/components/AboutUs";
// import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Organizers from "@/components/Organizers";
import Tracks from "@/components/Tracks";


export default function Home() {
  return (
    <div className="">
      {/* <Hero /> */}
      <Hero2 />
      <AboutClashOfCode />
      <Tracks />
      <Organizers />
    </div>
  );
}
