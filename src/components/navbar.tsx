"use client";

import { cn } from "../lib/utils";

import { AnimatePresence, motion } from "framer-motion";

import { DiamondIcon } from "../icons/diamond";
import { MenuIcon } from "../icons/menu";
import { useState } from "react";
import { CloseIcon } from "../icons/close";

const navLinks = [
  {
    text: "Home",
    href: "#hero",
  },
  {
    text: "Services",
    href: "#services",
  },
  {
    text: "Solutions",
    href: "#solutions",
  },
  {
    text: "About us",
    href: "#about-us",
  },
  {
    text: "Clients",
    href: "#clients",
  },
  {
    text: "Contact us",
    href: "#contact-us",
  },
];

const buttonClassName =
  "px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-sm bg-primary text-primary-foreground hover:bg-primary/80";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="wrapper flex justify-between items-center py-8 relative">
      <div className="flex items-center gap-2">
        <DiamondIcon className="size-6 text-primary" />
        <h1 className="font-semibold text-xl">Brand name</h1>
      </div>
      <nav className="hidden md:flex space-x-2 lg:space-x-4">
        {navLinks.map((link) => (
          <a
            href={link.href}
            className="hover:text-primary duration-200 text-sm lg:text-base"
          >
            {link.text}
          </a>
        ))}
      </nav>
      <button
        className={cn(buttonClassName, {
          "hidden md:flex": true,
        })}
      >
        Sign up
      </button>
      <span onClick={() => setIsOpen((prev) => !prev)}>
        <MenuIcon className="md:hidden cursor-pointer" />
      </span>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* black overlay */}
            <motion.div
              variants={{
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
              }}
              initial="initial"
              animate="animate"
              exit="initial"
              className="fixed inset-0 w-screen h-screen bg-black/50 z-40"
            ></motion.div>

            {/* menu */}
            <motion.aside
              variants={{
                initial: {
                  opacity: 0,
                  x: 300,
                },
                animate: {
                  opacity: 1,
                  x: 0,
                },
                exit: {
                  opacity: [1, 1, 0],
                  x: 300,
                },
              }}
              initial="initial"
              animate="animate"
              exit="exit"
              className={cn(
                "md:hidden fixed bg-background flex flex-col items-center h-screen top-0 right-0 py-8 px-6 w-72 z-50",
                {
                  hidden: !isOpen,
                }
              )}
            >
              <span
                className="self-end mb-4 "
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <CloseIcon className="cursor-pointer" />
              </span>
              <nav className="md:hidden mt-8 flex flex-col items-center space-y-4">
                {navLinks.map((link) => (
                  <a
                    href={link.href}
                    className="hover:text-primary duration-200"
                  >
                    {link.text}
                  </a>
                ))}
              </nav>
              <button
                className={cn(buttonClassName, {
                  "mt-6 w-full": true,
                })}
              >
                Sign up
              </button>
              <div className="mt-auto flex items-center gap-2">
                <DiamondIcon className="size-6 text-primary" />
                <h1 className="font-semibold text-xl">Brand name</h1>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
