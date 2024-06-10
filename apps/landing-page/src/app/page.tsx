import AboutSectionOne from "@/components/about/aboutSectionOne";
import Blog from "@/components/blog";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutSectionOne />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
