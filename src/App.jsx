import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Collections from './components/Collections';
import CustomSection from './components/CustomSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-yellow-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Collections />
        <CustomSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;