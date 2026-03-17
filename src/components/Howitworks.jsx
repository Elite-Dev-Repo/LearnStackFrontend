import React from "react";
import {
  Search01Icon,
  CursorMagicSelection02Icon,
  Download04Icon,
  ArrowDown01Icon,
  ZapIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const STEPS = [
  {
    id: "01",
    title: "Discover Tutorials",
    description:
      "Search and explore a curated collection of helpful YouTube tutorials shared by the community.",
    icon: Search01Icon,
    color: "bg-primary",
  },
  {
    id: "02",
    title: "Save What You Love",
    description:
      "Like and bookmark tutorials so you can easily return to them whenever you're ready to learn.",
    icon: CursorMagicSelection02Icon,
    color: "bg-secondary",
  },
  {
    id: "03",
    title: "Share Knowledge",
    description:
      "Submit helpful tutorials and help others discover the best resources for learning anything.",
    icon: Download04Icon,
    color: "bg-cyan-300",
  },
];

const Howitworks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const stepVariants = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  });

  return (
    <section className="py-20 px-6 font-mono overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={stepVariants(0)}
          className="flex flex-col items-center mb-20 text-center"
        >
          <div className="bg-foreground text-white px-4 py-2 mb-4 rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] border-2 border-foreground">
            <span className="font-foreground uppercase tracking-widest text-sm">
              The Process
            </span>
          </div>
          <h2 className="text-6xl font-black uppercase tracking-tighter">
            How It Works
          </h2>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              variants={stepVariants(index)}
              className="relative mb-24 last:mb-0"
            >
              {/* Massive Background Number */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-10 -left-10 text-[10rem] font-black text-transparent stroke-foreground stroke-2 select-none leading-none z-0"
                style={{ WebkitTextStroke: "2px black" }}
              >
                {step.id}
              </motion.div>

              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12 relative z-10`}
              >
                {/* Icon Box */}
                <motion.div
                  whileHover={{ rotate: 0, scale: 1.05 }}
                  className={`flex-shrink-0 w-32 h-32 ${step.color} border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center rotate-[3deg] transition-transform`}
                >
                  <HugeiconsIcon icon={step.icon} size={64} strokeWidth={2.5} />
                </motion.div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-black uppercase mb-4 underline decoration-4 decoration-foreground underline-offset-4">
                    {step.id}. {step.title}
                  </h3>
                  <p className="text-lg font-bold leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Arrow */}
              {index !== STEPS.length - 1 && (
                <div className="hidden md:flex justify-center my-8">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white border-4 border-foreground p-2 animate-bounce shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <HugeiconsIcon
                      icon={ArrowDown01Icon}
                      size={32}
                      strokeWidth={3}
                    />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Final CTA Sticker */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <Link to="/tutorials">
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-lime-400 border-4 border-foreground px-10 py-5 text-2xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <HugeiconsIcon icon={ZapIcon} size={32} variant="solid" />
              Start Learning
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Howitworks;
