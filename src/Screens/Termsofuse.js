import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

const Termsofuse = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Terms of use - Rishipaithy</title>
                <link rel="canonical" href="https://rishipaithy.com/terms-of-use/" />
            </Helmet>
            <Header/>
            <div className="container mx-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link className="text-dark text-decoration-none" to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Terms of use</li>
                    </ol>
                </nav>
            </div>
            <div className="p-4 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Terms of use</h1>
                    <p className="col-md-12 fs-6">Rishipaithy is a new venture for Kalparit Group. By using the services of Rishipaithy and upon the purchase of any product/service from this site, you entirely agree to the terms of use. Upon agreeing to it, you are ensuring that every conduct of you relating to Rishipaithy is done by your full consent. This contains the purchase of any medicines, services, or the consultation fee of our experts and doctors.</p>
                    <p className="col-md-12 fs-6">By agreeing to the terms of use of Rishipaithy, you confirm your understanding of the fact that our products/services comply with the government legislation and no discounts, negotiations, or offers can be expected until and unless the site announces so. We are free to make any alterations to our site at any point of time without having to obtain permission from our customers.</p>
                    <p className="col-md-12 fs-6">If you find the offerings of Rishipaithy to be undesirable or disagree with any of them, and do not want to be bound to following our terms of use, then you are free to discontinue the use of our site.</p>
                    <p className="col-md-12 fs-5">Age Limit</p>
                    <p className="col-md-12 fs-6">If you are using Rishipaithy, then we expect you to be at least 18 years old or above. If not, then you are obliged to be using our site with the permission of your parent or legal guardian. If you are below the age of 18 and are using Rishipaithy, then your parent or legal guardian will automatically be following our terms of use.</p>
                    <p className="col-md-12 fs-6">Certain remedies, practices, and medicines displayed in this site may be targeted to people with an age limit above 18. Thus, following such instructions or medications which are not suitable for an age limit below 18, will be done entirely at the risk of the underage user and their parent/legal guardian. Rishipaithy will not bear the consequences of such conduct and is not liable to compensate for any such actions.</p>
                    <p className="col-md-12 fs-5">Exchange &amp; Return Policy</p>
                    <p className="col-md-12 fs-6">Upon receiving any product from Rishipaithy in a damaged state, it must be returned to us by the given ‘return period*’. If the defected product is not to be returned within the mentioned ‘return period*’, then Rishipaithy will not be liable to compensate for it or provide you with a new product, in return of the defected one. Rishipaithy also does not offer any money-back guarantees that can be availed by returning the purchased products.</p>
                    <p className="col-md-12 fs-6">*Note: The return period will be 24 hours from the date of receipt of the product. Proof of damage or defect will be required to process the claim.</p>
                    <p className="col-md-12 fs-5">Personal Information</p>
                    <p className="col-md-12 fs-6">By agreeing to our terms of use, you give full consent in providing your genuine (as in passport/NID) information to our site. You also agree to upgrade it, if necessary.</p>
                    <p className="col-md-12 fs-5">Copyright Claims</p>
                    <p className="col-md-12 fs-6">All the information, graphics, images, and medications solely belong to Rishipaithy. They are not to be shared or used for any other purpose, at any given time. Upon doing so, you will be violating the agreement of our terms of use and may be lawfully charged of copyright infringement.</p>
                    <p className="col-md-12 fs-6">If you notice any violation of our terms of use, then you are requested to inform us of such action. We will be ever grateful to you for your assistance.</p>
                    <p className="col-md-12 fs-5">Website URL</p>
                    <p className="col-md-12 fs-6">If you find the link of Rishipaithy on any other website or platform, then we hope you understand that we do not endorse any other product/service other than the ones listed on our site.</p>
                    <p className="col-md-12 fs-6">Facing misleading information in any other site other than www.rishipaithy.com, with just the link of our site mentioned there, will not hold us responsible for your inconvenience.</p>
                    <p className="col-md-12 fs-5">Joining the Rishipaithy Community</p>
                    <p className="col-md-12 fs-6">At Rishipaithy, we may ask for your personal information in order to make you a part of our community.</p>
                    <p className="col-md-12 fs-6">For gaining access to exclusive content or for purchasing any product/service from Rishipaithy, signing up to our site may be required. Upon wanting to view any exclusive content or for purchasing any of our product/services, you will be redirected to a ‘sign up’ page, where details like your name, email address, password might be required.</p>
                    <p className="col-md-12 fs-6">We would like for our customers to know that securing their personal information, especially password, is solely their responsibility. Anyone who gets access to your password may be able to enjoy the facilities you get through your Rishipaithy account.</p>
                    <p className="col-md-12 fs-6">We, therefore, request our clients to fully protect their personal data. By failing to do so, Rishipaithy cannot be held liable.</p>
                    <p className="col-md-12 fs-5">Medications</p>
                    <p className="col-md-12 fs-6">Our natural remedies at Rishipaithy are prescribed by experts in the Yoga and Ayurveda fields. We want to warn our clients beforehand to not take up our ailments if already under some medication, provided by specialists outside Rishipaithy.</p>
                    <p className="col-md-12 fs-6">If any of our clients are undergoing severe health conditions, then it is solely their responsibility to take up our medications at their own risk. Our doctors will assist them as much as possible, but the decision lies entirely upon them.</p>
                    <p className="col-md-12 fs-6">If you face any issues regarding the all-natural remedies of Rishipaithy, then we encourage you to discontinue its use. Any harm done to you will not be compensated by us. Rishipathy cannot be held responsible for the decisions made by its clients, as we believe your decisions are wise enough for your betterment.</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Termsofuse
