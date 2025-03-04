import Link from 'next/link';
import { FiArrowDown } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-blue-900 dark:bg-blue-950">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center lg:bg-fixed"
        style={{
          backgroundImage: 'url("/Aboutus.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label="Digital technology background with glowing circuits"
      >
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/60 to-blue-700/30 dark:from-blue-950/95 dark:via-blue-900/80 dark:to-blue-800/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative mx-auto min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] xl:min-h-[95vh] flex items-center justify-center">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl w-full py-24 text-center">
          {/* Animated Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight opacity-0 animate-fadeInUp mt-3">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-cyan-100 bg-clip-text text-transparent">
              Excellence Since 2020
            </span>
          </h1>

          {/* Animated Subtext */}
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto opacity-0 animate-fadeInUp delay-200">
            Pioneering web solutions that transform businesses and elevate digital experiences through innovative technology and strategic design.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fadeInUp delay-300">
            <Link 
              href="/portfolio" 
              className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95"
            >
              View Our Work
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 border-2 border-blue-300 text-blue-100 rounded-xl font-semibold hover:bg-blue-800/20 hover:border-cyan-400 transition-all"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 md:mt-24 opacity-0 animate-fadeInUp delay-500">
            <FiArrowDown className="mx-auto h-8 w-8 text-blue-200 animate-bounce" />
            <span className="sr-only">Scroll down to learn more</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;