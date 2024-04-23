import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AboutAI from "@/components/sections/AboutAI";
import AboutBizGuide360 from "@/components/sections/AboutBizGuide360";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <Features />
      <AboutAI />
      <AboutBizGuide360 />
      {/* {process.env.BIZGUIDE360_API} */}
    </div>
  );
}
