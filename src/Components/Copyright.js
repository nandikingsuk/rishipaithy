import React from 'react'
import { Link } from 'react-router-dom'
const Copyright = () => {
    return (
        <div>
            {/* copyright start here */}
            <footer className="footer mt-auto py-3 bg-dark">
            <div className="container text-center">
                <span className="text-white">&copy; Copyright 2020-22 <Link className='text-white text-decoration-none' to="/">RISHIPAITHY</Link> | ALL RIGHTS RESERVED</span>
            </div>
            </footer>
            {/* copyright end here */}
        </div>
    )
}

export default Copyright
