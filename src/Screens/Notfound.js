import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Helmet from 'react-helmet'

const Notfound = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>404 not found - Rishipaithy</title>
                <link rel="canonical" href="https://rishipaithy.com/notfound/" />
            </Helmet>
            <Header/>
            <div className="card text-center border-0 m-4">
                <div className="card-body m-4">
                    <h5 className="card-title m-4">Oppos! page not found</h5>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Notfound
