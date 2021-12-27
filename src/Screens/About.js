import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About - Rishipaithy</title>
                <link rel="canonical" href="https://rishipaithy.com/about/" />
            </Helmet>
            <Header/>
            <div className="container mx-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link className="text-dark text-decoration-none" to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
            <div className="p-4 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">About Rishipaithy</h1>
                    <p className="col-md-12 fs-5">We at Rishipaithy have decided to take a unique turn, to help you cure without allopathic medication. Just by our name, you can understand the emphasis we put on the Rishi Tradition. The Rishi Tradition has been in existence for thousands and thousands of years. This religious tradition soothes the soul with spiritual practices and Vedas.</p>
                    <p className="col-md-12 fs-5">Owned by Kalpamrit Marketing Private Limited, Rishipathy focuses on natural remedies revolving around the authenticity of Yoga and Ayurveda.</p>
                    <p className="col-md-12 fs-5">Rishipaithy has been set up with the sole aim of reestablishing the Rishi Tradition. Profound practices like yoga and Ayurveda are easy to implement and follow. They do not require expensive materials that will empty your wallets. Taking up these 100% organic practices may also eliminate the hefty amounts you spend in the form of hospital bills and medicines.</p>
                    <p className="col-md-12 fs-5">We strive to make everyone healthy from within by making them follow our ever natural processes. Join our wellness centre for helping us accomplish our goal.</p>
                    <p className="col-md-12 fs-5">Rishipaithy is all set to guide you towards the clinically proven, organic remedies. With the help of experts in the fields of yoga and Ayurveda, recover and rejuvenate yourself. We are beyond happy to be serving you.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About
