import React from 'react'
import '../bootstrap.min.css';
import '../style.css';
import { Header } from '../templates/Header';
import { PagetopBlog } from './PagetopBlog';
import { EventsinBlog } from './EventsinBlog';
import { Footer } from '../templates/Footer';
import { Preloader } from '../templates/Preloader';
import { useEffect, useState } from 'react';


export const Blog = () => {
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
      <PagetopBlog/>
      <EventsinBlog/>
      <Footer/>
    </div>
  )
}
