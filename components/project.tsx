
"use client";
import { motion } from 'motion/react';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import paytm from "@/lib/images/paytm_dashboard.png";
import aiImage from "@/lib/images/ai_studio.png";
import priceTracker from "@/lib/images/price_tracker.png";
import newsWebsite from "@/lib/images/news_website.png";

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
                
                {/* 1 - AI Studio */}
                <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 relative aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100">
                    <Image 
                      src={aiImage} 
                      alt="AI Studio" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <div className="md:col-span-5 flex flex-col md:items-end text-left md:text-right z-10">
                    <p className="font-mono text-sm text-zinc-500 mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">AI Studio</h3>
                    <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 shadow-sm mb-4 md:-ml-12 relative">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        A responsive, full-stack Next.js application designed to interface with multiple AI APIs. The platform features a robust PostgreSQL database managed by Prisma to persist user sessions, chat logs, and generated image galleries. It boasts a custom-built, highly dynamic UI with Tailwind CSS, ensuring a seamless and premium user experience across all devices, complete with secure NextAuth authentication and optimized API routing.
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500 mb-6 md:justify-end">
                      <li>Next.js</li>
                      <li>React</li>
                      <li>Prisma</li>
                      <li>PostgreSQL</li>
                      <li>Tailwind CSS</li>
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
                </div>

                {/* 2 - AI-Driven News Platform */}
                <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5 flex flex-col text-left z-10 md:order-1 order-2">
                    <p className="font-mono text-sm text-zinc-500 mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">AI-Driven News Platform</h3>
                    <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 shadow-sm mb-4 md:-mr-12 relative">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        A modern, dynamic news portal that aggregates and displays top stories and trending topics. The platform consists of a frontend built with Next.js, Tailwind CSS, and Supabase, complemented by a private Python-based AI worker that automates news data fetching and processing. It features a polished editorial layout, article filtering, and live coverage sections.
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500 mb-6">
                      <li>Next.js</li>
                      <li>React</li>
                      <li>Supabase</li>
                      <li>Python</li>
                      <li>Tailwind CSS</li>
                    </ul>
                    <div className="flex items-center gap-4">
                      <a href="https://github.com/TanmayDagur/AI-News-Worker" title='Github' className="text-zinc-500 hover:text-zinc-900 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://v0-next-js-news-website-gamma.vercel.app/" title='External Link' className="text-zinc-500 hover:text-zinc-900 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="md:col-span-7 relative aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 md:order-2 order-1">
                    <Image 
                      src={newsWebsite} 
                      alt="AI-Driven News Platform" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

                {/* 3 - Paytm Wallet */}
                <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 relative aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100">
                    <Image 
                      src={paytm} 
                      alt="Paytm Wallet" 
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

                {/* 4 - Price Tracker */}
                <div className="group relative grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-5 flex flex-col text-left z-10 md:order-1 order-2">
                    <p className="font-mono text-sm text-zinc-500 mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">Crypto Arbitrage &amp; Price Tracker</h3>
                    <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200 shadow-sm mb-4 md:-mr-12 relative">
                      <p className="text-zinc-600 text-sm leading-relaxed">
                        A real-time cryptocurrency arbitrage simulator and price tracker evaluating real net-profit margins across major exchanges. Integrates live spreads, maker/taker fees, and network withdrawal costs via WebSockets and CCXT, powered by custom background workers and PostgreSQL.
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-3 font-mono text-xs text-zinc-500 mb-6">
                      <li>Next.js</li>
                      <li>TypeScript</li>
                      <li>PostgreSQL</li>
                      <li>WebSockets</li>
                      <li>Tailwind CSS</li>
                    </ul>
                    <div className="flex items-center gap-4">
                      <a href="https://github.com/TanmayDagur/Price_Tracker" title='Github' className="text-zinc-500 hover:text-zinc-900 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://price-tracker-tb8j.vercel.app" title='External Link' className="text-zinc-500 hover:text-zinc-900 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="md:col-span-7 relative aspect-[16/9] rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 md:order-2 order-1">
                    <Image 
                      src={priceTracker} 
                      alt="Crypto Arbitrage & Price Tracker" 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-zinc-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>
    )
}