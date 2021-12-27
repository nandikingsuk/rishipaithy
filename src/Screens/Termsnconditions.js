import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

const Termsnconditions = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Terms &amp; conditions - Rishipaithy</title>
            <link rel="canonical" href="https://rishipaithy.com/terms-and-conditions/" />
        </Helmet>
        <Header/>
        <div className="container mx-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className="text-dark text-decoration-none" to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Terms &amp; conditions</li>
                </ol>
            </nav>
        </div>
        <div className="p-4 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Terms &amp; Conditions</h1>
                <p className="col-md-12 fs-5">500 to 1000 sq ft space in good location of concern city.</p>
                <p className="col-md-12 fs-5">Vaidya salary will be paid by the company.</p>
                <p className="col-md-12 fs-5">Min investment Rs.5,00,000 (cost of product).</p>
                <p className="col-md-12 fs-5">Center owner will refer a good vaidya for their local area.</p>
                <p className="col-md-12 fs-5">The company will give product knowledge and proper training to vaidhya.</p>
                <p className="col-md-12 fs-5">The Center will get up to 20% gross margin on sale to the patient.</p>
                <p className="col-md-12 fs-5">No other staff/expense will provide on company costs.</p>
                <p className="col-md-12 fs-5">The cost of furniture &amp; interior will be borne by the owner.</p>
                <p className="col-md-12 fs-5">A (non-interest) refundable security of Rs.51,000 would be required.</p>
                <p className="col-md-12 fs-5">A consultancy fee of Rs.100/- will be charged for each patient. (part of the fee goes to Kalpamrit Foundation for charity work)</p>
            </div>
         </div>
        <Footer/>
        </>
    )
}

export default Termsnconditions
