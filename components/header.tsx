import { Github, Linkedin } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-zinc-50/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
            <div className="font-mono font-bold text-xl tracking-tighter">
                portfolio
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600">
                <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
                <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
                <a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a>
                <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
                <a href="https://github.com/TanmayDagur" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/tanmay-dagur-aa62b9374" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
                </a>
            </div>
            </div>
      </header>
    )
}
