// src/pages/index.js
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials"

export default function HomePage() {
    return (
        <div>
           <Hero />
            <Navigation />
            
            <About />
            <Services />
            <Portfolio />
            <Testimonials/>
            <Footer />
        </div>
    );
}
