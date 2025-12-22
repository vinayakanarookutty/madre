import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Star, Package, Gem, ShoppingBag, Heart, Award, Sparkles, Play } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { name: 'Jewellery Box', icon: Package, desc: 'Exquisite craftsmanship' },
    { name: 'Jewellery Display', icon: Gem, desc: 'Showcase elegance' },
    { name: 'Paper Bag', icon: ShoppingBag, desc: 'Luxury presentation' },
    { name: 'Pouches', icon: Heart, desc: 'Refined details' }
  ];

  const collections = [
    { id: 'LFR118', title: 'Royal Collection', price: 'Premium' },
    { id: 'ZDA15', title: 'Heritage Series', price: 'Exclusive' },
    { id: 'ELG22', title: 'Diamond Line', price: 'Luxury' },
    { id: 'PRL09', title: 'Pearl Edition', price: 'Elite' }
  ];

  const testimonials = [
    "We are a manufacturer of high-quality silver jewellery embellished with Swarovski® crystals and as such need packaging that meets our standards when presenting our products to customer",
    "Happy with the service and price, Correct time Delivery.",
    "We are very happy with how smoothly the process went with ZD DAMASO. They are very helpful, the pricing is competitive, and the design team has been great.",
    "Downright honest and refreshing to work with! Great Products, competitive pricing, good service, and responsiveness."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@200;300;400;500;600&family=Playfair+Display:wght@400;500;600;700;800&display=swap');
        
        .font-display { font-family: 'Playfair Display', serif; }
        .font-garamond { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
        
        .gradient-text {
          background: linear-gradient(135deg, #d4af37 0%, #f4e5c2 50%, #d4af37 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .luxury-border {
          border-image: linear-gradient(135deg, #d4af37, #f4e5c2, #d4af37) 1;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }
        
        .video-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.3), rgba(0,0,0,0.8));
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-effect shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-16">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <h1 className="text-3xl font-display font-bold tracking-wider gradient-text">
                  MADRE · PACKAGES
                </h1>
              </div>
              <div className="hidden lg:flex space-x-10">
                <a href="#home" className="text-xs font-sans tracking-[0.2em] hover:text-yellow-500 transition-colors uppercase">Home</a>
                <a href="#collections" className="text-xs font-sans tracking-[0.2em] hover:text-yellow-500 transition-colors uppercase">Collections</a>
                <a href="#custom" className="text-xs font-sans tracking-[0.2em] hover:text-yellow-500 transition-colors uppercase">Custom</a>
                <a href="#about" className="text-xs font-sans tracking-[0.2em] hover:text-yellow-500 transition-colors uppercase">About</a>
                <a href="#contact" className="text-xs font-sans tracking-[0.2em] hover:text-yellow-500 transition-colors uppercase">Contact</a>
              </div>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 glass-effect lg:hidden pt-24 px-6">
          <div className="flex flex-col space-y-8 text-center">
            <a href="#home" className="text-lg font-sans tracking-[0.2em] uppercase" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#collections" className="text-lg font-sans tracking-[0.2em] uppercase" onClick={() => setIsMenuOpen(false)}>Collections</a>
            <a href="#custom" className="text-lg font-sans tracking-[0.2em] uppercase" onClick={() => setIsMenuOpen(false)}>Custom</a>
            <a href="#about" className="text-lg font-sans tracking-[0.2em] uppercase" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#contact" className="text-lg font-sans tracking-[0.2em] uppercase" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section with Video Background */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src="../src/assets/8087659-uhd_4096_2160_24fps.mp4" type="video/mp4" />
           
          </video>
          {/* Fallback gradient if video doesn't load */}
          {!videoLoaded && (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-zinc-900 to-black">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-900/20 via-transparent to-yellow-600/20 animate-pulse"></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 video-overlay"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-8 inline-block animate-pulse">
            {/* <Award className="w-16 h-16 text-yellow-500 mx-auto" /> */}
          </div>
          <h2 className="text-7xl md:text-9xl font-display font-bold mb-8 tracking-tight leading-none gradient-text">
            Discover<br/>Elegance
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8"></div>
          <p className="text-xl md:text-3xl mb-12 font-garamond italic text-gray-300 leading-relaxed">
            Curated Luxury Packaging<br/>For Distinguished Jewellery Brands
          </p>
          <button className="group relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black px-12 py-5 text-sm font-sans tracking-[0.2em] uppercase font-semibold hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-500 overflow-hidden">
            <span className="relative z-10">Explore Collections</span>
            <div className="absolute inset-0 shimmer"></div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Discover Brilliance Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="text-yellow-500 text-xs font-sans tracking-[0.3em] mb-6 block uppercase">Our Expertise</span>
          <h3 className="text-6xl md:text-7xl font-display font-bold mb-6 tracking-tight gradient-text">Discover Brilliance</h3>
          <p className="text-2xl font-garamond italic text-gray-400 mb-20">Dive into Our Dazzling Showcase</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
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

      {/* Collections Grid */}
      <section id="collections" className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-yellow-500 text-xs font-sans tracking-[0.3em] mb-6 block uppercase">Premium Collections</span>
            <h3 className="text-6xl md:text-7xl font-display font-bold gradient-text">Timeless Beauty</h3>
            <p className="text-2xl font-garamond italic text-gray-400 mt-6">Explore Our Exquisite Collections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((item, index) => (
              <div key={index} className="group relative h-96 glass-effect overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-amber-900/20 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <span className="text-xs font-sans tracking-[0.3em] text-yellow-500 mb-4 uppercase">{item.price}</span>
                  <h4 className="text-4xl font-display font-bold mb-4 gradient-text">{item.title}</h4>
                  <div className="w-24 h-0.5 bg-yellow-500 mb-4"></div>
                  <p className="text-sm font-sans tracking-[0.2em] text-gray-400 mb-6 uppercase">{item.id}</p>
                  <button className="text-xs font-sans tracking-[0.2em] text-yellow-500 border border-yellow-500 px-6 py-3 uppercase hover:bg-yellow-500 hover:text-black transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packaging Section with Video */}
      <section id="custom" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-yellow-900/30 to-transparent"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-yellow-500 text-xs font-sans tracking-[0.3em] mb-6 block uppercase">Custom-Made Excellence</span>
              <h3 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight gradient-text">Make a Lasting Impression</h3>
              <div className="w-24 h-0.5 bg-yellow-500 mb-8"></div>
              <p className="text-lg font-sans text-gray-300 mb-8 leading-relaxed">
                Well equipped with the skills and mastery of knowledge needed to create compelling corporate packaging that meets the design ideals fitted for luxury brands.
              </p>
              <p className="text-lg font-sans text-gray-300 mb-10 leading-relaxed">
                We provide you with the choice to simply opt for a difference by letting us churn out creative packaging best representing your establishment's name and identity.
              </p>
              <button className="group relative bg-transparent border-2 border-yellow-500 text-yellow-500 px-10 py-4 text-xs font-sans tracking-[0.2em] uppercase font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-500 flex items-center gap-3">
                View All Collections
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
            
            <div className="relative h-[600px] glass-effect overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-amber-900/20 to-yellow-800/30 flex items-center justify-center">
                <Package className="w-48 h-48 text-yellow-500/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-2 border-yellow-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                   <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src="../src/assets/7308238-hd_1080_1920_24fps.mp4" type="video/mp4" />
           
          </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-yellow-500 text-xs font-sans tracking-[0.3em] mb-6 block uppercase">Client Testimonials</span>
          <h3 className="text-6xl font-display font-bold mb-6 gradient-text">Radiant Stories</h3>
          <p className="text-2xl font-garamond italic text-gray-400 mb-20">What Our Clients Say</p>
          
          <div className="relative glass-effect p-16 rounded-none border-t-2 border-b-2 border-yellow-500/30">
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500 mx-1" />
              ))}
            </div>
            <p className="text-xl md:text-2xl font-garamond italic text-gray-300 leading-relaxed mb-12 min-h-[120px]">
              "{testimonials[activeTestimonial]}"
            </p>
            <div className="flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`transition-all duration-500 ${
                    index === activeTestimonial 
                      ? 'w-12 h-1 bg-yellow-500' 
                      : 'w-8 h-1 bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative bg-black border-t border-yellow-500/20 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <h4 className="text-2xl font-display font-bold gradient-text">
                  MADRE PACKAGES
                </h4>
              </div>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">
                Luxury jewellery packaging manufacturing excellence since inception
              </p>
            </div>
            <div>
              <h5 className="text-sm font-sans tracking-[0.2em] mb-6 text-yellow-500 uppercase">Quick Links</h5>
              <ul className="space-y-3 font-sans text-sm">
                <li><a href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">See All Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Material Library</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-sans tracking-[0.2em] mb-6 text-yellow-500 uppercase">Quick Actions</h5>
              <ul className="space-y-3 font-sans text-sm">
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Track Order</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">How to Make Order</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">Customer Support</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-sans tracking-[0.2em] mb-6 text-yellow-500 uppercase">Contact</h5>
              <ul className="space-y-3 font-sans text-sm">
                <li className="text-gray-400">marketing@zahirdamaso.com</li>
                <li className="text-gray-400">+971 42 564 306</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-yellow-500/20 pt-8 text-center">
            <p className="text-gray-500 font-sans text-xs tracking-[0.2em] uppercase">© 2024 Madre Packages And Design. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;