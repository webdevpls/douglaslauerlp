import { HiOutlineStar } from "react-icons/hi";
import { MdArrowForward } from "react-icons/md";

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center" style={{ minHeight: 380 }}>
      {/* Background photo */}
      <img
        src="/assets/cta-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay gradient — Figma: 178.4deg, preto em cima, transparente embaixo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(178.404deg, rgba(0,0,0,0.75) 70.403%, rgba(0,0,0,0.4) 167.68%)",
        }}
      />

      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5 px-6 py-20 max-w-3xl mx-auto">
        {/* Badge */}
        <div
          className="flex items-center gap-2.5 px-3 py-2 rounded-[23px] border border-white/6"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0.06) 100%),linear-gradient(90deg,rgba(41,49,50,0.26) 0%,rgba(41,49,50,0.26) 100%),linear-gradient(90deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0.05) 100%)",
          }}
        >
          <HiOutlineStar className="text-white" size={14} />
          <span className="text-white text-[14px] uppercase leading-none font-normal whitespace-nowrap tracking-widest">
            testada e comprovada
          </span>
        </div>

        {/* Título */}
        <h2 className="text-white uppercase leading-tight text-[40px] md:text-[52px] font-light">
          TRANSFORME CONSÓRCIO EM{" "}
          <span className="font-black block">ESTRATÉGIA DE INVESTIMENTO</span>
        </h2>

        {/* Descrição */}
        <p className="text-white/70 text-base leading-relaxed max-w-xl">
          Com a orientação de{" "}
          <strong className="text-white font-semibold">Douglas Lauer</strong>
          , você terá acompanhamento desde a definição da estratégia até o
          cenário pós-contemplação, garantindo decisões bem planejadas em cada
          etapa.
        </p>

        {/* CTA */}
        <a
          href="#contato"
          className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white text-base font-semibold hover:bg-white/10 transition-colors mt-2"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          Agendar consultoria
          <MdArrowForward size={18} />
        </a>
      </div>
    </section>
  );
}
