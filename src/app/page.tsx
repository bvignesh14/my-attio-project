import AllFeatures from "@/sections/AllFeatures";
import Cta from "@/sections/Cta";
import Feature1 from "@/sections/Feature1";
import Feature2 from "@/sections/Feature2";
import Feature3 from "@/sections/Feature3";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Cta />
      <AllFeatures />
      <Footer />
    </>
  );
}
