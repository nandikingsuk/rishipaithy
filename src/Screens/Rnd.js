import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

const Rnd = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>R&amp;D - Rishipaithy</title>
                <link rel="canonical" href="https://rishipaithy.com/r-and-d/" />
            </Helmet>
            <Header/>
            <div className="container mx-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link className="text-dark text-decoration-none" to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">R&amp;D</li>
                    </ol>
                </nav>
            </div>
            <div className="p-4 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">R&amp;D</h1>
                    <p className="col-md-12 fs-5">Our team at Rishipaithy has undergone thorough research in coming up with the modern Ayurvedic medicines. While keeping in mind the roots and basics of Ayurveda, Rishipaithy’s extensive research and development team has added a modern touch it, creating fully organic Ayurvedic medicines, which are also free of side effects.</p>
                    <p className="col-md-12 fs-5">As mentioned before, our Ayurvedic medicines are made of fresh and natural herbs and spices. All of them are handpicked by us from the lush green gardens, at their very fresh states. They are examined thoroughly before their amalgamation to our one of kind medicines.</p>
                    <p className="col-md-12 fs-5">All the medications and practices provided by our professionals are clinically proven. Rishipaithy’s Ayurveda and Yoga experts are certified professionals, who have the capability of dealing with all sorts of patients and their problems.</p>
                    <p className="col-md-12 fs-5">We at Rishipaithy have taken into account the current worldly problems and diseases that are faced by the people. With our sheer hard work and determination, we believe that we will be of your great help. Join our wellness centre to find out the best version of you.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Rnd
