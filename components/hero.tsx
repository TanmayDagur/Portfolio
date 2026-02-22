"use client";
import { motion } from 'framer-motion'; 
import TypingText from './Typing';
import Image from 'next/image'; 

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4">
      <div className="container mx-auto max-w-6xl"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="font-mono text-sm font-medium text-zinc-500 mb-4 tracking-wider uppercase">
              From DataBase to Browser
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
              <TypingText text="I&apos;m Tanmay Dagur" />
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-400 mb-8">
              Code • Break • Fix • Ship
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl leading-relaxed">
              I&apos;m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building accessible, human-centered products.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors">
                Check out my work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-900 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-colors">
                Get in touch
              </a>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              
              <div className="absolute -inset-4 bg-zinc-100 rounded-full -z-10 animate-pulse" />
              
              <Image
                src="/Tanmay-photo.jpg" 
                alt="Tanmay Dagur"
                fill
                className="rounded-2xl object-cover grayscale-0 hover:grayscale transition-all duration-500 shadow-2xl border-4 border-white"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}