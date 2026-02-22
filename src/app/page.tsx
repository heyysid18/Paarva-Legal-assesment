"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Gavel, CheckSquare, Receipt } from "lucide-react";
import { FloatingCard } from "@/components/FloatingCard";
import { SiteHeader } from "@/components/layout/SiteHeader";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-[100dvh] bg-[#F5F7FA] dark:bg-[#0B1120] selection:bg-blue-500/30 selection:text-white overflow-hidden">
      {/* Background Blobs - fixed opacity, blurs, and z-index */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[150px] rounded-full bg-[#E8EDF5] dark:bg-[#1E293B] blur-3xl opacity-40 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[40%] right-[-5%] w-[40%] h-[150px] rounded-full bg-[#E8EDF5] dark:bg-[#1E293B] blur-3xl opacity-40 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[50%] left-[-10%] w-[30%] h-[150px] rounded-full bg-[#E8EDF5] dark:bg-[#1E293B] blur-3xl opacity-40 mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[150px] rounded-full bg-[#E8EDF5] dark:bg-[#1E293B] blur-3xl opacity-40 mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <SiteHeader />

      {/* Proper container with max-width and mx-auto */}
      <section aria-label="Hero Introduction" className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 flex flex-col lg:flex-row min-h-[100dvh] items-center justify-between pt-32 pb-16 gap-12 lg:gap-8 w-full">

        {/* Left Text Content strictly matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col items-start w-full lg:pr-8"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-[#707A99] dark:text-slate-300 mb-8 leading-tight">
            A single platform to <br className="hidden sm:block" />
            <span className="font-bold text-[#636F9D] dark:text-slate-100">manage</span> every part of <br className="hidden sm:block" />
            your <span className="font-bold text-[#636F9D] dark:text-slate-100">legal work</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#3B4AE8] dark:text-blue-400 max-w-xl leading-relaxed font-normal">
            Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
          </p>
        </motion.div>

        {/* Right Floating Visualization */}
        {mounted && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                }
              }
            }}
            className="flex-1 relative w-full h-[500px] lg:h-[700px] hidden lg:block"
          >
            {/* 
                  Cards do not overlap awkwardly.
                  Consistent spacing, subtle rotations using transform classes.
                  Cards stay within container.
                */}

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } } }} className="absolute z-20 top-[40%] left-[0%] lg:left-[5%] w-max max-w-full">
              <FloatingCard color="orange" icon={Gavel} label="Matters" className="transform -rotate-6 lg:-rotate-12" animationClass="animate-float-slow" />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } } }} className="absolute z-30 top-[20%] right-[0%] lg:right-[15%] w-max max-w-full">
              <FloatingCard color="blue" icon={Receipt} label="Billing" className="transform -rotate-3 lg:-rotate-12" animationClass="animate-float-medium" />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } } }} className="absolute z-40 top-[55%] left-[20%] lg:left-[30%] w-max max-w-[95%]">
              <FloatingCard color="purple" variant="portal" label="John Doe" className="transform rotate-0 lg:-rotate-3" animationClass="animate-float-fast" />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } } }} className="absolute z-20 bottom-[10%] left-[20%] lg:left-[25%] w-max max-w-full">
              <FloatingCard color="dark" icon={CheckSquare} label="Tasks" className="transform rotate-0" animationClass="animate-float-slow" />
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } } }} className="absolute z-10 bottom-[2%] right-[5%] lg:right-[10%] w-max max-w-[95%]">
              <FloatingCard color="dark" icon={FileText} label="Documents" className="transform -rotate-3 lg:-rotate-6" animationClass="animate-float-medium" />
            </motion.div>
          </motion.div>
        )}
      </section>
    </main>
  );
}
