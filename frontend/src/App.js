import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HeroCues from "./components/HeroCues";
import LogoMarquee from "./components/LogoMarquee";
import Mission from "./components/Mission";
import Testimonials from "./components/Testimonials";
import Pillars from "./components/Pillars";
import TextMarquee from "./components/TextMarquee";
import Services from "./components/Services";
import Methodology from "./components/Methodology";
import MediaKitBanner from "./components/MediaKitBanner";
import ComplementaryServices from "./components/ComplementaryServices";
import Portfolio from "./components/Portfolio";
import BigBrands from "./components/BigBrands";
import QuoteBanner from "./components/QuoteBanner";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Founder from "./components/Founder";
import Footer from "./components/Footer";

const Landing = () => {
  return (
    <main data-testid="landing-page">
      <Nav />
      <Hero />
      <HeroCues />
      <LogoMarquee />
      <Mission />
      <Testimonials />
      <Pillars />
      <TextMarquee />
      <Services />
      <Methodology />
      <MediaKitBanner />
      <ComplementaryServices />
      <Portfolio />
      <BigBrands />
      <Founder />
      <QuoteBanner />
      <FAQ />
      <About />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App;
