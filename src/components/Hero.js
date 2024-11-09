// src/components/Hero.js
import { Button } from "../components/ui/button";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
                 style={{ backgroundImage: 'url("/Herobk.jpg")' }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-950 opacity-65"></div>
            
            {/* Content */}
            <div className="relative max-w-lg text-white z-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl font-bold animate-fade-in-up">Transform Your Digital Presence</h1>
                <p className="mt-4 text-lg sm:text-xl animate-fade-in-up delay-200">
                    FrithCode offers innovative web development solutions tailored to your business needs.
                </p>
                <div className="flex gap-4 mt-6 justify-center animate-fade-in-up delay-400">
                    <Button className="text-black" variant="outline">Learn More</Button>
                    <Button variant="destructive">Request a quotation</Button>
                </div>
            </div>
        </section>
    );
}
