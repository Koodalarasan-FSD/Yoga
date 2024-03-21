import React from 'react'
import '../bootstrap.min.css';
import '../style.css';
import { Header } from '../templates/Header';
import { PagetopAbout } from './PagetopAbout';
import { ServiceAbout } from './ServiceAbout';
import { WhatWeDoAbout } from './WhatWeDoAbout';
import { TrainerIndex } from '../templates/TrainerIndex';
import { TestimonialIndex } from '../templates/TestimonialIndex';
import { BlogAbout } from './BlogAbout';
import { Footer } from '../templates/Footer';
import { Preloader } from '../templates/Preloader';
import { useEffect, useState } from 'react';


export const About = () => {
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
      <PagetopAbout/>
      <ServiceAbout/>
      <WhatWeDoAbout/>
      <TrainerIndex/>
      <TestimonialIndex/>
      <BlogAbout/>
      <Footer/>
    </div>
  )
}
