import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Privacypolicy = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Privacy policy - Rishipaithy</title>
            <link rel="canonical" href="https://rishipaithy.com/privacy-policy/" />
        </Helmet>
        <Header/>
        <div className="container mx-4">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className="text-dark text-decoration-none" to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Privacy policy</li>
                </ol>
            </nav>
        </div>
        <div className="p-4 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Privacy policy</h1>
                <p className="col-md-12 fs-5">1. Collection of Personal Data</p>
                <p className="col-md-12 fs-6">We want you to know that Rishipaithy is an informative site which aims for the wellbeing of the masses. You may visit our site without revealing your identity. However, upon the purchase of any product/service, Rishipaithy may ask for your personal information.</p>
                <p className="col-md-12 fs-6">After providing us with your genuine information, you will no longer remain unknown to us. We make sure your personal information is well protected. Your personal information can only be obtained by us with your consent. It will be limited to you until and unless you decide, or have to fill out any virtual information form on our site.</p>
                <p className="col-md-12 fs-6">We constantly try to improve our products and customer services due to which you may be asked to give us some amount of information about yourself while using our site. Rishipaithy may, however, have full information about your IP address and location when you decide to use our site.</p>
                <p className="col-md-12 fs-6">Rishipaithy may also collect your personal information while you are providing us with feedback. We also want you to know that every action of the visitors to our site is recorded by us.</p>
                <p className="col-md-12 fs-5">2. Cookie Policy</p>
                <p className="col-md-12 fs-6">Rishipaithy uses the Cookie Policy, due to which your information upon entering our site might be stored. It is just to identify the users of our site. Cookies, however, has no record of your Personally Identifiable Information.</p>
                <p className="col-md-12 fs-5">3. Utilization of Personal Data</p>
                <p className="col-md-12 fs-6">Your personal information might be shared by us, but all for good cause. This disclosure may be vital to meet Legal Processes, Law Enforcement Offices, or third party right owners.</p>
                <p className="col-md-12 fs-6">However, your personal information can be fully shared by us if our company is acquired by, or merges with another company. They will have the full right to reserve your personal information.</p>
                <p className="col-md-12 fs-5">4. Permissions</p>
                <p className="col-md-12 fs-6">It is vital for all our clients to understand that their personal information can be obtained by us only with their consent.</p>
                <p className="col-md-12 fs-6">However, Rishipaithy holds the rights to share personal information without the permission of the clients. Any changes made to our privacy policy will be officially posted on our site with full details.</p>
                <p className="col-md-12 fs-5">5. Client Statistics</p>
                <p className="col-md-12 fs-6">Upon visiting our site, we collect your demographic data through your IP address. This helps us with enhancing our customer service, surveys, and market research. We keep strict control over the visitors of our site through their IP addresses.</p>
                <p className="col-md-12 fs-5">6. Data Security</p>
                <p className="col-md-12 fs-6">Once you register or provide Rishipaithy with any personal information, we strictly protect it from being exploited. Your personal data is well protected and safe with us. We may only have to disclose it for keeping up with the legislation.</p>
            </div>
         </div>
        <Footer/>
        </>
    )
}

export default Privacypolicy
