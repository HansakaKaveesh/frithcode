// pages/about.js
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VisionMissionSection from './components/VisionMissionSection';
import BoardOfDirectorsSection from './components/BoardOfDirectorsSection';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <BoardOfDirectorsSection />
    </div>
  );
};

export default About;
