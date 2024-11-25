// pages/about.js
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VisionMissionSection from './components/VisionMissionSection';
import BoardOfDirectorsSection from './components/BoardOfDirectorsSection';
import Navigation from "../../components/Navigation";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navigation/>
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <BoardOfDirectorsSection />
    </div>
  );
};

export default About;
