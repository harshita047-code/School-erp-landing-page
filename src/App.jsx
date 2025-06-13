import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import KeyFeaturesBenefits from './components/KeyFeaturesBenefits';
import ModuleOverview from './components/ModuleOverview';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import WhoWeAre from './components/WhoWeAre';
import RoleBasedTabs from './components/Rolebased';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <WhoWeAre/>
      <KeyFeaturesBenefits />
      <ModuleOverview/>
      <RoleBasedTabs/>
      <TestimonialsSection/>
      <FAQSection/>
      <Footer/>
    </>
  );
}

export default App;
