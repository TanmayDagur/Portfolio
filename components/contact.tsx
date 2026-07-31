"use client";
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

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
              <p className="text-zinc-600 mb-10 text-lg leading-relaxed">
                I&apos;m open to new opportunities and collaborations.
                Have a question or just want to say hi? Feel free to reach out via email or phone—I&apos;d love to connect.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="mailto:tanmaydagur200@gmail.com" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-white bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors shadow-sm gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>tanmaydagur200@gmail.com</span>
                </a>
                <a 
                  href="tel:+919310157697" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-zinc-900 bg-zinc-100 border border-zinc-200 rounded-xl hover:bg-zinc-200 transition-colors shadow-sm gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9310157697</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
    )
}
