import React from 'react'
import '../bootstrap.min.css';
import '../style.css';
import { Header } from '../templates/Header';
import { Footer } from '../templates/Footer';
import { Preloader } from '../templates/Preloader';
import { useEffect, useState } from 'react';
import { PagetopSingleBlog } from './PagetopSingleBlog';
import { SingleBlogDetails } from './SingleBlogDetails';


export const SingleBlog = () => {
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
            <Header />
            <PagetopSingleBlog />
            <SingleBlogDetails/>
            <Footer />
        </div>
    )
}
