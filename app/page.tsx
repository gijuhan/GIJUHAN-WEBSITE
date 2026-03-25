import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import Philosophy from "@/components/home/Philosophy";
import StatsBar from "@/components/home/StatsBar";
import FeaturedWork from "@/components/home/FeaturedWork";
import AIHighlight from "@/components/home/AIHighlight";
import Testimonials from "@/components/home/Testimonials";
import BlogTeaser from "@/components/home/BlogTeaser";
import ContactCTA from "@/components/home/ContactCTA";
import ScrollObjectWrapper from "@/components/three/ScrollObjectWrapper";

export default function Home() {
  return (
    <>
      <ScrollObjectWrapper />
      <Hero />
      <Marquee />
      <AboutTeaser />
      <ServicesGrid />
      <Philosophy />
      <StatsBar />
      <FeaturedWork />
      <AIHighlight />
      <Testimonials />
      <BlogTeaser />
      <ContactCTA />
    </>
  );
}
