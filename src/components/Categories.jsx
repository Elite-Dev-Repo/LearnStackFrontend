import React from "react";
// Correct imports based on your structure
import {
  BrowserIcon,
  DatabaseIcon,
  PaintBrush01Icon,
  CloudIcon,
  SmartPhone01Icon,
  AiBrain01Icon,
  Shield01Icon,
  Tick01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";

const CATEGORIES_DATA = [
  {
    id: 1,
    name: "Frontend",
    icon: BrowserIcon,
    color: "bg-cyan-300",
    count: 12,
  },
  {
    id: 2,
    name: "Backend",
    icon: DatabaseIcon,
    color: "bg-primary",
    count: 8,
  },
  {
    id: 3,
    name: "Design",
    icon: PaintBrush01Icon,
    color: "bg-secondary",
    count: 15,
  },
  { id: 4, name: "DevOps", icon: CloudIcon, color: "bg-lime-400", count: 5 },
  {
    id: 5,
    name: "Mobile",
    icon: SmartPhone01Icon,
    color: "bg-orange-400",
    count: 9,
  },
  {
    id: 6,
    name: "AI/ML",
    icon: AiBrain01Icon,
    color: "bg-purple-400",
    count: 7,
  },
  {
    id: 7,
    name: "Security",
    icon: Shield01Icon,
    color: "bg-red-400",
    count: 4,
  },
  { id: 8, name: "Testing", icon: Tick01Icon, color: "bg-green-400", count: 6 },
];

const Categories = () => {
  return (
    <section className="p-8 font-mono bg-yellow-300" id="categories">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 border-l-8 border-foreground pl-6">
          <h2 className="text-5xl font-foreground uppercase tracking-tighter">
            Categories
          </h2>
          <p className="mt-2 font-bold text-gray-600 uppercase text-sm italic">
            Category of the available categories
          </p>
        </div>

        {/* Grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-5 border-foreground">
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              className={`
                group relative flex flex-col items-start p-8 
                border-4 border-foreground 
                transition-all duration-150 
                active:translate-x-0 active:translate-y-0 active:shadow-none
              `}
            >
              {/* Icon using the HugeiconsIcon Wrapper */}
              <div className="bg-white border-2 border-foreground p-2 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:bg-foreground group-hover:text-white transition-colors">
                <HugeiconsIcon
                  icon={cat.icon}
                  size={32}
                  strokeWidth={2.5}
                  variant="rounded"
                />
              </div>
              {/* Text Content */}
              <h3 className="text-2xl font-foreground uppercase leading-none">
                {cat.name}
              </h3>
              <div className="mt-4 flex w-full justify-between items-center">
                <span className="text-xs font-foreground uppercase bg-foreground text-white px-2 py-0.5">
                  {cat.count} Articles
                </span>

                <div className="opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={24}
                    strokeWidth={3}
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
