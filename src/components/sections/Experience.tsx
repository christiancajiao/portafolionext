"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Freelance – Frontend Developer (Remote)",
        company: "Freelance",
        period: "Jul 2025 – Present",
        description: [
            "Built high-performance web applications using Next.js and TypeScript.",
            "Integrated Stripe payments and Firebase real-time services.",
            "Improved SEO and Core Web Vitals, reducing load times significantly.",
            "Designed backend structures (Hash Maps, Binary Trees) to optimize permission logic.",
        ],
        skills: ["Next.js", "TypeScript", "Stripe", "Firebase", "Algorithms"],
    },
    {
        role: "Frontend Developer (Medellín)",
        company: "Pinturas y Yesos S.A.S",
        period: "Jan 2025 – Jul 2025",
        description: [
            "Led development of responsive business modules in React.js.",
            "Collaborated with UI/UX designers to build pixel-perfect interfaces.",
            "Optimized rendering performance and reduced technical debt.",
            "Integrated REST APIs and complex state management workflows.",
        ],
        skills: ["React.js", "UI/UX", "REST APIs", "Optimization"],
    },
    {
        role: "Frontend Developer (Bogotá)",
        company: "AbaTech",
        period: "Feb 2023 – Nov 2024",
        description: [
            "Designed scalable micro-frontends using Single-SPA.",
            "Developed reusable npm packages for Vite + React apps.",
            "Migrated legacy class components to modern Hooks, improving readability by 40%.",
            "Built a UI library with Storybook, accelerating team development cycles.",
        ],
        skills: ["Single-SPA", "Micro-frontends", "Vite", "React", "Storybook"],
    },
    {
        role: "Frontend Developer (Bogotá)",
        company: "Retalapp",
        period: "May 2021 – Mar 2022",
        description: [
            "Implemented Redux and Duo Login for enhanced security.",
            "Built a custom CSS library using Webpack and Remix.",
            "Managed GitHub repositories and code review workflows.",
        ],
        skills: ["Redux", "Webpack", "Remix", "Security"],
    },
    {
        role: "Full-stack Developer (Cali)",
        company: "Salonomi",
        period: "Feb 2020 – Mar 2021",
        description: [
            "Maintained Ruby on Rails platform with MySQL integration.",
            "Built dynamic dashboards with Chartkick.",
            "Developed API routes to support new features.",
        ],
        skills: ["Ruby on Rails", "MySQL", "Chartkick", "API"],
    },
    {
        role: "IT Professor (Cali)",
        company: "Colegio Juvenil del Sur",
        period: "2017 – 2018",
        description: [
            "Taught informatics to students from elementary school to high school.",
            "Integrated video and photo editing with basic HTML, CSS, JavaScript, and Microsoft Office.",
        ],
        skills: ["Teaching", "HTML/CSS", "JavaScript", "Mentoring"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative flex flex-col items-center justify-center py-32 px-6 md:px-20 my-20 overflow-hidden">
            <h1 className="text-8xl font-bold text-foreground mb-16 text-center">
                My Experience
            </h1>

            <div className="w-full max-w-5xl flex flex-col gap-16" style={{ justifyContent: "center", alignItems: "center" }}>
                {/* Professional Experience */}
                <div className="flex flex-col gap-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12 border-l-2 border-[#7042f8] text-left group"
                            style={{ padding: "2rem" }}
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#7042f8] shadow-[0_0_10px_#7042f8] group-hover:scale-125 transition-transform duration-300" />

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-wide mr-4">
                                    {exp.role} <span className="text-purple-400 font-normal">- {exp.company}</span>
                                </h3>
                                <span className="text-foreground/60 text-sm font-mono whitespace-nowrap mt-1 md:mt-0">{exp.period}</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 mb-4 space-y-1 text-foreground/80 font-sans leading-relaxed text-lg">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs rounded-full border border-[#7042f861] text-foreground/80 bg-[#7042f81a] font-sans"
                                        style={{ padding: "0.5rem" }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
