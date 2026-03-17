import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiDnaIcon,
  AiCloudIcon,
  NewTwitterIcon,
  Linkedin02Icon,
} from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";

// Dummy data for the logos
const LOGO_DATA = [
  {
    name: "LinkedIn",
    icon: <HugeiconsIcon icon={Linkedin02Icon} />,
    color: "bg-primary",
    link: "https://www.linkedin.com/in/oyenekan-emmanuel-63a43725b/",
  },
  {
    name: "Twitter",
    icon: <HugeiconsIcon icon={NewTwitterIcon} />,
    color: "bg-foreground text-white", // Fixed color class typo
    link: "https://x.com/elite_developer",
  },
  {
    name: "Portfolio",
    icon: <HugeiconsIcon icon={AiCloudIcon} />,
    color: "bg-yellow-300",
    link: "https://oyenekanemmanuel.xyz/",
  },
  {
    name: "Enigma",
    icon: <HugeiconsIcon icon={AiDnaIcon} size={40} />,
    color: "bg-lime-400",
    link: "https://www.enigma-agent.tech/",
  },
];

const LogoTree = () => {
  return (
    <div className="min-h-fit border-y-5 border-foreground p-10 font-mono overflow-hidden">
      <div className="relative flex flex-col md:flex-row items-start max-w-screen mx-auto gap-5">
        {/* The "Tree Trunk" Line - Animates top to bottom */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          style={{ originY: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="absolute left-8 top-0 h-full w-2 bg-foreground"
        />

        {LOGO_DATA.map((logo, i) => (
          <div key={i} className="relative flex items-center w-full group">
            {/* Horizontal Branch Connector - Animates left to right */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              style={{ originX: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
              className="absolute left-8 w-12 h-2 bg-foreground"
            />

            <motion.a
              href={logo.link}
              target="_blank"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
              className="w-full"
            >
              {/* Logo Node */}
              <motion.div
                whileHover={{
                  x: 4,
                  y: 4,
                  boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
                }}
                className={`
                  ml-20 p-6 
                  border-4 border-foreground  
                  shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                  transition-shadow duration-100 
                  cursor-pointer
                  flex gap-4 items-center
                  ${logo.color}
                `}
              >
                <span className="">{logo.icon}</span>
                <h2 className="text-2xl font-black uppercase leading-none">
                  {logo.name}
                </h2>
              </motion.div>
            </motion.a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTree;
