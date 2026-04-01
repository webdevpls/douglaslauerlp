import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { IconType } from "react-icons";

const companyLinks = [
  { label: "Quem sou eu", href: "#quem-sou" },
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#metodo" },
  { label: "Contato", href: "#contato" },
  { label: "Consultoria", href: "#contato" },
];

const socialLinks: { Icon: IconType; href: string; label: string }[] = [
  { Icon: FaFacebook, href: "https://www.facebook.com/douglas.lauerconsorcios/", label: "Facebook" },
  { Icon: FaInstagram, href: "https://www.instagram.com/douglas.lauerconsorcios", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#070c0c] border-t border-white/8 pt-14 pb-8 px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/8">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <span className="text-white font-bold text-lg">Douglas Lauer</span>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur adipiscing.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-md bg-white/8 flex items-center justify-center hover:bg-white/15 transition-colors"
                >
                  <Icon className="text-white" size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <span className="text-white font-semibold text-sm">Empresa</span>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="text-white font-semibold text-sm">Contacts us</span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:dl.consorcio@gmail.com"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
              >
                <MdEmail size={16} />
                dl.consorcio@gmail.com
              </a>
              <a
                href="tel:+554197714883"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
              >
                <MdPhone size={16} />
                (41) 9771-4883
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center">
          <p className="text-white/30 text-xs">© 2025 Douglas Lauer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
