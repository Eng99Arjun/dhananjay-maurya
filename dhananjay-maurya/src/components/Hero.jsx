// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer", "UI/UX Designer", "MERN Specialist", "Tech Enthusiast"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 flex flex-col items-center">
        <div className="max-w-3xl text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-4 bg-indigo-600 rounded-full blur-2xl opacity-50"></div>
            <div className="relative bg-indigo-700 text-indigo-100 px-6 py-1 rounded-full text-sm">
              Welcome to my Portfolio
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-400">Dhananjay Maurya</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-6 h-16">
            <span className="text-indigo-300">I'm a </span>
            <span className="text-yellow-300">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>
          
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            I create exceptional digital experiences that are fast, accessible, 
            visually appealing, and responsive. I transform ideas into reality through code.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
            >
              <span>Get In Touch</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            <a 
              href="#projects" 
              className="bg-transparent border-2 border-indigo-300 text-white hover:bg-indigo-800 font-medium py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="https://github.com/Eng99Arjun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-800 hover:bg-indigo-700 w-12 h-12 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/dhananjay-maurya-75b48624b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-800 hover:bg-indigo-700 w-12 h-12 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-800 hover:bg-indigo-700 w-12 h-12 rounded-full flex items-center justify-center transition duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-24 animate-bounce">
          <a href="#about" className="text-indigo-200 hover:text-white">
            <FaArrowDown size={32} />
          </a>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-indigo-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-400 rounded-full filter blur-3xl opacity-20 animate-ping-slow"></div>
      </div>
    </section>
  );
};

export default Hero;