import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Treatments = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Treatments - Rishipaithy</title>
                <link rel="canonical" href="https://rishipaithy.com/treatments/" />
            </Helmet>
            <Header/>
            <div className="container mx-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link className="text-dark text-decoration-none" to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Treatments</li>
                    </ol>
                </nav>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-4">
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Sciatica</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Psoriasis</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Thyroid</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Liver</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Acidity</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Heart diseases</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Uterus fibroid, Ovarian cyst</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Arthritis, Gout</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Diabetis</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Piles</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Leucoderma</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Kidney stone</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Epilepsy</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Kidney ( creatinine/ uric acid)</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Tumour</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Skin Disease</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Platelets</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Obesity</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Leucorrhoea</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Amenorrhoea</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Menorrhagia</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Knee pain</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Cervical, Slip Disk</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Obstinate</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Flu</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Asthma</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Height</h5>
                        <p className="card-text"><span className="material-icons align-bottom">people_alt</span> Treated: 0</p>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Treatments
