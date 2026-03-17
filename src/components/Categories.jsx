import React from "react";
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
import { motion } from "framer-motion";

const CATEGORIES_DATA = [
  {
    id: 1,
    name: "Frontend",
    icon: BrowserIcon,
    color: "bg-cyan-300",
    count: 12,
  },
  { id: 2, name: "Backend", icon: DatabaseIcon, color: "bg-primary", count: 8 },
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
  // Parent controls the children's timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Quick, snappy staggered entrance
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <section className="p-8 font-mono bg-yellow-300" id="categories">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 border-l-8 border-foreground pl-6"
        >
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Categories
          </h2>
          <p className="mt-2 font-bold text-gray-600 uppercase text-sm italic">
            Category of the available categories
          </p>
        </motion.div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b-4 lg:border-b-0"
        >
          {CATEGORIES_DATA.map((cat) => (
            <motion.button
              key={cat.id}
              variants={itemVariants}
              whileHover={{
                backgroundColor: "#ffffff",
                scale: 1.01,
                zIndex: 10,
              }}
              className={`
                group relative flex flex-col items-start p-8 
                border-4 border-foreground -ml-[4px] -mt-[4px]
                bg-white/80 transition-colors duration-200
                active:translate-x-0 active:translate-y-0
              `}
            >
              {/* Icon Wrapper */}
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                className={`${cat.color} border-2 border-foreground p-2 mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none transition-all`}
              >
                <HugeiconsIcon
                  icon={cat.icon}
                  size={32}
                  strokeWidth={2.5}
                  variant="rounded"
                />
              </motion.div>

              {/* Text Content */}
              <h3 className="text-2xl font-black uppercase leading-none">
                {cat.name}
              </h3>

              <div className="mt-4 flex w-full justify-between items-center">
                <span className="text-xs font-black uppercase bg-foreground text-white px-2 py-0.5">
                  {cat.count} Articles
                </span>

                <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-200">
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={24}
                    strokeWidth={3}
                  />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
