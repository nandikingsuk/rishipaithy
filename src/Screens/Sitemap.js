import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Sitemap = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sitemap - Rishipaithy</title>
                <link rel="canonical" href="https://rishipaithy.com/sitemap/" />
            </Helmet>
            <Header/>
            <div className="container mx-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link className="text-dark text-decoration-none" to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Sitemap</li>
                    </ol>
                </nav>
            </div>
            <div className="card border-0">
                    <div className="card-body m-4">
                        <h3 className="card-title">Sitemap</h3>
                    </div>
            </div>
            <div className="card-group mx-4 mb-4">
                <div className="card border-0">
                    <ul className="list-group">
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/"><span class="material-icons align-bottom">check_circle_outline</span> Home</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/about"><span class="material-icons align-bottom">check_circle_outline</span> About</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/yoga"><span class="material-icons align-bottom">check_circle_outline</span> Yoga</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/ayurveda"><span class="material-icons align-bottom">check_circle_outline</span> Ayurveda</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/treatments"><span class="material-icons align-bottom">check_circle_outline</span> Treatments</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/r-and-d"><span class="material-icons align-bottom">check_circle_outline</span> R&amp;D</Link></li>
                    </ul>
                </div>
                <div className="card border-0">
                    <ul className="list-group">
                        <li className="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://kalpamritmarketing.com/"><span class="material-icons align-bottom">check_circle_outline</span> Sign-in</a></li>
                        <li className="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://kalpamritmarketing.com/"><span class="material-icons align-bottom">check_circle_outline</span> Stores</a></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/terms-and-conditions"><span class="material-icons align-bottom">check_circle_outline</span> Terms &amp; condition</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/privacy-policy"><span class="material-icons align-bottom">check_circle_outline</span> Privacy Policy</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/terms-of-use"><span class="material-icons align-bottom">check_circle_outline</span> Terms of use</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/faq"><span class="material-icons align-bottom">check_circle_outline</span> FAQs</Link></li>
                        <li className="list-group-item border-0"><Link className="card-text text-decoration-none text-dark" to="/sitemap"><span class="material-icons align-bottom">check_circle_outline</span> Sitemap</Link></li>
                    </ul>
                </div>
                <div className="card border-0">
                    <ul className="list-group">
                        <li className="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://kalpamritgroup.com/"><span class="material-icons align-bottom">check_circle_outline</span> Kalpamrit Ayurved Pvt Ltd</a></li>
                        <li className="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://kalpamritmarketing.com/"><span class="material-icons align-bottom">check_circle_outline</span> Kalpamrit Marketing Pvt Ltd</a></li>
                        <li className="list-group-item border-0"><a className="card-text text-decoration-none text-dark" href="https://kalpamritfoundation.com/"><span class="material-icons align-bottom">check_circle_outline</span> Kalpamrit Foundation</a></li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Sitemap
