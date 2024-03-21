import React from 'react'
import '../bootstrap.min.css';
import '../style.css';
import { Header } from '../templates/Header';
import { PagetopClasses } from './PagetopClasses';
import { Class_Section_in_Class } from './Class_Section_in_Class';
import { Footer } from '../templates/Footer';
import { Preloader } from '../templates/Preloader';
import { useEffect, useState } from 'react';
import { ClassSectionInClass } from './ClassSectionInClass';


export const Classes = () => {
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
      <PagetopClasses/>
      <ClassSectionInClass/>
      <Footer/>
    </div>
  )
}
