import React from "react";
import {
  UserGroupIcon,
  Book02Icon,
  CourseIcon,
  ChampionIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const STATS = [
  {
    label: "Tutorials Shared",
    value: "12,430",
    icon: CourseIcon,
    color: "bg-cyan-300",
  },
  {
    label: "Contributors",
    value: "4,100",
    icon: UserGroupIcon,
    color: "bg-lime-400",
  },
  {
    label: "Bookmarks",
    value: "25,000",
    icon: Book02Icon,
    color: "bg-orange-400",
  },
];

const RECENT_CONTRIBUTORS = [
  "alex_dev",
  "shad_cn",
  "brutal_ui",
  "django_master",
  "tailwind_king",
  "supabase_pro",
];

const Community = () => {
  return (
    <section className="py-16 px-6 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-end gap-4 mb-12">
          <h2 className="text-6xl font-foreground uppercase tracking-tighter leading-none">
            Our <br /> Pulse
          </h2>
          <div className="pb-2">
            <span className="bg-foreground text-white px-3 py-1 text-sm font-bold animate-pulse">
              LIVE DATA
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className={`relative p-8 border-4 border-foreground ${stat.color} shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}
            >
              <div className="absolute top-4 right-4 opacity-20">
                <HugeiconsIcon icon={stat.icon} size={60} strokeWidth={2} />
              </div>
              <p className="text-lg font-foreground uppercase mb-2 italic underline decoration-2">
                {stat.label}
              </p>
              <h3 className="text-5xl font-foreground tracking-tight">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Recent Activity Ticker */}
        <div className="border-4 border-foreground bg-white overflow-hidden py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex whitespace-nowrap animate-marquee">
            {/* Doubling the array to create a seamless loop */}
            {[...RECENT_CONTRIBUTORS, ...RECENT_CONTRIBUTORS].map((name, i) => (
              <div key={i} className="flex items-center mx-8 gap-3">
                <div className="w-8 h-8 bg-secondary border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                  <HugeiconsIcon
                    icon={ChampionIcon}
                    size={16}
                    strokeWidth={3}
                  />
                </div>
                <span className="text-xl font-foreground uppercase tracking-tight">
                  {name} joined the hunt
                </span>
                <HugeiconsIcon
                  icon={StarIcon}
                  size={20}
                  variant="solid"
                  className="ml-4 text-yellow-400"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Animation Config Required in tailwind.config.js or Global CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `,
        }}
      />
    </section>
  );
};

export default Community;
