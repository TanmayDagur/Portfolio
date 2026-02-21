"use client";
import { motion } from 'motion/react';
import { Globe, Terminal, Cpu } from 'lucide-react';

export function Skills() {
    return(
        <section id="skills" className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Technical Skills</h2>
                <div className="h-px bg-zinc-200 flex-1 ml-4"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-900">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-4">Frontend</h3>
                  <ul className="space-y-2 text-zinc-600 text-sm">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> React & Next.js</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> TypeScript</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> Tailwind CSS</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> HTML5 & CSS3</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> Framer Motion</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-900">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-4">Backend</h3>
                  <ul className="space-y-2 text-zinc-600 text-sm">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> Node.js</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> Express</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> PostgreSQL</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> MongoDB</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> RESTful APIs</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                  <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-900">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-4">Tools & Others</h3>
                  <ul className="space-y-2 text-zinc-600 text-sm">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> Git & GitHub</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> Docker</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> AWS & Vercel</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> CI/CD Pipelines</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div> WSL</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
    )
}