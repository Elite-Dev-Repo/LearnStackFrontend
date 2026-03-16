import herogirl from "../assets/herogirl.png";
import { HugeiconsIcon } from "@hugeicons/react";
import { RocketIcon } from "@hugeicons/core-free-icons";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <header className="min-h-screen md:h-screen w-screen overflow-x-hidden">
      <div className="cont w-full h-full flex flex-col md:flex-row items-center justify-between relative px-6 md:px-15 pt-24 md:pt-0">
        {/* Text Content */}
        <div className="flex-1 w-full h-full mb-10 md:mb-25 flex flex-col items-start justify-center md:justify-end gap-5 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-[5em] font-semibold tracking-wide text-foreground leading-tight md:leading-none">
            Build your skill <br className="hidden md:block" /> to advance your
            career path.
          </h1>
          <p className="text-sm md:text-md text-foreground/80 max-w-xl">
            Discover community-tested YouTube tutorials for anything you want to
            learn. Save the best videos, skip the noise, and start learning
            faster with LearnStack.
          </p>
          <Link to="/tutorials" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-primary text-md font-semibold gap-3 flex items-center justify-center md:justify-between px-8 py-4 shadow-[8px_8px_0px_#000000] border-2 border-black active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
              Get Started
              <HugeiconsIcon icon={RocketIcon} size={20} />
            </button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-full h-full flex items-end justify-center md:justify-end mb-10 md:mb-15 heroimg scale-x-[-1] relative">
          <img
            src={herogirl}
            className="w-full max-w-[400px] md:max-w-none object-contain"
            alt="Hero Illustration"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
