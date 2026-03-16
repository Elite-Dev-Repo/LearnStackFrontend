import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ACCESS, REFRESH } from "../constants";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Logout01Icon,
  Menu01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem(ACCESS);

  const links = [
    { name: "Home", href: "/" },
    { name: "Trending", href: "/#trending" },
    { name: "FAQ", href: "/#faq" },
    { name: "Tutorials", href: "/tutorials" },
  ];

  const handleLogout = () => {
    localStorage.removeItem(ACCESS);
    localStorage.removeItem(REFRESH);
    setIsOpen(false);
    navigate("/");
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 z-[100] backdrop-blur-2xl bg-white/20 h-20 w-screen flex items-center justify-between md:justify-around px-6 md:px-15 border-b-2 border-foreground">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl flex-1 font-foreground tracking-tighter"
        >
          LearnStack
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between gap-20 text-lg font-medium text-foreground">
          <ul className="flex items-center gap-8 text-lg font-bold text-foreground/60">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-foreground transition-colors uppercase text-sm tracking-widest"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {token ? (
              <>
                <Link
                  to="/bookmarks"
                  className="bg-foreground text-white px-6 py-2 uppercase text-sm border-2 border-foreground hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  Bookmarks
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 border-2 border-foreground bg-red-400 shadow-[2px_2px_0px_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  <HugeiconsIcon
                    icon={Logout01Icon}
                    size={20}
                    strokeWidth={3}
                  />
                </button>
              </>
            ) : (
              <Link
                to="/register"
                className="bg-primary px-6 py-3 border-2 border-foreground font-foreground uppercase text-sm shadow-[4px_4px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 border-2 border-foreground bg-white"
          onClick={toggleMenu}
        >
          <HugeiconsIcon
            icon={isOpen ? Cancel01Icon : Menu01Icon}
            size={24}
            strokeWidth={3}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-yellow-300 border-l-4 border-foreground flex flex-col p-10 gap-8 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-20 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="text-4xl font-foreground uppercase tracking-tighter border-b-4 border-foreground pb-2"
            >
              {link.name}
            </a>
          ))}

          <div className="mt-10">
            {token ? (
              <div className="flex flex-col gap-4">
                <Link
                  to="/bookmarks"
                  onClick={toggleMenu}
                  className="w-full text-center py-5 border-4 border-foreground bg-white font-foreground uppercase text-xl shadow-[8px_8px_0px_#000000]"
                >
                  Bookmarks
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full py-5 border-4 border-foreground bg-red-400 font-foreground uppercase text-xl shadow-[8px_8px_0px_#000000]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/register"
                onClick={toggleMenu}
                className="w-full block text-center py-5 border-4 border-foreground bg-primary font-foreground uppercase text-xl shadow-[8px_8px_0px_#000000]"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
