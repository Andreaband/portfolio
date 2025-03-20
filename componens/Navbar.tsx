"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-10 bg-black transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='max-w-3xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-2 p-4'>
        <div className='font-title text-4xl text-white'>AB</div>
        <div className='flex flex-wrap items-center gap-4 lg:gap-8 text-white'>
          <Link href='#about'>About</Link>
          <Link href='#skills'>Skills</Link>
          <Link href='#projects'>Projects</Link>
          <Link href='#workflow'>Workflow</Link>
          <Link href='#contacts'>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
