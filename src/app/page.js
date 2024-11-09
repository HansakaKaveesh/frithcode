// src/pages/index.js
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";

import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <div>
            
            <Hero />
            <Navigation />
            <About />
            
            <Portfolio />
            <Footer />
        </div>
    );
}
