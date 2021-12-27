import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

const Ayurveda = () => {
    return (
        <>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Ayurveda - Rishipaithy</title>
                <link rel="canonical" href="https://rishipaithy.com/ayurveda/" />
            </Helmet>
           <Header/>
           <div className="container mx-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link className="text-dark text-decoration-none" to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Ayurveda</li>
                    </ol>
                </nav>
            </div>
            <div className="p-4 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Ayurveda</h1>
                    <p className="col-md-12 fs-5">Ayurveda has remained in the historic Indian roots since the past 5000 years. It emerged during the time of Vedic ages and is still in practice due to its immense effectiveness. Ayurvedic therapies are not only meant to deal with diseases but to also enhance the quality of your life.</p>
                    <p className="col-md-12 fs-5">Prevention is better than cure. This famous line fits aptly in the Ayurvedic concept. Anyone following the Ayurvedic system is to stay far away from diseases. Your immune system gains so much from the Ayurvedic practices that it becomes capable of defeating every malady.</p>
                    <p className="col-md-12 fs-5">The ancient medication is made up of three branches – Tridoshas, Dhatus, and Prakhruti.</p>
                    <p className="col-md-12 fs-5">The Tridoshas are further segregated to the Vata, Pitta, and Kapha. While Vata controls the actions of our body, Pitta refers to all the bodily metabolisms. Kapha is concerned with the smooth operation of our body and its physical shape.</p>
                    <p className="col-md-12 fs-5">Moving on, the Dhatus refers to the tissues of the human body that ensure the proper functioning of all our organs. There are 7 Dhatus – Rakta (Blood), Rasa (Plasma), Asthi (Bones), Mamsa (Muscle), Medas (Fat), Majja (Bone marrow) and Shukra (Reproductive substances).</p>
                    <p className="col-md-12 fs-5">Any harm to the Dhatus will affect the Tridoshas which may give birth to illnesses. The Prakhruti’s are deeply connected with the 3 Tridoshas – Prakhruti Vata, Prakhruti Pitta, and Prakhruti Kapha.</p>
                    <p className="col-md-12 fs-5">Ayurveda surrounds itself with its 3 branches and tries to maintain a proper balance between them. Ayurvedic medicines can easily be made with herbs and spices available at your home.</p>
                    <p className="col-md-12 fs-5">We at Rishipaithy have introduced our line of modern Ayurvedic medicines. They are all fully natural and contain efficacious herbs and spices, like clove, garlic, turmeric, sandalwood, neem, cinnamon, and many more.</p>
                    <p className="col-md-12 fs-5">Our Ayurvedic specialist prescribes our self-made medicines to treat our patients. They can be consumed without any worries as they have no side effects and are completely chemical-free.</p>
                </div>
            </div>
           <Footer/> 
        </>
    )
}

export default Ayurveda
