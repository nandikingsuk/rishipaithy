import React from 'react'
import Copyright from './Copyright'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            {/* footer start here */}
            <div className="row bg-light m-2">
                <div className="col-sm-3">
                    <div className="card border-0 bg-light">
                    <div className="card-body">
                        <h5 className="card-title mb-3">IMPORTANT LINKS</h5>
                        <p><Link className="card-text text-decoration-none text-dark" to="/yoga">Yoga</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/ayurveda">Ayurveda</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/treatments">Treatments</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/r-and-d">R&amp;D</Link></p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card border-0 bg-light">
                    <div className="card-body">
                        <h5 className="card-title mb-3">USEFUL LINKS</h5>
                        <p><Link className="card-text text-decoration-none text-dark" to="/terms-and-conditions">Terms &amp; Conditions</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/privacy-policy">Privacy Policy</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/terms-of-use">Terms of use</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/faq">FAQs</Link></p>
                        <p><Link className="card-text text-decoration-none text-dark" to="/sitemap">Sitemap</Link></p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card border-0 bg-light">
                    <div className="card-body">
                        <h5 className="card-title mb-3">RELATED WEBSITES</h5>
                        <p><a className="card-text text-decoration-none text-dark" href="https://kalpamritgroup.com">Kalpamrit Ayurved Pvt Ltd</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://kalpamritmarketing.com/">Kalpamrit Marketing Pvt Ltd</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://kalpamritfoundation/">Kalpamrit Foundation</a></p>
                    </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card border-0 bg-light">
                    <div className="card-body">
                        <h5 className="card-title mb-3">GET IN TOUCH WITH US</h5>
                        <p><a className="card-text text-decoration-none text-dark" href="tel:+919520121000">C: +91 95201 21000</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://wa.me/+919520121000">Contact through Whatsapp</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="mailto:feedback@rishipatihy.com">M: feedback@rishipaithy.com</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://www.facebook.com/kalpamritmarketing/">Facebook</a></p>
                        <p><a className="card-text text-decoration-none text-dark" href="https://www.youtube.com/channel/UCrREm0y-GD8Xtl96ibQvz6g/">Youtube</a></p>
                    </div>
                    </div>
                </div>
            </div>
            {/* footer end here */}
            <Copyright/>
        </div>
    )
}

export default Footer
