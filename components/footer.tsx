import { Github, Linkedin, Mail } from "lucide-react";

export function Footer(){
    return(
        <footer className="py-8 text-center px-4 border-t border-zinc-200 bg-zinc-50">
            <div className="container mx-auto max-w-5xl flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-6 md:hidden">
                <a href="https://github.com/TanmayDagur" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/tanmay-dagur-aa62b9374" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
                </a>
                <a href="mailto:tanmaydagur200@gmail.com" title="Email" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
                </a>
            </div>
            <p className="font-mono text-xs text-zinc-500">
                Designed & Built by Tanmay Dagur. © {new Date().getFullYear()} All rights reserved.
            </p>
            </div>
      </footer>
    )
}