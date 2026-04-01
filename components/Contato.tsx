"use client";

import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect to backend/email service
    alert("Mensagem enviada! Entraremos em contato em breve.");
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  return (
    <section id="contato" className="bg-[#0a0f0f] py-24 px-12">
      <div className="max-w-2xl mx-auto">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-white/60 text-sm uppercase tracking-widest">
            entre em contato
          </span>
        </div>

        <h2 className="text-white uppercase text-center mb-2 leading-tight"
          style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
          <span className="font-light">TIRE SUAS DÚVIDAS</span>
          <br />
          <span className="font-black">MANDE UM EMAIL</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-[#111618] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-white/30 transition-colors"
          />
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-[#111618] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-white/30 transition-colors"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Digite seu telefone"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-[#111618] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-white/30 transition-colors"
          />
          <textarea
            name="message"
            placeholder="Digite sua mensagem"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-[#111618] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-white/30 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-[#293132] hover:bg-[#3a4546] border border-[rgba(163,198,255,0.11)] text-white font-semibold py-4 rounded-xl transition-colors text-base"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
