"use client";

import "./globals.css";
import { useEffect, useRef, useState } from "react";
import "@fontsource-variable/roboto";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const mouseTimeout = useRef<NodeJS.Timeout | null>(null);

  // Show nav when scrolling up or at top of page, hide otherwise
  useEffect(() => {
    const sectionIds = [
      "hero",
      "services",
      "about",
      "service-highlights",
      "gallery",
      "pricing",
      "footer",
    ];
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 0) {
        setShowNav(true);
      } else if (currentY < lastScrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      setLastScrollY(currentY);

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setCurrentSection(id);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 100) {
        setShowNav(true);
        // Clear previous timeout if moving back to top
        if (mouseTimeout.current) clearTimeout(mouseTimeout.current);
        // Hide navbar again after 2 seconds if mouse leaves top
        mouseTimeout.current = setTimeout(() => setShowNav(false), 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (mouseTimeout.current) clearTimeout(mouseTimeout.current);
    };
  }, [lastScrollY]);

  const linkClass = (id: string) =>
    `${currentSection === id ? "font-bold" : ""} relative group`;

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`antialiased`}>
        {/* Nav section has to be kept here for responsive/dynamic mouse reaction */}
        <nav
          className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${showNav ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <span className="font-bold text-lg md:text-2xl text-nowrap">
              <a href="#hero" className="group">
                Your Company
              </a>
            </span>
            {/* Desktop icons */}
            <ul className="hidden sm:flex space-x-4">
              <li>
                <a href="#hero" className={linkClass("hero")}>
                  Home
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#services" className={linkClass("services")}>
                  Services
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#about" className={linkClass("about")}>
                  About
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#gallery" className={linkClass("gallery")}>
                  Gallery
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
            {/* Hamburger button */}
            <button
              className="sm:hidden flex flex-col justify-center items-center w-8 h-8 relative"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* Top line */}
              <span
                className={`block absolute w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out
                  ${menuOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-1/4"}`}
              ></span>

              {/* Middle line */}
              <span
                className={`block absolute w-6 h-0.5 bg-black transition-opacity duration-300 ease-in-out
                  ${menuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"}`}
              ></span>

              {/* Bottom line */}
              <span
                className={`block absolute w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out
                  ${menuOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "top-3/4"}`}
              ></span>
            </button>
          </div>
          {/* Mobile menu */}
          <div
            className={`sm:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out
              ${menuOpen ? "max-h-96" : "max-h-0"}`}
          >
            <ul className="flex flex-col bg-white w-full px-4 pb-4 space-y-2">
              <li>
                <a
                  href="#hero"
                  className={linkClass("hero")}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={linkClass("services")}
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={linkClass("about")}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className={linkClass("gallery")}
                  onClick={() => setMenuOpen(false)}
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
