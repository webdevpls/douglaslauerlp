"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md"
      style={{ backgroundColor: "rgba(97, 97, 97, 0.29)" }}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <span className="text-white font-bold text-[18px] leading-normal whitespace-nowrap">
          Douglas Lauer
        </span>

        {/* Nav — desktop */}
        <nav className="hidden md:flex items-center gap-2">
          <a href="#metodo" className="text-white text-[12px] px-2.5 py-2.5 hover:opacity-70 transition-opacity">
            Método
          </a>
          <a href="#quem-sou" className="text-white text-[12px] px-2.5 py-2.5 hover:opacity-70 transition-opacity">
            Quem sou eu?
          </a>
          <a href="#contato" className="text-white text-[12px] px-2.5 py-2.5 hover:opacity-70 transition-opacity">
            Contato
          </a>
        </nav>

        {/* CTAs — desktop */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#contato"
            className="flex items-center justify-center px-4 py-2.5 rounded-[36px] text-white text-[12px] font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#293132" }}
          >
            Quero aprender o Método
          </a>
        </div>

        {/* Hamburguer — mobile */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div
          className="md:hidden flex flex-col px-6 pb-6 gap-1 border-t border-white/10"
          style={{ backgroundColor: "rgba(20, 27, 28, 0.97)" }}
        >
          <a
            href="#metodo"
            onClick={() => setOpen(false)}
            className="text-white text-[15px] py-3 border-b border-white/8 hover:opacity-70 transition-opacity"
          >
            Método
          </a>
          <a
            href="#quem-sou"
            onClick={() => setOpen(false)}
            className="text-white text-[15px] py-3 border-b border-white/8 hover:opacity-70 transition-opacity"
          >
            Quem sou eu?
          </a>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="text-white text-[15px] py-3 border-b border-white/8 hover:opacity-70 transition-opacity"
          >
            Contato
          </a>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center px-4 py-3 rounded-[36px] text-white text-[14px] font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#293132" }}
            >
              Quero aprender o Método
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
