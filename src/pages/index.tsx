import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Features from '../components/Features';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Appointment from '../components/Appointment';


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
    </div>
  );
}