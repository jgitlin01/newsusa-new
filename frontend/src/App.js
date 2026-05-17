import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import Mission from "./components/Mission";
import Testimonials from "./components/Testimonials";
import Pillars from "./components/Pillars";
import Services from "./components/Services";
import Methodology from "./components/Methodology";
import MediaKitBanner from "./components/MediaKitBanner";
import ComplementaryServices from "./components/ComplementaryServices";
import Portfolio from "./components/Portfolio";
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
      <LogoMarquee />
      <Mission />
      <Testimonials />
      <Pillars />
      <Services />
      <Methodology />
      <MediaKitBanner />
      <ComplementaryServices />
      <Portfolio />
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
