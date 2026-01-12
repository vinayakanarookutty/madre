import React, { useState } from 'react';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('collections');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
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
          <source src="https://res.cloudinary.com/dlpym1qdy/video/upload/v1766402327/8087659-uhd_4096_2160_24fps_dzgqtx.mp4" type="video/mp4" />
        </video>
        {!videoLoaded && <div className="absolute inset-0 bg-zinc-900 animate-pulse" />}
        <div className="absolute inset-0 video-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h2 className="text-7xl md:text-9xl font-display font-bold mb-8 tracking-tight gradient-text leading-none animate-fadeInUp">
          Discover<br/>Elegance
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8 animate-fadeIn" 
             style={{ animationDelay: '200ms' }} />
        <p className="text-xl md:text-3xl mb-12 font-garamond italic text-gray-300 animate-fadeInUp" 
           style={{ animationDelay: '400ms' }}>
          Premium Jewelry Boxes & Packaging For Jewelers & Gift-Givers
        </p>
        <button 
          onClick={scrollToCollections}
          className="group relative bg-yellow-500 text-black px-12 py-5 text-sm font-sans tracking-[0.2em] uppercase font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 animate-fadeInUp"
          style={{ animationDelay: '600ms' }}
        >
          <span className="relative z-10">Explore Collections</span>
          <div className="shimmer" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-[0.2em] uppercase text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-500 to-transparent"></div>
      </div>

      <style jsx>{`
        .video-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }

        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #f0e68c 50%, #ffd700 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        button:hover .shimmer {
          left: 100%;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;