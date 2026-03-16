import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiDnaIcon,
  AiCloudIcon,
  NewTwitterIcon,
  Linkedin02Icon,
} from "@hugeicons/core-free-icons";

// Dummy data for the logos
const LOGO_DATA = [
  {
    name: "LinkedIn",
    icon: <HugeiconsIcon icon={Linkedin02Icon} />,
    color: "bg-primary",
    link: "https://oyenekanemmanuel.xyz/",
  },
  {
    name: "X-Twitter",
    icon: <HugeiconsIcon icon={NewTwitterIcon} />,
    color: "bg-secondary",
    link: "https://oyenekanemmanuel.xyz/",
  },
  {
    name: "Portfolio",
    icon: <HugeiconsIcon icon={AiCloudIcon} />,
    color: "bg-cyan-300",
    link: "https://oyenekanemmanuel.xyz/",
  },
  {
    name: "Enigma",
    icon: <HugeiconsIcon icon={AiDnaIcon} size={40} />,
    color: "bg-lime-400",
    link: "https://oyenekanemmanuel.xyz/",
  },
];

const LogoTree = () => {
  return (
    <div className="min-h-fit border-y-5 border-foreground p-10 font-mono">
      <div className="relative flex flex-row justify-center gap-12">
        {/* The "Tree Trunk" Line */}
        <div className="absolute left-8 top-0 h-full w-2 bg-foreground" />

        {LOGO_DATA.map((logo, i) => (
          <div key={i} className="relative flex items-center group">
            <div className="absolute left-8 w-12 h-2 bg-foreground" />
            <a href={logo.link} target="_blank">
              {/* Horizontal Branch Connector */}

              {/* Logo Node */}
              <div
                className={`
                ml-20 p-6 
                border-4 border-foreground  
                shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                hover:translate-x-1 hover:translate-y-1 hover:shadow-none 
                transition-all duration-100 
                cursor-pointer
                flex gap-4 items-center
                ${logo.color}
              `}
              >
                <span className="">{logo.icon}</span>
                <h2 className="text-2xl font-foreground uppercase leading-none">
                  {logo.name}
                </h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTree;
