import React from 'react'
import '../bootstrap.min.css';
import '../style.css';
import { Header } from '../templates/Header';
import { PagetopTrainers } from './PagetopTrainers';
import { Trainers_Section_In_Trainers } from './Trainers_Section_In_Trainers';
import { Footer } from '../templates/Footer';
import { Preloader } from '../templates/Preloader';
import { useEffect, useState } from 'react';
import { TrainersSectionInTrainers } from './TrainersSectionInTrainers';


export const Trainers = () => {
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
      <PagetopTrainers/>
      <TrainersSectionInTrainers/>
      <Footer/>

    </div>
  )
}
