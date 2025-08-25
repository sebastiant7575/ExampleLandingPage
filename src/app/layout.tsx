'use client'

import "./globals.css";
import { useEffect, useRef, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState("first");
  const mouseTimeout = useRef<NodeJS.Timeout | null>(null);

  // Show nav when scrolling up or at top of page, hide otherwise
  useEffect(() => {
    const sectionIds = ["first", "second", "third", "fourth"];
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

      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
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
    }
  }, [lastScrollY]);

  const linkClass = (id: string) =>
    `hover:underline ${currentSection === id ? "font-bold" : ""}`

  return (
    <html lang="en" className="!scroll-smooth snap-y snap-mandatory">
      <body
        className={`antialiased`}
      >
      <nav
          className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${showNav ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="font-bold text-lg">Your Company</h1>
            <ul className="flex space-x-4">
              <li>
                <a href="#first" className={linkClass("first")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#second" className={linkClass("second")}>
                  About
                </a>
              </li>
              <li>
                <a href="#third" className={linkClass("third")}>
                  Contact 
                </a>
              </li>
              <li>
                <a href="#fourth" className={linkClass("fourth")}>
                  Footer
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
