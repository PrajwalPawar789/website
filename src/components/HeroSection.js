import React from 'react';
import web from "../images/hero.webp";
import AboutSection from './AboutSection ';
import AboutSection1 from './AboutSection1';


const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 py-8" >
        <h1 className="text-4xl font-bold mb-6" style={{ color: '#06a34e', fontFamily: 'Inter, sans-serif' }}>
          Kolte patil canvas - ON Spot Offer
        </h1>

        <img
          src={web}
          alt="Hero Section"
          className="max-w-full max-h-full"
        />



      </div>
      <AboutSection />
      <AboutSection1 />
    </>

  );
};

export default HeroSection;
