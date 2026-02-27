"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Illustrations", href: "#illustrations" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300 bg-background/30 backdrop-blur-md border-b border-[#7042f861] max-w-[100vw] overflow-x-hidden",
                scrolled ? "py-2" : "py-4"
            )}
            style={{ backgroundColor: "rgba(255, 255, 255, 0.17)" }}
        >
            <div className="container mx-auto px-4 md:px-10 flex justify-between items-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.17)" }}>
                <Link
                    href="/"
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer"
                >
                    Dev & Art
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-foreground/80 hover:text-purple-500 transition-all duration-300 hover:drop-shadow-[0_0_5px_#7042f8] text-sm font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Socials & Mobile Menu Button */}
                <div className="flex items-center gap-4" >
                    <div className="hidden md:flex gap-4">
                        <Link href="https://github.com" target="_blank" className="text-foreground/80 hover:text-foreground">
                            <Github size={20} />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-foreground/80 hover:text-foreground">
                            <Linkedin size={20} />
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <ThemeToggle />
                    </div>

                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ backgroundColor: "rgba(106, 71, 189, 0.57)" }}
                    className="md:hidden absolute top-full left-0 w-full bg-background/30 backdrop-blur-md border-b border-[#7042f861] p-4 flex flex-col gap-4 items-center text-center"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="w-full text-foreground/80 hover:text-white hover:bg-[#7042f8] transition-all duration-300 rounded-lg py-3 block text-center font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
}
