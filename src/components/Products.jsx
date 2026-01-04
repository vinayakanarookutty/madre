import React from 'react';
import { PRODUCTS } from '../constants';

const Products = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <span className="text-yellow-500 text-xs font-sans tracking-[0.3em] mb-6 block uppercase">Our Expertise</span>
        <h3 className="text-6xl md:text-7xl font-display font-bold mb-6 tracking-tight gradient-text">Discover Brilliance</h3>
        <p className="text-2xl font-garamond italic text-gray-400 mb-20">Dive into Our Dazzling Showcase</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative glass-effect h-96 rounded-none mb-6 flex flex-col items-center justify-center transform group-hover:scale-105 transition-all duration-700 overflow-hidden border-t-2 border-b-2 border-yellow-500/30">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <product.icon className="w-20 h-20 text-yellow-500 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="w-16 h-0.5 bg-yellow-500 mb-4 relative z-10"></div>
                <p className="text-xs font-sans tracking-[0.2em] text-gray-400 uppercase relative z-10">{product.desc}</p>
              </div>
              <h4 className="text-2xl font-display font-semibold tracking-wide group-hover:text-yellow-500 transition-colors duration-300">{product.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;