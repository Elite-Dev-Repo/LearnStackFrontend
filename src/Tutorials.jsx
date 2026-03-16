import React, { useEffect, useState } from "react";
import {
  Search01Icon,
  PreferenceHorizontalIcon,
  CourseIcon,
  ThumbsUpIcon,
  BookmarkIcon,
  SearchRemoveIcon,
  Add01Icon,
  Cancel01Icon,
  YoutubeIcon,
  Tag01Icon,
  FilterIcon,
  Loading03Icon, // Imported loading icon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import api from "./api";
import { toast, Toaster } from "sonner";
import { Link } from "react-router-dom";

const Tutorials = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [newTutorial, setNewTutorial] = useState({
    youtube_url: "",
    category: "Frontend",
    keyword: "",
  });

  const categories = [
    "Frontend",
    "Backend",
    "Fullstack",
    "Design",
    "DevOps",
    "UI/UX",
    "AI",
    "Freelancing",
    "Other",
  ];

  // Combined Filtering Logic
  const filteredData = data.filter((t) => {
    const matchesSearch = t.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const likeVideo = async (id) => {
    try {
      await api.post(`/like/${id}/`);
      toast.success("Successfully liked!");
      fetchData();
    } catch (error) {
      toast.error("Failed to like video.");
    }
  };

  const bookmarkVideo = async (id) => {
    try {
      await api.post(`/bookmarks/${id}/`);
      toast.success("Successfully bookmarked!");
      fetchData();
    } catch (error) {
      toast.error("Failed to bookmark video.");
    }
  };

  const fetchData = async () => {
    try {
      const response = await api.get("/tutorials");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleAddTutorial = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading
    try {
      await api.post("/tutorials/", newTutorial);
      toast.success("Successfully added!");
      setIsModalOpen(false);
      setNewTutorial({ youtube_url: "", category: "Frontend", keyword: "" });
      fetchData();
    } catch (error) {
      toast.error("Failed to add tutorial. Check the URL.");
    } finally {
      setIsSubmitting(false); // Stop loading regardless of outcome
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Toaster />
      <Nav />

      <section className="min-h-screen pt-32 pb-20 px-6 font-mono">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Header & Search Bar */}
          <div className="flex flex-col md:flex-row gap-6 mb-16 items-end">
            <div className="flex-1 w-full">
              <h1 className="text-6xl font-foreground uppercase tracking-tighter mb-6 italic underline decoration-8 decoration-primary">
                Available Tutorials
              </h1>
              <div className="relative group ">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                  <HugeiconsIcon
                    icon={Search01Icon}
                    size={24}
                    strokeWidth={3}
                  />
                </div>
                <input
                  type="text"
                  placeholder="SEARCH FOR A STACK..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border-4 border-foreground p-5 pl-14 text-xl font-foreground uppercase placeholder:text-zinc-400 focus:shadow-none focus:translate-x-1 outline-none"
                />
              </div>
            </div>
            <div className=" flex items-center justify-between md:justify-end gap-5 ">
              <button
                onClick={() => setIsFilterModalOpen(true)}
                className="bg-foreground text-white p-5 border-4 border-foreground hover:bg-primary hover:text-foreground transition-colors flex items-center gap-3 font-foreground uppercase shadow-[4px_4px_0px_#000000] active:shadow-none active:translate-x-1 active:translate-y-1"
              >
                <HugeiconsIcon
                  icon={PreferenceHorizontalIcon}
                  size={24}
                  strokeWidth={3}
                />
                Filters {selectedCategory !== "All" && `(${selectedCategory})`}
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className=" bg-primary flex items-center text-foreground border-4 border-foreground p-5 rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group rotate-3 hover:rotate-0"
              >
                <HugeiconsIcon icon={Add01Icon} size={32} strokeWidth={3} />
                Add New
              </button>
            </div>
          </div>

          {/* Tutorials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {loading ? (
              <div className="col-span-full flex flex-col items-center justify-center p-20 gap-4">
                <HugeiconsIcon
                  icon={Loading03Icon}
                  className="animate-spin text-primary"
                  size={48}
                />
                <p className="uppercase font-black">Loading Library...</p>
              </div>
            ) : filteredData.length > 0 ? (
              filteredData.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="group bg-white border-4 border-foreground shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all flex flex-col"
                >
                  <div className="relative aspect-video border-b-4 border-foreground bg-zinc-200 overflow-hidden">
                    <img
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 border-2 border-foreground bg-white font-foreground uppercase text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}
                      >
                        {tutorial.category}
                      </span>
                    </div>
                  </div>

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
                      <button className="bg-foreground text-white px-4 py-2 text-[12px] uppercase transition-colors">
                        {tutorial.keyword}
                      </button>
                      <div className="flex gap-4">
                        <div
                          onClick={() => likeVideo(tutorial.id)}
                          className="flex items-center gap-1 font-foreground text-sm cursor-pointer hover:scale-110 transition-transform"
                        >
                          <HugeiconsIcon
                            icon={ThumbsUpIcon}
                            size={18}
                            strokeWidth={3}
                          />
                          {tutorial.likes_count}
                        </div>
                        <div
                          onClick={() => bookmarkVideo(tutorial.id)}
                          className="flex items-center gap-1 font-foreground text-sm cursor-pointer hover:scale-110 transition-transform"
                        >
                          <HugeiconsIcon
                            icon={BookmarkIcon}
                            size={18}
                            strokeWidth={3}
                          />
                          {tutorial.bookmarks_count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full border-4 border-foreground/30 border-dashed p-20 text-center">
                <h2 className="text-4xl font-foreground uppercase flex flex-col items-center justify-center gap-7 text-zinc-400">
                  <HugeiconsIcon icon={SearchRemoveIcon} size={60} />
                  No Tutorials Found
                </h2>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Filter Modal */}
      {isFilterModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-foreground/20">
          <div className="bg-white border-[6px] border-foreground w-full max-w-md shadow-[15px_15px_0px_0px_#000000] relative">
            <div className="bg-black text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-black uppercase flex items-center gap-3">
                <HugeiconsIcon icon={FilterIcon} size={24} strokeWidth={3} />
                Refine Stack
              </h2>
              <button
                onClick={() => setIsFilterModalOpen(false)}
                className="bg-white text-black border-2 border-black p-1 hover:bg-primary transition-colors"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={20} strokeWidth={3} />
              </button>
            </div>

            <div className="p-8 space-y-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-zinc-500">
                  Select Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setIsFilterModalOpen(false);
                  }}
                  className="w-full bg-white border-4 border-foreground p-5 font-black uppercase text-lg outline-none cursor-pointer hover:bg-zinc-50 transition-colors appearance-none"
                >
                  <option value="All">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                  setIsFilterModalOpen(false);
                }}
                className="w-full border-4 border-dashed border-foreground p-4 font-black uppercase hover:bg-red-100 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Tutorial Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-foreground/20">
          <div className="bg-white border-[6px] border-foreground w-full max-w-xl shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="bg-primary border-b-4 border-foreground p-6 flex justify-between items-center">
              <h2 className="text-3xl font-black uppercase italic tracking-tighter">
                Submit New Tutorial
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-white border-2 border-foreground p-1 hover:bg-red-400 transition-colors"
                disabled={isSubmitting} // Disable close during submit
              >
                <HugeiconsIcon icon={Cancel01Icon} size={24} strokeWidth={3} />
              </button>
            </div>

            <form onSubmit={handleAddTutorial} className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase flex items-center gap-2">
                  <HugeiconsIcon icon={YoutubeIcon} size={16} /> YouTube URL
                </label>
                <input
                  required
                  type="url"
                  placeholder="https://youtube.com/watch?v=..."
                  value={newTutorial.youtube_url}
                  disabled={isSubmitting}
                  onChange={(e) =>
                    setNewTutorial({
                      ...newTutorial,
                      youtube_url: e.target.value,
                    })
                  }
                  className="w-full bg-white border-4 border-foreground p-4 font-bold outline-none focus:bg-primary/5 transition-colors disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase">
                    Category
                  </label>
                  <select
                    value={newTutorial.category}
                    disabled={isSubmitting}
                    onChange={(e) =>
                      setNewTutorial({
                        ...newTutorial,
                        category: e.target.value,
                      })
                    }
                    className="w-full bg-white border-4 border-foreground p-4 font-bold outline-none appearance-none cursor-pointer disabled:opacity-50"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase flex items-center gap-2">
                    <HugeiconsIcon icon={Tag01Icon} size={16} /> Keyword
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Django"
                    value={newTutorial.keyword}
                    disabled={isSubmitting}
                    onChange={(e) =>
                      setNewTutorial({
                        ...newTutorial,
                        keyword: e.target.value,
                      })
                    }
                    className="w-full bg-white border-4 border-foreground p-4 font-bold outline-none focus:bg-primary/5 disabled:opacity-50"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-white py-5 text-2xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,255,149,0.5)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all mt-4 flex items-center justify-center gap-3 disabled:bg-zinc-600 disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <HugeiconsIcon
                      icon={Loading03Icon}
                      className="animate-spin"
                      size={28}
                    />
                    Processing...
                  </>
                ) : (
                  "Add to Library ★"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Tutorials;
