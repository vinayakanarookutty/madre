import React from "react";
import { TESTIMONIALS } from "../constants";
import { useRotatingIndex } from "../hooks/useRotatingIndex";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const activeIndex = useRotatingIndex(TESTIMONIALS.length, 6000);

  return (
    <section className="relative py-32 bg-zinc-900/70 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-5xl font-display font-bold gradient-text mb-20">
          Trusted by Brands
        </h3>

        <div className="relative glass-effect p-16 min-h-[220px] flex items-center justify-center">
          <Quote className="absolute top-8 left-8 w-10 h-10 text-yellow-500/40" />

          <p
            key={activeIndex}
            className="font-garamond text-xl md:text-2xl italic text-gray-200 transition-opacity duration-700"
          >
            “{TESTIMONIALS[activeIndex]}”
          </p>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === activeIndex
                  ? "bg-yellow-500 scale-125"
                  : "bg-gray-500/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
