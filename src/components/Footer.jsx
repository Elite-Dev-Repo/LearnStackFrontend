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
              className="text-6xl font-foreground uppercase tracking-tighter mx-4"
            >
              Build the Future <span className="text-pink-500">★</span> Stay
              Brutal <span className="text-cyan-500">★</span>
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
              THE HUB.
            </h2>
          </div>
          <p className="font-bold text-gray-400 leading-tight mb-6">
            A raw space for full-stack developers to learn, share, and break
            things. Built with precision and chaos.
          </p>
          <div className="flex gap-3">
            {[
              { icon: GithubIcon, color: "bg-background" },
              { icon: TwitterIcon, color: "bg-background" },
              { icon: Linkedin02Icon, color: "bg-background" },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className={`${social.color} p-2 border-2 text-foreground  hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all`}
              >
                <HugeiconsIcon
                  icon={social.icon}
                  size={20}
                  color="foreground"
                  strokeWidth={2.5}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: The Stack */}
        <div>
          <h3 className="text-xl font-foreground uppercase mb-6 underline decoration-pink-500 decoration-4 underline-offset-4">
            The Stack
          </h3>
          <ul className="flex flex-col gap-3 font-bold uppercase text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">
              Django / Python
            </li>
            <li className="hover:text-primary cursor-pointer">
              JavaScript / React
            </li>
            <li className="hover:text-blue-400 cursor-pointer">TailwindCSS</li>
            <li className="hover:text-emerald-400 cursor-pointer">
              Supabase DB
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-xl font-foreground uppercase mb-6 underline decoration-primary decoration-4 underline-offset-4">
            Resources
          </h3>
          <ul className="flex flex-col gap-3 font-bold uppercase text-sm">
            <li className="hover:text-secondary cursor-pointer">
              Documentation
            </li>
            <li className="hover:text-secondary cursor-pointer">
              Submit Tutorial
            </li>
            <li className="hover:text-secondary cursor-pointer">
              Category List
            </li>
            <li className="hover:text-secondary cursor-pointer">API Status</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="bg-zinc-900 p-6 border-2 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]">
          <h3 className="text-lg font-foreground uppercase mb-4">
            Weekly Drops
          </h3>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="EMAIL@DOMAIN.COM"
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
