// src/components/Hero.js
import { Button } from "../components/ui/button";
import Link from 'next/link';

export default function Hero() {
    return (
        <section
            className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
            style={{ backgroundImage: 'url("/Herobk.jpg")' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-950 opacity-70 dark:bg-black dark:opacity-60"></div>
            
            {/* Content */}
            <div className="relative max-w-lg text-white dark:text-gray-300 z-10 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl font-bold animate-fade-in-up">
                    Transform Your Digital Presence
                </h1>
                <p className="mt-4 text-lg sm:text-xl animate-fade-in-up delay-200">
                    FrithCode offers innovative web development solutions tailored to your business needs.
                </p>
                <div className="flex gap-4 mt-6 justify-center animate-fade-in-up delay-400">
                <Link href="about-us"><Button className="text-black dark:text-white" variant="outline">
                        Learn More
                    </Button></Link>
                    <Link href="/quotation"><Button variant="destructive">Request a quotation</Button></Link>
                </div>
            </div>
        </section>
    );
}
