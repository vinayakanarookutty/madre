import React from 'react';
import { X, Check, Star, Package, Truck, Shield } from 'lucide-react';

const ProductDetails = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 flex items-center justify-center">
          <div 
            className="relative bg-zinc-900 max-w-6xl w-full shadow-2xl border border-yellow-500/20 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-96 md:h-auto bg-zinc-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
                
                {product.popular && (
                  <div className="absolute top-6 left-6 bg-yellow-500 text-black px-4 py-2 text-xs font-sans tracking-[0.15em] uppercase font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Popular Choice
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-12">
                <div className="mb-4">
                  <span className="text-xs text-yellow-500 tracking-[0.15em] uppercase font-sans">
                    {product.category}
                  </span>
                </div>
                
                <h2 className="text-4xl font-display font-bold mb-4 gradient-text">
                  {product.name}
                </h2>
                
                <p className="text-gray-400 text-lg mb-8 font-garamond leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Starting at</span>
                    <span className="text-3xl font-bold text-yellow-500">{product.price.split(' - ')[0]}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-sans tracking-[0.1em] uppercase mb-4 text-white">
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Benefits */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/5">
                  <div className="text-center">
                    <Package className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-400">Premium Quality</p>
                  </div>
                  <div className="text-center">
                    <Truck className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-400">Fast Shipping</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-400">Quality Guarantee</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-yellow-500 text-black px-6 py-4 text-sm tracking-[0.15em] uppercase font-semibold hover:bg-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
                    Request Quote
                  </button>
                  <button className="px-6 py-4 border border-white/20 text-sm tracking-[0.15em] uppercase text-gray-400 hover:text-white hover:border-white/40 transition-all duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #f0e68c 50%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default ProductDetails;