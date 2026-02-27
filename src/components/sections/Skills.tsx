"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend Engineering",
        skills: [
            { name: "React / Next.js", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Redux / Zustand", level: 85 },
            { name: "CSS", level: 95 },
            { name: "Micro-frontends", level: 80 },
        ],
    },
    {
        title: "Backend & AI",
        skills: [
            { name: "Node.js", level: 60 },
            { name: "Python", level: 55 },
            { name: "Machine Learning", level: 40 },
            { name: "PostgreSQL", level: 55 },
        ],
    },
    {
        title: "Creative & Art",
        skills: [
            { name: "Digital Illustration", level: 90 },
            { name: "UI/UX Design", level: 85 },
            { name: "Figma", level: 90 },
            { name: "Three.js / R3F", level: 70 },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" style={{ marginBottom: "5rem", marginTop: "5rem" }} className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-32 px-10 md:px-20 my-20 text-center">
            <h2 className="text-5xl font-bold text-foreground mb-10">
                Skills & Expertise
            </h2>

            <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-8 w-[95vw] md:w-[90vw]" >
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="w-full bg-card  p-6 rounded-xl backdrop-blur-sm "
                    >
                        <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center tracking-wide">{category.title}</h3>
                        <div className="flex flex-col gap-4">
                            {category.skills.map((skill, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="flex flex-col gap-1 text-sm font-sans text-center items-center">
                                        <span className="text-foreground/80 mb-1">{skill.name}</span>
                                        <div className="meter w-full bg-secondary/20 rounded-full h-2">
                                            <span style={{ width: `${skill.level}%`, display: 'block', height: '100%', borderRadius: '9999px' }}>
                                                <motion.span
                                                    className="progress"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "100%" }}
                                                    transition={{ duration: 3, ease: "easeInOut" }}
                                                    viewport={{ once: false }}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section >
    );
}
