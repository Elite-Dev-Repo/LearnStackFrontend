import React from "react";
import { useEffect, useState } from "react";
import api from "../api";

import {
  ThumbsUpIcon,
  BookmarkIcon,
  PlayIcon,
  Calendar01Icon,
  ZapIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

function Trending() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await api.get("/tutorials/");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="cont min-h-screen flex flex-col items-center gap-10 pt-10 pb-20 font-mono">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-4">
        <div className="bg-foreground flex items-center text-white px-4 py-2 mb-4 rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] border-2 border-foreground">
          <HugeiconsIcon
            icon={ZapIcon}
            size={48}
            variant="solid"
            className="text-white"
          />
          <span className="font-foreground uppercase tracking-widest text-sm">
            Top Tutorials
          </span>
        </div>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 w-full max-w-7xl">
        {data.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="group relative bg-white border-4 border-foreground shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
          >
            {/* Thumbnail Wrapper */}
            <div className="relative aspect-video border-b-4 border-foreground overflow-hidden bg-foreground">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center  transition-opacity">
                <div className="bg-white p-3 border-4 border-foreground ">
                  <HugeiconsIcon
                    icon={PlayIcon}
                    size={32}
                    variant="solid"
                    color="foreground"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-secondary border-2 border-foreground text-xs font-foreground uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  {item.channel_name}
                </span>
              </div>

              <h2 className="text-2xl font-foreground uppercase leading-[1.1] min-h-[3rem]">
                {item.title}
              </h2>

              <div className="flex justify-between items-center mt-2 border-t-4 border-foreground pt-4">
                <div className="flex gap-6">
                  <div className="flex items-center gap-1.5 group/icon">
                    <HugeiconsIcon
                      icon={ThumbsUpIcon}
                      size={20}
                      strokeWidth={2.5}
                      className="group-hover/icon:text-blue-500 transition-colors"
                    />
                    <span className="font-foreground text-sm">
                      {item.likes_count}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 group/icon">
                    <HugeiconsIcon
                      icon={BookmarkIcon}
                      size={20}
                      strokeWidth={2.5}
                      className="group-hover/icon:text-yellow-500 transition-colors"
                    />
                    <span className="font-foreground text-sm">
                      {item.bookmarks_count}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gray-500">
                  <HugeiconsIcon
                    icon={Calendar01Icon}
                    size={17}
                    strokeWidth={2.5}
                    className=""
                  />
                  <span className="font-bold text-[10px] uppercase">
                    {new Date(item.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
