import { useState, useEffect } from "react";
import ShivamYadav from "../assets/ShivamYadav.pdf";

export default function Hero() {
  const phrases = [
    "Frontend Developer",
    "React.js Enthusiast",
    "Redux Expert",
    "Building Responsive Web Apps"
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingDelay = 100;
    const pauseDelay = 1200;

    if (charIndex < phrases[phraseIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + phrases[phraseIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingDelay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, pauseDelay);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, phraseIndex, phrases]);

  return (
    <section id="hero" className="relative h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center px-6 md:px-10">

      {/* Hero Text */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-center">
        Hi, I'm <span className="text-blue-400">Shivam Yadav</span>
      </h1>

      {/* Typing Effect */}
      <p className="text-lg sm:text-xl md:text-2xl mb-8 text-center text-gray-300 max-w-full sm:max-w-2xl leading-relaxed">
        <span className="text-blue-400 font-mono">{displayedText}<span className="animate-pulse">|</span></span>
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <a
          href={ShivamYadav}
          download
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-center transition transform hover:scale-105"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-semibold text-center transition transform hover:scale-105"
        >
          Hire Me
        </a>
      </div>

      <style>
        {`
          .animate-pulse {
            animation: pulse 1s infinite;
          }
          @keyframes pulse {
            0%,100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
