import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

const Faq = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>FAQ - Rishipaithy</title>
                <link rel="canonical" href="https://rishipaithy.com/faq/" />
            </Helmet>
            <Header/>
            <div className="container mx-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link className="text-dark text-decoration-none" to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">FAQ</li>
                    </ol>
                </nav>
            </div>
            <div className="p-4 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">FAQ</h1>
                    <p className="col-md-12 fs-5">How do I shop for Rishipaithy products?</p>
                    <p className="col-md-12 fs-6">Rishipaithy products can be purchased through our official site www.kalpamritmarketing.com. You may need to create an account or provide some personal information (name, address, phone number) relating to the delivery of the product.</p>
                    <p className="col-md-12 fs-5">How do I pay for Rishipaithy products?</p>
                    <p className="col-md-12 fs-6">Our products can be paid for using any international credit card, for example, MasterCard, VISA, etc. Our payment portal is 100% secured and your important online banking options are held solely by us. We are a trusted site and have zero records of customer payment inconvenience.</p>
                    <p className="col-md-12 fs-5">How does Rishipaithy confirm orders?</p>
                    <p className="col-md-12 fs-6">Upon purchasing from Rishipaithy, you will be sent an email with your complete order details. Afterward, you are most likely to be contacted via texts or phone calls by the delivery man, until and unless your product is in your hands.</p>
                    <p className="col-md-12 fs-5">Does Rishipaithy deliver outside its home city?</p>
                    <p className="col-md-12 fs-6">Yes, we deliver our products to cities across India. The delivery charge of shipping to different cities may be higher than the normal delivery charge.</p>
                    <p className="col-md-12 fs-5">Is it safe to use Rishipaithy’s medications?</p>
                    <p className="col-md-12 fs-6">Medications at Rishipaithy are provided by skilled Ayurveda doctors. Our ailments are safe and made with natural herbs and spices.</p>
                    <p className="col-md-12 fs-6">Rishipaithy also prescribes yoga courses as remedies for diseases. This practice is globally known for its effectiveness. All our ailments at Rishipaithy are suggested by experts and have zero after-effects.</p>
                    <p className="col-md-12 fs-5">How does Rishipaithy’s courier service work?</p>
                    <p className="col-md-12 fs-6">All our products are delivered via trusted and well-known courier service providers. We will let you know when we hand over your product to the courier service company via an SMS or phone call.</p>
                    <p className="col-md-12 fs-6">As soon as your product reaches your city, we will let you know about the courier package details and provide you with all information as to how you can collect it.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Faq
