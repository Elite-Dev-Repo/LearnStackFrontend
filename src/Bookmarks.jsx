import React, { useEffect, useState } from "react";
import {
  Bookmark02Icon,
  ThumbsUpIcon,
  Delete02Icon,
  SearchRemoveIcon,
  ArrowLeft01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import api from "./api";
import { toast, Toaster } from "sonner";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookmarks = async () => {
    try {
      const response = await api.get("/bookmarks/");
      // Set the entire array of bookmarks, not just the first one
      setBookmarks(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookmarks:", error);
      setLoading(false);
    }
  };

  const removeBookmark = async (id) => {
    try {
      // Ensure this matches your backend URL pattern
      await api.delete(`/bookmark-delete/${id}/`);
      toast.success("Removed from bookmarks");
      // Filter out the bookmark using its ID
      setBookmarks(bookmarks.filter((b) => b.id !== id));
    } catch (error) {
      toast.error("Failed to remove bookmark");
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return (
    <>
      <Toaster />
      <Nav />

      <section className="min-h-screen pt-32 pb-20 px-6 font-mono">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="w-full">
              <Link
                to="/tutorials"
                className="flex items-center gap-2 text-xs font-black uppercase mb-4 hover:translate-x-[-4px] transition-transform"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} size={16} /> Back to
                Library
              </Link>
              <h1 className="text-5xl font-foreground uppercase tracking-tighter">
                Bookmarked Tutorials
              </h1>
            </div>
          </div>

          {/* Bookmarks Grid */}
          {loading ? (
            <div className="flex justify-center p-20">
              <div className="animate-spin h-10 w-10 border-4 border-black border-t-transparent rounded-full"></div>
            </div>
          ) : bookmarks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {bookmarks.map((bookmark) => {
                // Destructure the nested tutorial data
                const { tutorial } = bookmark;
                return (
                  <div
                    key={bookmark.id}
                    className="group bg-white border-4 border-foreground shadow-[10px_10px_0px_0px_foreground] hover:shadow-none  hover:translate-y-2 transition-all flex flex-col"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video border-b-4 border-foreground bg-zinc-200 overflow-hidden">
                      <img
                        src={tutorial.thumbnail}
                        alt={tutorial.title}
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 border-2 border-foreground bg-white font-foreground uppercase text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                          {tutorial.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <Link to={tutorial.youtube_url} target="_blank">
                        <h3 className="text-2xl font-foreground uppercase leading-none mb-3 group-hover:underline decoration-4">
                          {tutorial.title}
                        </h3>
                      </Link>
                      <p className="text-foreground mb-3 text-md font-medium">
                        {tutorial.channel_name}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-6 border-t-2 border-foreground border-dashed">
                        <span className="bg-black text-white px-3 py-1 text-[10px] uppercase">
                          {tutorial.keyword}
                        </span>

                        <button
                          onClick={() => removeBookmark(bookmark.id)}
                          className="flex items-center gap-2 bg-red-100 hover:bg-red-500 hover:text-white border-2 border-black px-3 py-1 transition-colors font-black text-xs uppercase"
                        >
                          <HugeiconsIcon
                            icon={Delete02Icon}
                            size={14}
                            strokeWidth={3}
                          />
                          Unsave
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="border-4 border-foreground/20 border-dashed p-20 flex flex-col items-center justify-center text-center gap-8">
              <HugeiconsIcon
                icon={SearchRemoveIcon}
                size={80}
                className="text-zinc-300"
              />
              <div>
                <h2 className="text-3xl font-black uppercase text-zinc-400 mb-2">
                  The Vault is Empty
                </h2>
                <p className="font-bold text-zinc-400 uppercase">
                  You haven't bookmarked any tutorials yet.
                </p>
              </div>
              <Link to="/tutorials">
                <button className="bg-foreground text-white px-8 py-4 font-black uppercase shadow-[6px_6px_0px_#22d3ee] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  Browse Tutorials
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Bookmarks;
