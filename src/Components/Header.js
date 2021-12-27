import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="mx-4">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom mx-3">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img className='me-2' height="40rem" src="./Assets/logo.svg" alt="" />
                        <strong><cite title="Source Title" className='text-danger'>Rishipaithy</cite></strong>
                    </a>
                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                        <li><Link to="/about" className="nav-link px-2 link-dark">About</Link></li>
                        <li><Link to="/ayurveda" className="nav-link px-2 link-dark">Ayurveda</Link></li>
                        <li><Link to="/yoga" className="nav-link px-2 link-dark">Yoga</Link></li>
                        <li><Link to="/treatment" className="nav-link px-2 link-dark">Treatments</Link></li>
                    </ul>
                    <div className="col-md-3 text-end">
                        <a href="tel:+919520121000"><button type="button" className="btn btn-primary"><span class="material-icons align-bottom">local_phone</span> +91 95201 21000</button></a>
                    </div>
                </header>
            </div>

            <div className="b-example-divider"></div>
        </div>
    )
}

export default Header
