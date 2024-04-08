"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const handleScroll = () => {
    const nav = document.querySelector("nav");
    if (nav) {
      if (window.scrollY > 0) {
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Transparent black color
      } else {
        nav.style.backgroundColor = "black"; // Transparent
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="flexBetween max-container padding-container bg-black text-white relative z-30 py-1"
      style={{ height: "100px", position: "sticky", top: 0 }}
    >
      <Link href="/">
        <Image src="logoo-new.svg" alt="logo" width={90} height={70} className="mt-3" />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex mr-20">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-18 flexCenter cursor-pointer pb-1.5 mb-3 transition-all hover:font-bold hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="relative text-left lg:hidden inline-block">
        <div>
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-slate-100 hover:text-white"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`mr-1 h-5 w-5 text-gray-400 hover:text-white transform ${isOpen} ? "rotate-180" : "" }`}
              aria-hidden="true"
            >
              <path
                d="M4.175 34C3.48333 34 2.92708 33.7773 2.50625 33.332C2.08542 32.8867 1.875 32.3284 1.875 31.657C1.875 30.9857 2.08542 30.4417 2.50625 30.025C2.92708 29.6083 3.48333 29.4 4.175 29.4H37.725C38.3842 29.4 38.9323 29.6112 39.3694 30.0337C39.8065 30.4563 40.025 31.0032 40.025 31.6746C40.025 32.3459 39.8065 32.9013 39.3694 33.3408C38.9323 33.7803 38.3842 34 37.725 34H4.175ZM4.175 22.55C3.48333 22.55 2.92708 22.3273 2.50625 21.882C2.08542 21.4367 1.875 20.895 1.875 20.257C1.875 19.5857 2.08542 19.0417 2.50625 18.625C2.92708 18.2083 3.48333 18 4.175 18H37.725C38.3842 18 38.9323 18.2112 39.3694 18.6337C39.8065 19.0563 40.025 19.6032 40.025 20.2746C40.025 20.9126 39.8065 21.4513 39.3694 21.8908C38.9323 22.3303 38.3842 22.55 37.725 22.55H4.175ZM4.175 11.1C3.48333 11.1 2.92708 10.8857 2.50625 10.457C2.08542 10.0284 1.875 9.4617 1.875 8.757C1.875 8.119 2.08542 7.58333 2.50625 7.15C2.92708 6.71667 3.48333 6.5 4.175 6.5H37.725C38.3842 6.5 38.9323 6.71958 39.3694 7.15875C39.8065 7.59795 40.025 8.13655 40.025 8.77455C40.025 9.47925 39.8065 10.043 39.3694 10.4658C38.9323 10.8886 38.3842 11.1 37.725 11.1H4.175Z"
                fill="black"
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              <a
                href="/"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-0"
              >
                Home
              </a>
              <a
                href="/about_us"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-1"
              >
                About Us
              </a>
              <a
                href="/services"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-2"
              >
                Services
              </a>
              <form method="POST" action="/teams" role="none"></form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
