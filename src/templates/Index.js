import React from 'react'
import '../bootstrap.min.css';
import '../style.css';
import { Header } from '../templates/Header';
import { Hero } from '../templates/Hero';
import { AboutIndex } from '../templates/AboutIndex';
import { ClassesIndex } from '../templates/ClassesIndex';
import { TrainerIndex } from '../templates/TrainerIndex';
import { TestimonialIndex } from '../templates/TestimonialIndex';
import { EventIndex } from '../templates/EventIndex';
import { PricingIndex } from '../templates/PricingIndex';
import { SignUpIndex } from '../templates/SignUpIndex';
import { Footer } from '../templates/Footer';
import { Preloader } from '../templates/Preloader';
import { useEffect, useState } from 'react';




export const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an async operation (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);

    }, 2000);
  }, []);

  
  return (
    <div>
      {loading ? <Preloader /> : null}
      <Header/>
      {/*<Infor/>*/}
      <Hero/>
      <AboutIndex/>
      <ClassesIndex/>
      <TrainerIndex/>
      <TestimonialIndex/>
      <EventIndex/>
      <PricingIndex/>
      <SignUpIndex/>
      {/*<GalleryIndex/>*/}
      <Footer/>
      
    </div>
  )
}
