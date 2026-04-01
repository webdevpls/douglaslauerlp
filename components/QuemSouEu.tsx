import {
  HiOutlineStar,
  HiOutlineBadgeCheck,
  HiOutlineGlobe,
  HiOutlineSpeakerphone,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { BiDollarCircle } from "react-icons/bi";
import { IconType } from "react-icons";

const items: { text: string; Icon: IconType }[] = [
  {
    text: "12 anos de experiência no mercado de alavancagem patrimonial / consórcio.",
    Icon: HiOutlineBadgeCheck,
  },
  {
    text: "Vezes destaque a nível nacional em vendas e consultoria estratégica.",
    Icon: HiOutlineStar,
  },
  {
    text: "Mais de 250 Milhões sobre gestão.",
    Icon: BiDollarCircle,
  },
  {
    text: "Clientes em 🇧🇷🇵🇹🇺🇸🇨🇳🇨🇦🇨🇷",
    Icon: HiOutlineGlobe,
  },
  {
    text: "Embaixador do Grupo investe certo.",
    Icon: HiOutlineSpeakerphone,
  },
  {
    text: "Criador do método S.R.F",
    Icon: HiOutlineDocumentReport,
  },
];

const badgeStyle = {
  backgroundImage:
    "linear-gradient(90deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0.06) 100%),linear-gradient(90deg,rgba(41,49,50,0.26) 0%,rgba(41,49,50,0.26) 100%),linear-gradient(90deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0.05) 100%)",
};

export default function QuemSouEu() {
  return (
    <section id="quem-sou" className="relative w-full overflow-hidden bg-[#0a0f0f]">

      {/* ── DESKTOP (md+) ── */}
      <div className="hidden md:block relative" style={{ height: 950 }}>

        {/* Foto — exatamente como no Figma: imagem oversized com offset negativo */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/who-man.png"
            alt="Douglas Lauer"
            className="absolute max-w-none"
            style={{
              width: "140%",
              height: "auto",
              minHeight: "110%",
              left: "-37%",
              top: "-5%",
            }}
          />
        </div>
        {/* Gradiente lateral direita — suave */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(10,15,15,0.97) 20%, rgba(10,15,15,0.4) 45%, transparent 70%)",
          }}
        />

        {/* Conteúdo — deslocado para a esquerda */}
        <div
          className="absolute flex flex-col gap-10.5 items-end"
          style={{ right: 200, top: 78, width: "36%" }}
        >
          {/* Badge + Título */}
          <div className="flex flex-col gap-4 items-end w-full">
            <div
              className="flex items-center gap-2.5 px-3 py-2 rounded-[23px] border border-white/6 shrink-0"
              style={badgeStyle}
            >
              <HiOutlineStar className="text-white shrink-0" size={16} />
              <span className="text-white text-[16px] uppercase leading-none font-normal whitespace-nowrap">
                me conheça
              </span>
            </div>
            <p className="text-white uppercase text-[36px] leading-none text-right">
              <span className="font-light">Quem </span>
              <span className="font-bold">sou eu?</span>
            </p>
          </div>

          {/* Lista */}
          <div className="flex flex-col gap-6 items-end w-full">
            {items.map(({ text, Icon }, i) => (
              <div key={i} className="flex flex-col gap-6 w-full">
                <div className="flex items-center justify-end gap-4 w-full">
                  <p className="flex-1 text-white text-[15px] font-semibold leading-normal text-right">
                    {text}
                  </p>
                  <div
                    className="flex items-center justify-center p-2 rounded-[13px] shrink-0"
                    style={{ backgroundColor: "#293132", width: 48, height: 48 }}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                </div>
                {i < items.length - 1 && (
                  <div className="w-full h-px bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE (< md) ── */}
      <div className="md:hidden flex flex-col">
        <div className="relative w-full" style={{ height: 380 }}>
          <img
            src="/assets/who-man.png"
            alt="Douglas Lauer"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center top" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 50%, #0a0f0f 100%)",
            }}
          />
        </div>

        <div className="flex flex-col gap-6 px-5 pb-12 -mt-6 relative z-10">
          <div className="flex flex-col gap-3 items-start">
            <div
              className="flex items-center gap-2.5 px-3 py-2 rounded-[23px] border border-white/6 shrink-0"
              style={badgeStyle}
            >
              <HiOutlineStar className="text-white shrink-0" size={14} />
              <span className="text-white text-[13px] uppercase leading-none font-normal whitespace-nowrap">
                me conheça
              </span>
            </div>
            <p className="text-white uppercase text-[32px] leading-tight">
              <span className="font-light">Quem </span>
              <span className="font-bold">sou eu?</span>
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {items.map(({ text, Icon }, i) => (
              <div key={i} className="flex flex-col gap-5">
                <div className="flex items-center gap-4 w-full">
                  <div
                    className="flex items-center justify-center p-2 rounded-[13px] shrink-0"
                    style={{ backgroundColor: "#293132", width: 44, height: 44 }}
                  >
                    <Icon className="text-white" size={22} />
                  </div>
                  <p className="flex-1 text-white text-[14px] font-semibold leading-snug">
                    {text}
                  </p>
                </div>
                {i < items.length - 1 && (
                  <div className="w-full h-px bg-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
