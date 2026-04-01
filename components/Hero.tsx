import Image from "next/image";
import { HiOutlineStar } from "react-icons/hi";
import { MdArrowForward } from "react-icons/md";

export default function Hero() {
  return (
    <>
      {/* ── DESKTOP (md+) ── */}
      <section
        id="home"
        className="hidden md:block relative w-full overflow-hidden"
        style={{ height: "800px" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/assets/bghome.png"
            alt="Douglas Lauer"
            fill
            quality={100}
            className="object-cover object-top"
            priority
          />
        </div>

        <div
          className="absolute flex flex-col gap-4 items-start justify-center"
          style={{ left: 48, top: 325 }}
        >
          <Badge />
          <p className="text-white uppercase w-143.5 h-48.75 text-[64px] leading-none">
            <span className="font-light">invista em consóricio com</span>{" "}
            <span className="font-black">estratégia</span>
          </p>
          <p className="text-[#cacaca] text-[20px] font-light leading-normal max-w-117.5">
            Construção de patrimônio com consórcio de forma estratégica, segura e
            rentável com o Método SRF.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#metodo"
              className="flex items-center justify-center px-4 py-3 rounded-[62px] border border-white/16 text-white text-[16px] font-semibold w-31.5 hover:bg-white/10 transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              Saber mais
            </a>
            <a
              href="#contato"
              className="flex items-center gap-2.5 px-4 py-3 rounded-[62px] border border-[rgba(163,198,255,0.11)] text-white text-[16px] font-semibold w-75.75 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#293132" }}
            >
              <span className="flex-1 min-w-0 min-h-px">Quero entender o Método SRF</span>
              <MdArrowForward size={18} className="shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* ── MOBILE (< md) ── foto completa + texto na base com gradiente */}
      <section
        id="home"
        className="md:hidden relative w-full overflow-hidden"
        style={{ height: "100vh", minHeight: 600 }}
      >
        {/* Foto — usa img normal para evitar problemas de fill no mobile */}
        <img
          src="/assets/bghome.png"
          alt="Douglas Lauer"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "75% top" }}
        />

        {/* Gradiente de baixo para cima — cobre ~55% inferior */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,15,15,1) 0%, rgba(10,15,15,0.92) 30%, rgba(10,15,15,0.5) 50%, transparent 70%)",
          }}
        />

        {/* Conteúdo fixado na base */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 px-5 pb-8">
          {/* Badge pequeno */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 w-fit"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          >
            <HiOutlineStar className="text-white/70" size={12} />
            <span className="text-white/80 text-[11px] uppercase tracking-widest font-normal">
              estratégia e método
            </span>
          </div>

          {/* Título — proporcional ao desktop */}
          <p className="text-white uppercase text-[42px] leading-[1.05]">
            <span className="font-light">invista em<br />consóricio com</span>{" "}
            <span className="font-black">estratégia</span>
          </p>

          {/* Descrição */}
          <p className="text-[#cacaca] text-[14px] font-light leading-relaxed">
            Construção de patrimônio com consórcio de forma estratégica, segura
            e rentável com o Método SRF.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-2 mt-1">
            <a
              href="#metodo"
              className="flex items-center justify-center px-4 py-3 rounded-[62px] border border-white/16 text-white text-[14px] font-semibold hover:bg-white/10 transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              Saber mais
            </a>
            <a
              href="#contato"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-[62px] border border-[rgba(163,198,255,0.11)] text-white text-[14px] font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#293132" }}
            >
              Quero entender o Método SRF
              <MdArrowForward size={16} className="shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Badge() {
  return (
    <div
      className="flex items-center gap-2.5 px-3 py-2 rounded-[23px] border border-white/6 shrink-0"
      style={{
        backgroundImage:
          "linear-gradient(90deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0.06) 100%),linear-gradient(90deg,rgba(41,49,50,0.26) 0%,rgba(41,49,50,0.26) 100%),linear-gradient(90deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0.05) 100%)",
      }}
    >
      <HiOutlineStar className="text-white" size={16} />
      <span className="text-white text-[14px] uppercase leading-none font-normal whitespace-nowrap">
        estratégia e método
      </span>
    </div>
  );
}
