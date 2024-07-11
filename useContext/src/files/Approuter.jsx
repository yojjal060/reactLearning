import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components here
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Pricing from './Pricing';
import Services from './Services';



export default function Approuter() {
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/Services" element={<Services />} />
            </Routes>
        </Router>
    );
}
