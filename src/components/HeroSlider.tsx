/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "hero1.jpg",
    title: "Англи ба Япон хэлийг хурдан сур",
    subtitle: "Богино хугацаанд үр дүнтэй сургалт, туршлагатай багш нар",
  },
  {
    img: "hero2.jpg",
    title: "Ярианд төвлөрсөн хөтөлбөр",
    subtitle: "Бага анги, долоо хоног тутмын үнэлгээтэй",
  },
  {
    img: "hero3.jpg",
    title: "Бизнес англи хэл",
    subtitle: "Илтгэл, хэлцэл, имэйлд бэлтгэл",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
                  <h1 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg text-white max-w-2xl">
                    {slide.subtitle}
                  </p>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>

      {/* Optional left/right arrows */}
      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition"
      >
        &#10094;
      </button>
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition"
      >
        &#10095;
      </button>
    </div>
  );
}
