import React from "react";
import {
  Add01Icon,
  ChampionIcon,
  GlobalIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

const Submit = () => {
  return (
    <section className="p-10 font-mono">
      <div className="max-w-6xl mx-auto border-[6px] border-foreground bg-primary p-8 md:p-16 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
          <HugeiconsIcon icon={GlobalIcon} size={200} strokeWidth={1} />
        </div>

        {/* Content Side */}
        <div className="flex-1 z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-foreground p-2 rounded-full">
              <HugeiconsIcon icon={ChampionIcon} size={24} color="white" />
            </div>
            <span className="font-foreground uppercase tracking-widest text-sm">
              Community Driven
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-foreground uppercase tracking-tighter leading-none mb-6">
            Found a helpful <br />
            <span className="bg-foreground text-white px-2 italic">
              tutorial?
            </span>
          </h2>

          <p className="text-xl font-bold max-w-md leading-tight border-l-4 border-foreground pl-4">
            Share it with the community and help thousands of learners master
            the stack.
          </p>
        </div>

        {/* Action Side */}
        <div className="flex-shrink-0 z-10">
          <Link to="/tutorials/">
            <button className="group relative flex items-center gap-4 bg-secondary border-4 border-foreground px-12 py-6 text-3xl font-foreground uppercase shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all rotate-[-2deg] hover:rotate-0">
              <HugeiconsIcon
                icon={Add01Icon}
                size={40}
                strokeWidth={3}
                className="group-hover:rotate-90 transition-transform duration-300"
              />
              Submit Tutorial
            </button>
          </Link>

          <div className="mt-6 flex justify-center md:justify-end gap-2 text-xs font-foreground uppercase italic">
            <span>* Login Required</span>
            <span>//</span>
            <span>* Instant Approval</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Submit;
