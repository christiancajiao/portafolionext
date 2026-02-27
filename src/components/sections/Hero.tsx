"use client";
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col min-h-[100dvh] w-full items-center justify-center overflow-hidden bg-background font-['Bebas_Neue']">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px] opacity-50 animate-pulse" />
      <div className="absolute bottom-[-20%] right-0 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[100px] opacity-50 animate-pulse" />

      <div className="container relative z-10 px-4 md:px-10 flex flex-col items-center justify-center h-full">

        {/* 3D Name Structure */}
        <div className="container_top w-full max-w-7xl">
          <div className="first_name">
            <h1 className="child text-foreground">CHRISTIAN</h1>
            <h1 className="child text-foreground">CAMILO</h1>
          </div>

          <div className="middle-text text-foreground/60 text-xs md:text-sm uppercase">
            WEB DEVELOPER
          </div>

          <div className="second_name">
            <h1 className="child text-foreground">CAJIAO</h1>
            <h1 className="child text-foreground">CHACON</h1>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 border border-[#7042f88b] bg-background/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm font-sans"
        >
          <Sparkles className="text-[#b49bff] w-4 h-4" style={{ padding: "1rem" }} />
          <span className="text-foreground/80 text-sm" style={{ paddingRight: "1rem" }}>Frontend Developer & Digital Artist</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-foreground/60 text-lg md:text-xl max-w-2xl mb-10 text-center font-sans"
        >
          I build scalable, user-centric web applications and create immersive digital art.
          Expert in React, Next.js, and modern frontend architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-4 font-sans"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/80 transition-all flex items-center gap-2"
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-[#7042f861] text-foreground hover:bg-[#7042f81a] transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        .container_top {
          display: grid;
          grid-template-columns: 2fr 0.5fr 2fr;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 2em 0;
        }

        .middle-text {
          writing-mode: vertical-rl;
          letter-spacing: 5px;
          text-orientation: upright;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .first_name {
          perspective: 600px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .first_name .child {
          font-family: var(--font-bebas-neue);
          letter-spacing: 0;
          font-size: 15vw;
          font-weight: bold;
          line-height: 0.8;
          text-align: right;
          transform-origin: right;
          transform: rotateY(-40deg) scale(1.1, 1.25);
          transition-duration: 0.4s;
        }

        .second_name {
          perspective: 600px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .second_name .child {
          font-family: var(--font-bebas-neue);
          letter-spacing: 0;
          font-size: 15vw;
          font-weight: bold;
          line-height: 0.8;
          text-align: left;
          transform-origin: left;
          transform: rotateY(40deg) scale(1.1, 1.25);
          transition-duration: 0.4s;
        }

        @media (min-width: 768px) {
          .first_name .child, .second_name .child {
            font-size: 8rem;
            letter-spacing: -2px;
          }
          .first_name .child {
            transform: rotateY(-40deg) scale(1);
          }
          .second_name .child {
            transform: rotateY(40deg) scale(1);
          }
        }

        .first_name:hover .child {
          transform: rotateY(-20deg) scale(1.1, 1.25);
        }

        .second_name:hover .child {
          transform: rotateY(20deg) scale(1.1, 1.25);
        }

        @media (min-width: 768px) {
             .first_name:hover .child {
                transform: rotateY(-20deg) scale(1);
             }
             .second_name:hover .child {
                transform: rotateY(20deg) scale(1);
             }
        }
      `}</style>
    </section>
  );
}
