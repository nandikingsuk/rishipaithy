import React from 'react'
import Home from './Screens/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Screens/About';
import Ayurveda from './Screens/Ayurveda';
import Yoga from './Screens/Yoga';
import Rnd from './Screens/Rnd';
import Termsnconditions from './Screens/Termsnconditions';
import Privacypolicy from './Screens/Privacypolicy';
import Termsofuse from './Screens/Termsofuse';
import Faq from './Screens/Faq';
import Sitemap from './Screens/Sitemap';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/about" element={ <About /> } />
            <Route exact path="/ayurveda" element={ <Ayurveda /> } />
            <Route exact path="/yoga" element={ <Yoga /> } />
            <Route exact path="/r-and-d" element={ <Rnd /> } />
            <Route exact path="/terms-and-conditions" element={ <Termsnconditions /> } />
            <Route exact path="/privacy-policy" element={ <Privacypolicy /> } />
            <Route exact path="/terms-of-use" element={ <Termsofuse /> } />
            <Route exact path="/faq" element={ <Faq /> } />
            <Route exact path="/sitemap" element={ <Sitemap /> } />
        </Routes>
    </Router>
  )
}

export default App

