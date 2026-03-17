import React from "react";
import {
  UserGroupIcon,
  Book02Icon,
  CourseIcon,
  ChampionIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "framer-motion";

const STATS = [
  {
    label: "Tutorials Shared",
    value: "12,430",
    icon: CourseIcon,
    color: "bg-cyan-300",
  },
  {
    label: "Active Contributors",
    value: "4,100",
    icon: UserGroupIcon,
    color: "bg-lime-400",
  },
  {
    label: "Bookmarks Saved",
    value: "25,000",
    icon: Book02Icon,
    color: "bg-orange-400",
  },
];

const RECENT_CONTRIBUTORS = [
  "alex_dev",
  "shad_cn",
  "learnstack_pro",
  "django_master",
  "tailwind_king",
  "supabase_pro",
];

const Community = () => {
  return (
    <section className="py-16 px-6 font-mono overflow-hidden bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end gap-4 mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Community <br /> Pulse
          </h2>
          <div className="mt-2 md:mt-0">
            <span className="bg-foreground text-white px-3 py-1 text-sm font-bold animate-pulse">
              LIVE DATA
            </span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{
                x: 4,
                y: 4,
                boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
              }}
              className={`relative p-8 border-4 border-foreground ${stat.color} shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] cursor-default`}
            >
              <div className="absolute top-4 right-4 opacity-20">
                <HugeiconsIcon icon={stat.icon} size={60} strokeWidth={2} />
              </div>
              <p className="text-lg font-black uppercase mb-2 italic underline decoration-2">
                {stat.label}
              </p>
              <h3 className="text-5xl font-black tracking-tight">
                {stat.value}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity Ticker */}
        <div className="border-4 border-foreground bg-white overflow-hidden py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...RECENT_CONTRIBUTORS, ...RECENT_CONTRIBUTORS].map((name, i) => (
              <div key={i} className="flex items-center mx-8 gap-3">
                <div className="w-8 h-8 bg-primary border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                  <HugeiconsIcon
                    icon={ChampionIcon}
                    size={16}
                    strokeWidth={3}
                  />
                </div>
                <span className="text-xl font-black uppercase tracking-tight">
                  {name} shared a tutorial
                </span>
                <HugeiconsIcon
                  icon={StarIcon}
                  size={20}
                  variant="solid"
                  className="ml-4 text-yellow-400"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;
