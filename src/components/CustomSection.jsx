import React from 'react';
import { ChevronRight, Package } from 'lucide-react';

const CustomSection = () => {
  return (
    <section id="custom" className="relative py-32 overflow-hidden bg-black">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-yellow-500 text-xs font-sans tracking-[0.3em] mb-6 block uppercase">Custom-Made Excellence</span>
            <h3 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight gradient-text">Make a Lasting Impression</h3>
            <p className="text-lg font-sans text-gray-300 mb-8 leading-relaxed">
              Well equipped with the skills and mastery of knowledge needed to create compelling corporate packaging.
            </p>
            <button className="group border-2 border-yellow-500 text-yellow-500 px-10 py-4 text-xs font-sans tracking-[0.2em] uppercase font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-500 flex items-center gap-3">
              View All Collections
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          
          <div className="relative h-[600px] glass-effect overflow-hidden">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
              <source src="https://res.cloudinary.com/dlpym1qdy/video/upload/v1766402315/7308238-hd_1080_1920_24fps_tp2hw0.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
               <Package className="w-48 h-48 text-yellow-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;