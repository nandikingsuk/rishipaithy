import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Helmet from 'react-helmet'

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Rishipaithy</title>
                <link rel="canonical" href="https://rishipathy.com/" />
            </Helmet>
            <Header/>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="./Assets/slider-1.jpg" className="d-block w-100" alt="slider-1"/>
                    </div>
                    <div className="carousel-item">
                    <img src="./Assets/slider-2.jpg" className="d-block w-100" alt="slider-2"/>
                    </div>
                    <div className="carousel-item">
                    <img src="./Assets/slider-3.jpg" className="d-block w-100" alt="slider-3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container my-4'>
                <div className="row">
                    <div className="col-lg-4 text-center">
                        <img src="./Assets/card-1.jpg" alt="" />
                        <h2 className='my-2'>Ayurveda</h2>
                        <p>Ayurveda has remained in the historic Indian roots since the past 5000 years. It emerged during the time of Vedic ages and is still in practice due to its immense effectiveness.</p>
                        <Link to="/ayurveda"><button type="button" className="btn btn-outline-secondary">Read more</button></Link>
                    </div>
                    <div className="col-lg-4 text-center">
                        <img src="./Assets/card-3.jpg" alt="" />
                        <h2 className='my-2'>Yoga</h2>
                        <p>Yoga is not just a practice but a lifestyle choice. The art of implementing yoga in your daily lives has some real benefits. It provides peace and tranquility to your mind, soul, and body.</p>
                        <Link to="/yoga"><button type="button" className="btn btn-outline-secondary">Read more</button></Link>
                    </div>
                    <div className="col-lg-4 text-center">
                    <img src="./Assets/card-2.jpg" alt="" />
                        <h2 className='my-2'>Treatments</h2>
                        <p>Rishipathy is all set to guide you towards the ayurvedic remedies. With the help of experts in the field of Ayurveda and Yoga, recover and rejuvenate yourself.</p>
                        <Link to="/treatments"><button type="button" className="btn btn-outline-secondary">Read more</button></Link>
                    </div>
                </div>
            </div>
            <div className="album py-5 bg-light">
                <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src="./Assets/dr-sudesh-kumar.jpg" alt="" />
                            <div className="card-body">
                            <p className="card-text">Dr. Sudesh Kumar is proficient in the FMCG industry, which helps Kalpamrit’s 100% natural products to be handed over safely to its customers, at reasonable Prices. Besides planning for the wellness of our customers, we at Kalpamrit genuinely care about the society that has given us space to operate and has accepted us warmly.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                        <img src="./Assets/mr-satyapal-yadav.jpg" alt="" />
                            <div className="card-body">
                            <p className="card-text">Sh. Satyapal Yadav is yet another innovative mind, in the expert team of Kalpamrit. His smart business plans and key decisions are the main tools that have led our company to gain a strong foothold in the market. Kalpamrit’s team hoping for increased customer reach, boost in sales, and further goodwill of the company.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home
