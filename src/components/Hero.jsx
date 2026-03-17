import herogirl from "../assets/herogirl.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { RocketIcon } from "@hugeicons/core-free-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <header className="min-h-screen md:h-screen w-full  relative">
      {/* Floating Status Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="absolute top-10 md:top-18 left-0 w-full px-6 md:px-15 z-20 pointer-events-none"
      >
        <div className="relative w-full flex items-center justify-center">
          <div className="bg-primary/15 border-2 border-black py-2 px-6 shadow-[4px_4px_0px_#000000] rotate-[-1deg]">
            <p className="text-xs font-black uppercase italic flex items-center gap-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 border border-black"></span>
              </span>
              It's StackOverflow, but Better!
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="cont w-full h-full mt-19 flex flex-col md:flex-row items-center justify-between relative px-6 md:px-15 pt-24 md:pt-0"
      >
        {/* Text Content */}
        <div className="flex-1 w-full h-full mb-10 md:mb-25 flex flex-col items-start justify-center md:justify-end gap-5 z-10">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-[5em] font-semibold tracking-wide text-foreground leading-tight md:leading-none"
          >
            Build your skill <br className="hidden md:block" /> to advance your
            career path.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-md text-foreground/80 max-w-xl"
          >
            Discover community-tested YouTube tutorials for anything you want to
            learn. Save the best videos, skip the noise, and start learning
            faster with LearnStack.
          </motion.p>

          <motion.div variants={itemVariants} className="w-full sm:w-auto">
            <Link to="/tutorials">
              <button className="w-full sm:w-auto bg-primary text-md font-semibold gap-3 flex items-center justify-center md:justify-between px-8 py-4 shadow-[8px_8px_0px_#000000] border-2 border-black active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                Get Started
                <HugeiconsIcon icon={RocketIcon} size={20} />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex-1 w-full h-full flex items-end justify-center md:justify-end mb-10 md:mb-15 heroimg relative"
        >
          <img
            src={herogirl}
            className="w-full max-w-[400px] md:max-w-none object-contain"
            alt="Hero Illustration"
          />
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Hero;
