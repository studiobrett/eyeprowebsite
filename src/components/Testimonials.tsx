'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "I've had glasses for 11 years and this is the best eye exam I've ever had. Dr. Goerl is very caring and personable. Too often have I been treated as just another insurance claim — but not here.",
    name: "Tiffany Y.",
    location: "Haymarket",
  },
  {
    quote: "Dr. Goerl doesn't fear monger or try to cheat you to make more money. He truly cares and really took the time to remove all of my concerns about my eyes.",
    name: "Andrew K.",
    location: "Haymarket",
  },
  {
    quote: "I had the wrong Rx for a year and was experiencing headaches and fog. The moment we found the perfect prescription I actually cried in the chair. I could see so clearly and she did that for me.",
    name: "Sarah F.",
    location: "Winchester",
  },
  {
    quote: "No hard sell. Dr. Goerl took the time to explain why my eyes were changing and what my choices were. Great experience.",
    name: "Michelle B.",
    location: "Haymarket",
  },
  {
    quote: "I'll cancel my eye insurance and pay for Dr. G. He is very helpful, calls back when you have questions, and is willing to spend extra time to make sure you get the most out of your visit.",
    name: "Traci M.",
    location: "Haymarket",
  },
  {
    quote: "Dr. Goerl got me set up for PRK surgery with a lot of good information and confidence to have it done. I had the surgery done successfully and will be visiting for all of my annual checkups.",
    name: "Danny H.",
    location: "Haymarket",
  },
  {
    quote: "They got my wife in as an emergency appointment immediately. The doctor was so welcoming and knowledgeable. We have finally found our new eye doctor.",
    name: "Leanne K.",
    location: "Surfside Beach",
  },
  {
    quote: "Dr. Goerl and his team are incredible. It was my first visit and he greeted me right away. Wait time was short and the visit was fast and efficient.",
    name: "Amanda L.",
    location: "Surfside Beach",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setVisible(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-16 bg-white border-y">
      <div className="container-narrow text-center">
        <div
          className="transition-opacity duration-500"
          style={{ opacity: visible ? 1 : 0 }}
        >
          <p className="text-2xl text-slate-700 leading-relaxed mb-6 max-w-2xl mx-auto">
            &ldquo;{t.quote}&rdquo;
          </p>
          <p className="text-eyepro-blue font-semibold">
            — {t.name}, {t.location}
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setVisible(false);
                setTimeout(() => {
                  setCurrent(i);
                  setVisible(true);
                }, 500);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? 'bg-eyepro-blue' : 'bg-slate-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
