import React from "react";
import {
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  Linkedin02Icon,
  Mail01Icon,
  ArrowUp01Icon,
  ZapIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { href } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white font-mono border-t-[8px] border-foreground">
      {/* Top Section: Brand Marquee */}
      <div className="bg-white text-foreground py-8 border-b-4 border-foreground overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="text-5xl font-foreground uppercase tracking-tighter mx-4"
            >
              Discover Tutorials <span className="text-pink-500">★</span>
              Learn Faster <span className="text-cyan-500">★</span> Share
              Knowledge <span className="text-secondary">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: About */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <HugeiconsIcon
              icon={ZapIcon}
              size={32}
              variant="solid"
              className="text-primary"
            />
            <h2 className="text-3xl font-foreground uppercase tracking-tighter">
              LearnStack
            </h2>
          </div>
          <p className="font-bold text-gray-400 leading-tight mb-6">
            LearnStack is a community platform for discovering and sharing the
            most helpful YouTube tutorials. Stop searching endlessly and start
            learning faster.
          </p>
          <div className="flex gap-3">
            {[
              {
                icon: GithubIcon,
                color: "bg-background",
                href: "https://github.com/Elite-Dev-Repo",
              },
              {
                icon: TwitterIcon,
                color: "bg-background",
                href: "https://x.com/elite_developer",
              },
              {
                icon: Linkedin02Icon,
                color: "bg-background",
                href: "https://www.linkedin.com/in/oyenekan-emmanuel-63a43725b/",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                className={`${social.color} p-2 border-2 text-foreground  hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all`}
              >
                <HugeiconsIcon
                  icon={social.icon}
                  size={20}
                  color="foreground"
                  strokeWidth={1.5}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: The Stack */}
        <div>
          <h3 className="text-xl font-foreground uppercase mb-6 underline decoration-pink-500 decoration-4 underline-offset-4">
            Explore
          </h3>

          <ul className="flex flex-col gap-3 font-bold uppercase text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">
              Trending Tutorials
            </li>
            <li className="hover:text-primary cursor-pointer">
              Latest Tutorials
            </li>
            <li className="hover:text-blue-400 cursor-pointer">Top Rated</li>
            <li className="hover:text-emerald-400 cursor-pointer">
              Categories
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-xl font-foreground uppercase mb-6 underline decoration-primary decoration-4 underline-offset-4">
            Platform
          </h3>

          <ul className="flex flex-col gap-3 font-bold uppercase text-sm">
            <li className="hover:text-secondary cursor-pointer">
              Submit Tutorial
            </li>
            <li className="hover:text-secondary cursor-pointer">Bookmarks</li>
            <li className="hover:text-secondary cursor-pointer">Community</li>
            <li className="hover:text-secondary cursor-pointer">Guidelines</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="bg-zinc-900 p-6 border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
          <h3 className="text-lg font-foreground uppercase mb-4">
            Weekly Tutorials
          </h3>

          <p className="text-xs text-gray-400 mb-4">
            Get the best tutorials shared on LearnStack every week.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              disabled
              placeholder="EMAIL@DOMAIN.COM - COMING SOON"
              className="bg-foreground border-2 border-white p-2 text-xs font-bold focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-foreground font-foreground py-2 uppercase text-sm border-2 border-white hover:bg-white transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-zinc-800 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-6">
          <div className="bg-white text-foreground px-4 py-1 font-foreground text-xs rotate-[-1deg]">
            © {new Date().getFullYear()} BRUTAL_HUB // ALL RIGHTS RESERVED
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-foreground uppercase text-xs hover:text-primary transition-colors"
          >
            Back to Top
            <div className="border-2 border-white p-1 group-hover:border-primary">
              <HugeiconsIcon icon={ArrowUp01Icon} size={16} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `,
        }}
      />
    </footer>
  );
};

export default Footer;
