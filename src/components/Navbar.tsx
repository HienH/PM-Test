"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const navLinks = [
  {
    href: "#trading",
    key: "trading",
    dropdown: [{ href: "#forex", key: "forex" }],
  },
  {
    href: "#discover",
    key: "discover",
    dropdown: [{ href: "#education", key: "education" }],
  },
  {
    href: "#promotions",
    key: "promotions",
    dropdown: [{ href: "#bonuses", key: "bonuses" }],
  },
  {
    href: "#company",
    key: "company",
    dropdown: [{ href: "#about", key: "about" }],
  },
];

export default function Navbar() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header
      className="border-b border-slate-200 bg-white/80 backdrop-blur"
      ref={navRef}
    >
      <nav className="mx-auto flex max-w-screen-2xl items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/Logo.svg" alt="Company logo" width={160} height={45} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center flex-1 justify-center gap-[33px]">
          <ul className="flex items-center gap-[33px] text-base">
            {navLinks.map((link) => (
              <li key={link.href} className="relative">
                <button
                  onClick={() => toggleDropdown(link.key)}
                  className="flex items-center gap-1 transition hover:text-slate-900"
                >
                  {t(`navbar.${link.key}`)}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-md shadow-lg z-50">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-slate-50"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {t(`navbar.${item.key}`)}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <a
            href="#partner"
            className="flex items-center gap-1 text-brand-red text-base transition hover:opacity-80"
          >
            {t("navbar.partnerWithUs")}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Desktop Register & Account */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <a
            href="#register"
            className="inline-flex items-center justify-center rounded-[20px] bg-brand-red px-6 py-2.5 font-semibold text-base text-white shadow-sm transition hover:bg-red-700"
          >
            {t("navbar.register")}
          </a>

          <Link href="/account">
            <Image
              src="/account/User.svg"
              alt="User account"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 md:hidden ml-auto"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="flex h-4 w-4 flex-col justify-between">
            <span className="h-[2px] w-full bg-current" />
            <span className="h-[2px] w-full bg-current" />
            <span className="h-[2px] w-full bg-current" />
          </div>
        </button>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <div className="bg-white md:hidden" ref={mobileMenuRef}>
          <div className="mx-auto max-w-6xl px-4 py-3">
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col gap-3 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => toggleDropdown(link.key)}
                    className="flex items-center justify-between w-full py-1 transition hover:text-slate-900"
                  >
                    {t(`navbar.${link.key}`)}
                    <svg
                      className={`w-4 h-4 transition-transform ${activeDropdown === link.key ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {activeDropdown === link.key && (
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="block py-1 text-sm hover:text-slate-900"
                          onClick={() => {
                            setActiveDropdown(null);
                            setOpen(false);
                          }}
                        >
                          {t(`navbar.${item.key}`)}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="#partner"
              className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-red"
              onClick={() => setOpen(false)}
            >
              {t("navbar.partnerWithUs")}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="#register"
                className="w-1/2 rounded-full bg-brand-red px-6 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
                onClick={() => setOpen(false)}
              >
                {t("navbar.register")}
              </a>
              <Link
                href="/account"
                className="w-1/2 flex items-center justify-center gap-2 text-sm font-semibold"
                onClick={() => setOpen(false)}
              >
                <Image
                  src="/account/User.svg"
                  alt="User account"
                  width={20}
                  height={20}
                />
                {t("navbar.account")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
