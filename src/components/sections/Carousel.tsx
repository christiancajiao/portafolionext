"use client";

import { useRef, useState, useEffect } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useTransform,
    wrap
} from "framer-motion";

const imgurls = [
    {
        name: "Necromancer rabbit",
        url: "https://i.postimg.cc/xC1BS8fD/cristian-cajiao-conejo-recuperado-enhanced.png",
    },
    {
        name: "broken hearth",
        url: "https://i.postimg.cc/nVyNsb7y/cristian-cajiao-nuevo-arbol-enhanced.png",
    },
    {
        name: "Guardian dog",
        url: "https://i.postimg.cc/8cbvdXSS/cristian-cajiao-dogo24-enhanced.png",
    },
    {
        name: "Eater",
        url: "https://i.postimg.cc/Y2Qzq8T8/cristian-cajiao-eater.jpg",
    },
    {
        name: "God of sun",
        url: "https://i.postimg.cc/cC7R94fP/cristian-cajiao-god20sun-enhanced.jpg",
    },
    {
        name: "Hollow kngth",
        url: "https://i.postimg.cc/FsZb0zrL/cristian-cajiao-hollow-kngth-no-texture.jpg",
    },
    {
        name: "Outer world",
        url: "https://i.postimg.cc/YS3TVYwz/cristian-cajiao-moeb-recuperado-enhanced.png",
    },
    {
        name: "Moon guardian",
        url: "https://i.postimg.cc/y88mjKxr/cristian-cajiao-moon-guardian.jpg",
    },
    {
        name: "Guitar alien",
        url: "https://i.postimg.cc/nVyNsb7y/cristian-cajiao-nuevo-arbol-enhanced.png",
    },
    {
        name: "Priapo",
        url: "https://i.postimg.cc/Cxb3G9Pt/cristian-cajiao-priapo-color-enhanced.png",
    },
    {
        name: "Family",
        url: "https://i.postimg.cc/Y0hcQ9Zf/unnamed.jpg",
    },
];

export default function Carousel() {
    const baseX = useMotionValue(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // We duplicate the items enough times to ensure that as we scroll, 
    // we always have content. A safe bet is 4x the content for standard screen widths.
    // One "set" is 100% / 4 = 25%.
    const items = [...imgurls, ...imgurls, ...imgurls, ...imgurls];

    // Adjust these values to control loop speed and direction
    // negative moves left
    const baseVelocity = -0.005;

    useAnimationFrame((t, delta) => {
        if (!isPaused) {
            let moveBy = baseVelocity * (delta / 16);
            baseX.set(baseX.get() + moveBy);
        }
    });

    // Calculate the wrapping range. 
    // We wrap between -25% and 0%. This assumes the total width of *one set* of items 
    // roughly equates to 25% of the total rendered width (since we have 4 sets).
    // This might need tuning if the items are very wide, but with 4 sets it's usually robust.
    const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

    return (
        <section id="illustrations" className="flex flex-col items-center justify-center py-20 px-8 bg-background text-center overflow-x-hidden">
            <h2 className="text-5xl font-bold text-foreground mb-10">
                Digital Illustrations
            </h2>

            <div
                className="relative w-full h-[300px] md:h-[500px] overflow-hidden bg-card border-x border-y-0 border-[#7042f861] cursor-grab active:cursor-grabbing"
                ref={containerRef}
            >
                <motion.div
                    className="flex gap-2 absolute left-0 top-1/2 -translate-y-1/2"
                    style={{ x }}
                    drag="x"
                    // We don't set dragConstraints because we want the "infinite" feel.
                    // Instead, we use the drag delta to modify our motion value directly.
                    onDragStart={() => setIsPaused(true)}
                    onDragEnd={() => setIsPaused(false)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onDrag={(event, info) => {
                        // We feed the drag delta (pixels) back into our BaseX (percentage-ish abstract unit)
                        // We need to normalize pixel delta to the percentage scale we are using.
                        // Our 'track' is huge (4 sets of items).
                        // Let's approximate: if track width is roughly 400vw (since 4 sets filling screen?),
                        // then window.innerWidth is ~25% of track?
                        // A reliable way is roughly converting pixels to the unit baseX expects.
                        // Since `x` output is %, let's try assuming 1 unit of baseX = 1% 
                        // (if we hadn't used velocity/delta scaling).
                        // Let's assume typical screen width.
                        const width = typeof window !== 'undefined' ? window.innerWidth : 1000;
                        // If we drag 100px on a 1000px screen, that is 10%.
                        // We add that to baseX.
                        baseX.set(baseX.get() + (info.delta.x / width) * 100);
                    }}
                    dragElastic={0}
                    dragMomentum={false}
                >
                    {items.map((img, index) => (
                        <motion.div
                            key={`${img.name}-${index}`}
                            className="flex-shrink-0 h-[250px] md:h-[450px] w-auto transition-all duration-300"
                            initial={{ filter: "grayscale(100%)", scale: 1, zIndex: 1 }}
                            whileHover={{
                                scale: 1.1,
                                zIndex: 20,
                                filter: "grayscale(0%)",
                                transition: { duration: 0.2 }
                            }}
                        >
                            <img
                                src={img.url}
                                alt={img.name}
                                className="w-auto h-full rounded-2xl pointer-events-none border-x border-y-0 border-[#7042f861] bg-card shadow-[0_0_10px_#7042f840]"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
