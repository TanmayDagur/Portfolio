"use client";
import { motion } from 'motion/react';

export function Contact(){
    return(
        <section id="contact" className="py-32 bg-white px-4 text-center">
          <div className="container mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-mono text-sm text-zinc-500 mb-4 tracking-wider uppercase">What&apos;s Next?</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Get In Touch</h2>
              <p className="text-zinc-600 mb-10 text-lg">
                I’m open to new opportunities and collaborations.
                Have a question or just want to say hi? Drop a message,I&apos;d love to connect.
              </p>
              <a 
                href="mailto:tanmaydagur200@gmail.com" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors shadow-sm"
              >
                Say Hello
              </a>
            </motion.div>
          </div>
        </section>
    )
}
