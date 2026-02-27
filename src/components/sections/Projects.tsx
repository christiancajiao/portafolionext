"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Maximize2 } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    repo: string;
    url?: string;
    tags: string[];
    image?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Yu-Gi-Oh! Memory Game",
        category: "Web Engineering",
        description: "A card memory game built with JavaScript. The main attraction is that you can play it right here!",
        repo: "https://github.com/christiancajiao/memorygame",
        url: "https://memorygame-e4ia.onrender.com",
        tags: ["JavaScript", "HTML", "CSS", "Game Dev"],
        image: "/yugi.png"
    },
    {
        id: 2,
        title: "AI Video Attention",
        category: "AI & ML",
        description: "Deep learning computer vision project analyzing attention percentages in video.",
        repo: "https://github.com/christiancajiao/ClassPorcentualAtention",
        url: "https://atencion-frontend.onrender.com",
        tags: ["Python", "Deep Learning", "Computer Vision", "AI"],
        image: "/atention.png"
    },
    {
        id: 3,
        title: "Animation Studio Portfolio",
        category: "Web Engineering",
        description: "Portfolio site for QU4DLINE animation studio. Showcase of animation work.",
        repo: "https://github.com/christiancajiao/QU4DLINE",
        url: "https://q4dline.com/",
        tags: ["Web Dev", "Portfolio", "Animation"],
        image: "/q4line.png"
    },
    {
        id: 4,
        title: "GreenSpec Dashboard",
        category: "Web Engineering",
        description: "Dashboard for a greenhouse company (Invernaderos). Manages data and visualization.",
        repo: "https://github.com/christiancajiao/dashboard-greenspec",
        tags: ["Dashboard", "Data Viz", "Farming Tech"],
        image: "/2.png"
    },
];

const categories = ["All", "Web Engineering", "AI & ML"];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = projects.filter(
        (project) => activeCategory === "All" || project.category === activeCategory
    );

    return (
        <section id="projects" className="py-20 px-4 md:px-10 lg:px-20 relative w-full overflow-hidden">
            <div className="text-center mb-16">
                <h1 className="text-8xl font-bold text-foreground mb-6 font-bebas tracking-wide">
                    FEATURED PROJECTS
                </h1>
                <div className="flex flex-wrap justify-center gap-4 font-sans" style={{ marginBottom: "2rem" }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            style={{ padding: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", marginRight: "1rem" }}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeCategory === category
                                ? "bg-[#7042f8] border-[#7042f8] text-white shadow-[0_0_15px_#7042f8]"
                                : "border-[#7042f861] text-foreground/60 hover:text-foreground hover:border-[#7042f8] hover:shadow-[0_0_10px_#7042f840]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 m-6">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                            style={{ margin: "2em" }}
                            className="bg-card border-x border-y-0 border-[#7042f861] rounded-xl backdrop-blur-sm shadow-[0_0_15px_#7042f861] hover:shadow-[0_0_25px_#7042f880] transition-shadow p-6 md:p-[2vw]"
                        >
                            <div className="py-4 px-2 md:px-[1.5vw]">
                                <div className="font-bold mb-2" style={{ fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)", padding: "2em", justifyContent: "center", display: "flex" }}>{project.title}</div>
                            </div>
                            {project.image ? (
                                <img className="w-full object-cover h-48 md:h-[12vw]" src={project.image} alt={project.title} />
                            ) : (
                                <div className="w-full flex items-center justify-center bg-gray-200 h-48 md:h-[12vw]" >
                                    <span className="text-gray-500">No Image</span>
                                </div>
                            )}
                            <div className="py-4 px-2 md:px-[1.5vw]">
                                <p className="text-gray-700" style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)" }}>
                                    {project.description}
                                </p>
                            </div>
                            <div className="pt-4 pb-2 px-2 md:px-[1.5vw]" style={{ margin: "1em" }}>
                                {project.tags.map((tag) => (
                                    <span key={tag} style={{ fontSize: "clamp(0.7rem, 0.8vw, 0.8rem)", padding: "0.5em", border: "1px solid #7042f861" }} className="inline-block  rounded-full px-3 py-1 md:px-[0.8em] md:py-[0.3em] m-1 md:m-[0.2em] text-xs font-semibold text-gray-700">{tag}</span>
                                ))}
                            </div>
                            <div className="pt-4 flex justify-center space-between gap-4 pb-4 md:pb-[1.5vw]" style={{ margin: "1em" }}>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.repo}
                                    target="_blank"
                                    style={{ padding: "0.5em", marginRight: "0.5em", width: "10vw" }}
                                    rel="noopener noreferrer"
                                    className="bg-[#7042f861] hover:bg-[#7042f8] text-white font-bold rounded-full inline-flex items-center gap-2 transition-colors duration-300 px-4 py-2 md:px-[1.5vw] md:py-[0.5vw] m-2 md:m-[0.5vw]"
                                >
                                    <Github size={18} />
                                    <span style={{ fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>Repo</span>
                                </motion.a>
                                {project.url && (
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.url}
                                        target="_blank"
                                        style={{ padding: "0.5em", marginRight: "0.5em", width: "10vw" }}
                                        rel="noopener noreferrer"
                                        className="bg-[#7042f8] hover:bg-[#5d16ff] text-white font-bold rounded-full inline-flex items-center gap-2 transition-colors duration-300 shadow-[0_0_10px_#7042f840] px-4 py-2 md:px-[1.5vw] md:py-[0.5vw] m-2 md:m-[0.5vw]"
                                    >
                                        <ExternalLink size={18} />
                                        <span style={{ fontSize: "clamp(0.8rem, 1vw, 1rem)" }}>Live</span>
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}
