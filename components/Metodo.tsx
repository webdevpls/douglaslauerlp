"use client";

import { useState } from "react";
import { HiOutlineStar, HiOutlineShieldCheck, HiOutlineHome } from "react-icons/hi";
import { BiDollarCircle } from "react-icons/bi";
import { MdArrowForward, MdClose } from "react-icons/md";
import { IconType } from "react-icons";

const cards: {
  Icon: IconType;
  title: string;
  description: string;
  modal: string;
  wide?: boolean;
}[] = [
  {
    Icon: HiOutlineShieldCheck,
    title: "Segurança",
    description:
      "Estrutura baseada em administradoras autorizadas e fiscalizadas no Brasil, com regras claras e operação dentro da legislação do setor.",
    modal:
      "O pilar da Segurança garante que toda operação de consórcio seja realizada dentro das normas do Banco Central do Brasil. Trabalhamos exclusivamente com administradoras autorizadas e fiscalizadas, com contratos claros, taxas transparentes e sem surpresas. Seu patrimônio protegido em cada etapa.",
  },
  {
    Icon: BiDollarCircle,
    title: "Rentabilidade",
    description:
      "Avaliação do potencial do crédito contemplado e das oportunidades de valorização ou uso estratégico do capital.",
    modal:
      "O pilar da Rentabilidade analisa como o crédito do consórcio pode ser utilizado de forma estratégica para maximizar o retorno sobre o investimento. Identificamos oportunidades de alavancagem, valorização de imóveis e uso inteligente do capital contemplado para gerar riqueza real.",
  },
  {
    Icon: HiOutlineHome,
    title: "Flexibilidade",
    description:
      "Liberdade para usar o crédito na aquisição de imóveis regularizados, escolhendo a região, o tipo de ativo e o melhor momento para investir.",
    modal:
      "O pilar da Flexibilidade oferece liberdade total na escolha do imóvel: região, tipo de ativo, momento da compra. Diferente do financiamento tradicional, no consórcio você decide quando e como usar o crédito, adaptando a estratégia às condições do mercado e ao seu planejamento financeiro.",
    wide: true,
  },
];

export default function Metodo() {
  const [selected, setSelected] = useState<(typeof cards)[0] | null>(null);

  return (
    <section id="metodo" className="py-20 px-6 md:px-12" style={{ backgroundColor: "#293132" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 mb-6">
            <HiOutlineStar className="text-white/70" size={14} />
            <span className="text-white/70 text-xs uppercase tracking-widest font-medium">
              testada e comprovada
            </span>
          </div>

          <h2 className="text-white uppercase text-4xl md:text-5xl mb-6 tracking-tight">
            ENTENDA O <span className="font-bold">MÉTODO</span>
          </h2>

          <p className="text-white/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            O Método SRF é um modelo de consultoria e acompanhamento que ajuda o
            cliente a usar o consórcio com uma operação de investimento baseado em
            3 pilares:
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <a
              href="#contato"
              className="px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Saber mais
            </a>
            <a
              href="#contato"
              className="px-6 py-3 rounded-full text-white text-sm font-semibold flex items-center gap-2 transition-colors hover:brightness-110"
              style={{ backgroundColor: "#4a6fa5" }}
            >
              Agendar consultoria
              <MdArrowForward size={16} />
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card) => (
            <button
              key={card.title}
              onClick={() => setSelected(card)}
              className={`bg-white text-left rounded-2xl p-8 flex flex-col gap-4 transition-colors duration-200 hover:bg-gray-100 cursor-pointer ${card.wide ? "md:col-span-2" : ""}`}
            >
              <card.Icon className="text-gray-800" size={24} />
              <h3 className="text-gray-900 font-bold text-xl">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {card.description}
              </p>
              <div className="flex justify-end pt-2">
                <MdArrowForward className="text-gray-400" size={20} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-lg w-full flex flex-col gap-5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fechar */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <MdClose size={22} />
            </button>

            {/* Ícone + título */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#293132] flex items-center justify-center shrink-0">
                <selected.Icon className="text-white" size={22} />
              </div>
              <h3 className="text-gray-900 font-bold text-2xl">{selected.title}</h3>
            </div>

            {/* Linha */}
            <div className="w-full h-px bg-gray-100" />

            {/* Texto */}
            <p className="text-gray-600 text-base leading-relaxed">{selected.modal}</p>

            {/* CTA */}
            <a
              href="#contato"
              onClick={() => setSelected(null)}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-colors hover:brightness-110 mt-1"
              style={{ backgroundColor: "#293132" }}
            >
              Agendar consultoria
              <MdArrowForward size={16} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
