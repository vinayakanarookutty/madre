import React, { useState } from 'react';
import { PRODUCT_COLLECTIONS, CATEGORIES } from '../constants/Productdata';
import { Star, Package, ArrowRight } from 'lucide-react';
import ProductDetails from './Productdetails';

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Collections');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductDetails = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const filteredProducts = selectedCategory === 'All Collections'
    ? PRODUCT_COLLECTIONS
    : PRODUCT_COLLECTIONS.filter(product => product.category === selectedCategory);

  return (
    <section id="collections" className="relative py-32 px-6 bg-zinc-950">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-yellow-500"></div>
            <Package className="w-5 h-5 text-yellow-500" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-yellow-500"></div>
          </div>
          <h2 className="text-6xl md:text-7xl font-display font-bold mb-6 gradient-text">
            Our Jewelry Boxes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-garamond italic">
            Explore luxury packaging boxes perfect for storing, gifting, and displaying precious jewelry
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 text-sm tracking-[0.15em] uppercase font-sans transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-yellow-500 text-black font-semibold shadow-lg shadow-yellow-500/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-20 bg-yellow-500 text-black px-3 py-1 text-xs font-sans tracking-[0.15em] uppercase font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Popular
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-zinc-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-500 flex items-center justify-center ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div className="text-center px-6">
                    <p className="text-sm text-gray-300 mb-4">{product.description}</p>
                    <button 
                      onClick={() => openProductDetails(product)}
                      className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors text-sm tracking-[0.15em] uppercase font-semibold"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 cursor-pointer" onClick={() => openProductDetails(product)}>
                <div className="mb-2">
                  <span className="text-xs text-yellow-500 tracking-[0.15em] uppercase font-sans">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-lg font-semibold text-yellow-500">
                    {product.price}
                  </span>
                  <button className="text-xs tracking-[0.15em] uppercase text-gray-400 hover:text-yellow-500 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-yellow-500 to-yellow-300 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-zinc-900/80 backdrop-blur-sm border border-yellow-500/20 p-12 max-w-3xl">
            <h3 className="text-3xl font-display font-bold mb-4">
              Need Custom Jewelry Boxes?
            </h3>
            <p className="text-gray-400 mb-6 font-garamond">
              We create bespoke jewelry packaging tailored to your needs - perfect for jewelers, boutiques, or special gifts
            </p>
            <button className="bg-yellow-500 text-black px-10 py-4 text-sm tracking-[0.2em] uppercase font-semibold hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
              Request Custom Jewelry Box
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      <ProductDetails 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductDetails}
      />

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #f0e68c 50%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Collections;