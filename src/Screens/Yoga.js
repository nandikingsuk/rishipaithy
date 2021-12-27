import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

const Yoga = () => {
    return (
        <>
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>Yoga - Rishipaithy</title>
                    <link rel="canonical" href="https://rishipaithy.com/yoga/" />
            </Helmet>
            <Header/>
            <div className="container mx-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link className="text-dark text-decoration-none" to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Yoga</li>
                    </ol>
                </nav>
            </div>
            <div className="p-4 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Yoga</h1>
                    <p className="col-md-12 fs-5">Yoga is not just a practice but a lifestyle choice. The art of implementing yoga in your daily lives has some real benefits. It provides peace and tranquility to your mind, soul, and body. It does not just keep your body active and improve your muscle stretch. Yoga stimulates the parasympathetic nervous system of your body, which helps to lower stress.</p>
                    <p className="col-md-12 fs-5">Yoga helps with letting go of all the negative emotions diseases escort to your mind. This brings back the happy you and enables you to recover quickly, with full confidence and mental strength.</p>
                    <p className="col-md-12 fs-5">Yoga maintains a proper metabolism rate, which helps you remain active and lose weight. Being overweight is directly connected to diseases like heart attacks, diabetes, and high blood pressure. Spending an hour or two in yoga sessions will prevent all such diseases from touching you.</p>
                    <p className="col-md-12 fs-5">With regular yoga, you are to get your lost energy back and start to feel younger. Rewind the good times with minimal expenses. It only requires a yoga mat and tons of determination. Just like Ayurveda, Yoga can be implemented in anyone’s life, given you have little time to spare from your busy schedule. This beautiful and life-changing practice can be followed by everyone regardless of their age.</p>
                    <p className="col-md-12 fs-5">Other solid benefits of yoga include massive improvements in cardiac health and athletic performance. This exercise is not just limited to people with illnesses. Yoga is practiced worldwide by millions of people to remain fit and active.</p>
                    <p className="col-md-12 fs-5">This simple, peaceful exercise is capable of curing anxiety, depression, and chronic backache, and lessens the possibilities of breast cancer and heart diseases.</p>
                    <p className="col-md-12 fs-5">Rishipiathy is all set to guide you towards organic remedies. We prescribe Yoga as an ailment of certain illnesses. At Rishipaithy, we have experienced and skilled yoga instructors to help you recover and rejuvenate.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Yoga
