import Image from "next/image";
import localFont from "next/font/local";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Appointment from "@/components/Appointment";
import Blogs from "@/components/Blogs";
import Clients from "@/components/Clients";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className="min-w-min">
      <Hero />
      <Intro />
      <Services />
      <Contact />
      <Features />
      <Team />
      <Testimonials />
      <Pricing />
      <Appointment />
      <Blogs />
      <Clients />
      <Work />
      <Footer />
    </div>
  );
}