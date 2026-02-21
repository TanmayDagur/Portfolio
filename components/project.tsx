"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import paytm from "@/lib/images/paytm_dashboard.png";
import aiImage from "@/lib/images/ai_image_generation.png";
import medium from "@/lib/images/medium.png";

export function Project() {
    return(
        <section id="projects" className="py-20 bg-white px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Featured Projects</h2>
                <div className="h-px bg-zinc-200 flex-1 ml-4"></div>
              </div>

              <div className="grid gap-12 md:gap-24">
                
                <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 relative aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100">
                    <Image 
                      src={paytm} 
                      alt="Project 1" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="md:col-span-5 flex flex-col md:items-end text-left md:text-right z-10">
                    <p className="font-mono text-sm text-zinc-500 mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">Paytm Wallet</h3>
                    <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 shadow-sm mb-4 md:-ml-12 relative">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        A secure wallet application inspired by Paytm, enabling peer-to-peer money transfers with real-time balance updates. Implemented transactional integrity using Prisma transactions, JWT-based authentication, and role-based access control. Designed scalable REST APIs with a focus on consistency, security, and concurrency handling.
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500 mb-6 md:justify-end">
                      <li>Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>PostgreSQL</li>
                    </ul>
                    <div className="flex items-center gap-4">
                      <a href="https://github.com/TanmayDagur/Paytm-wallet" title='Github' className="text-zinc-500 hover:text-zinc-900 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://paytm-nine-cyan.vercel.app" title='External Link' className="text-zinc-500 hover:text-zinc-900 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                
                <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5 flex flex-col text-left z-10 md:order-1 order-2">
                    <p className="font-mono text-sm text-zinc-500 mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">AI Image Generator</h3>
                    <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 shadow-sm mb-4 md:-mr-12 relative">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        An AI-powered web application that generates images from text prompts using OpenAI APIs. Built with a clean, responsive UI and optimized request handling. Includes user authentication, prompt history, and efficient API usage to ensure fast and reliable image generation.
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500 mb-6">
                      <li>Next.js</li>
                      <li>Node.js</li>
                      <li>OpenAI API</li>
                      <li>Tailwind CSS</li>
                      <li>TypeScript</li>
                    </ul>
                    <div className="flex items-center gap-4">
                      <a href="https://github.com/TanmayDagur/Image-Genration" title='Github' className="text-zinc-500 hover:text-zinc-900 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://image-genration-taupe.vercel.app" title='External Link' className="text-zinc-500 hover:text-zinc-900 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="md:col-span-7 relative aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 md:order-2 order-1">
                    <Image 
                      src={aiImage} 
                      alt="Project 2" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

                
                <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 relative aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100">
                    <Image 
                      src={medium} 
                      alt="Project 3" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="md:col-span-5 flex flex-col md:items-end text-left md:text-right z-10">
                    <p className="font-mono text-sm text-zinc-500 mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">Blogging Platform</h3>
                    <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 shadow-sm mb-4 md:-ml-12 relative">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        A full-stack blogging platform inspired by Medium, supporting user authentication, article creation, editing, and publishing. Implemented a scalable backend using Cloudflare Workers and ensured fast content delivery with a modern, responsive frontend.
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500 mb-6 md:justify-end">
                      <li>React (Vite)</li>
                      <li>Express</li>
                      <li>TypeScript</li>
                      <li>Cloudflare Workers</li>
                    </ul>
                    <div className="flex items-center gap-4">
                      <a href="https://github.com/TanmayDagur/Medium_clone" title='Github' className="text-zinc-500 hover:text-zinc-900 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
    )
}