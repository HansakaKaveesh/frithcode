// src/components/Hero.js
import { Button } from "../components/ui/button";
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaRegLightbulb } from 'react-icons/fa';

export default function Hero() {
    return (
        <section
            className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
            style={{ 
                backgroundImage: 'url("/Herobk.jpg")',
                backgroundAttachment: "fixed",
                backgroundPosition: 'center 30%'
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/70 to-transparent dark:from-black/80 dark:via-gray-900/60"></div>
            
            {/* Social Media Vertical Bar */}
            <div className="hidden lg:flex fixed left-8 xl:left-12 inset-y-0 z-20 items-center">
    <div className="flex flex-col items-center gap-6 group">
        {/* Animated gradient line with pulse effect */}
        <div className="h-32 w-px bg-gradient-to-b from-transparent via-pink-500/60 to-transparent relative overflow-hidden transition-all duration-500 group-hover:h-40">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-20 animate-shine" />
        </div>

        {/* Social icons with enhanced hover effects */}
        <div className="flex flex-col gap-6">
            {[
                { icon: <FiGithub className="w-6 h-6" />, href: "https://github.com" },
                { icon: <FiLinkedin className="w-6 h-6" />, href: "https://www.linkedin.com/company/frithcode-technologies/" },
                { icon: <FiFacebook className="w-6 h-6" />, href: "https://www.facebook.com/share/1EHBLwGgM3/?mibextid=wwXIfr" },
                { icon: <FiInstagram className="w-6 h-6" />, href: "https://www.instagram.com/frithcode_technologies?igsh=MWFjMDVxc3Jpc2N1MQ==" }
            ].map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white relative 
                             transition-all duration-300 hover:-translate-y-1
                             group-hover:opacity-80 hover:!opacity-100
                             hover:drop-shadow-glow"
                    aria-label={link.icon.type.name.replace('Fi', '')}
                >
                    <div className="absolute -inset-2 rounded-full opacity-0 hover:opacity-20 
                                  bg-gradient-to-r from-pink-500 to-purple-500 
                                  transition-opacity duration-300" />
                    {link.icon}
                </a>
            ))}
        </div>

        {/* Bottom gradient line with matching animation */}
        <div className="h-32 w-px bg-gradient-to-t from-transparent via-pink-500/60 to-transparent relative overflow-hidden transition-all duration-500 group-hover:h-40">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-20 animate-shine" />
        </div>
    </div>
</div>

            {/* Content */}
            <div className="relative max-w-2xl text-white dark:text-gray-300 z-10 px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                            Elevate Your
                        </span>
                        <br />
                        Digital Experience
                    </h1>
                    
                    <p className="text-xl sm:text-2xl lg:text-3xl font-light mt-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        Crafting bespoke web solutions that drive growth and captivate audiences
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center animate-fade-in-up delay-400">
                        <Link href="/about-us">
                            <Button 
                                className="group px-8 py-6 text-lg bg-transparent border-2 border-white/20 hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-300"
                                variant="outline"
                            >
                                <span className="flex items-center gap-2">
                                    Explore Services
                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </Link>
                        
                        <Link href="/quotation">
                            <Button 
                                className="px-8 py-6 text-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                                variant="destructive"
                            >
                                Get Custom Quote
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Scrolling indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow mt-16">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start p-1">
                        <div className="w-2 h-2 bg-white/60 rounded-full animate-scroll-indicator"></div>
                    </div>
                </div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10 mix-blend-overlay pointer-events-none"></div>
        </section>
    );
}