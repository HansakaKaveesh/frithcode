// src/pages/index.js
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials"

export default function HomePage() {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonials/>
            
        </div>
    );
}
