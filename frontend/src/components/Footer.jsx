import { ArrowUp, Instagram, Mail } from "lucide-react";
import { DPSymbol, WHATSAPP_URL } from "./shared";

const QUICK_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

const SERVICE_LINKS = [
  "Gestão de Redes Sociais",
  "Tráfego Pago",
  "Sites e Landing Pages",
  "Automação de WhatsApp",
  "Perfil da Empresa no Google",
  "Cartões Digitais e NFC",
  "Conteúdo, Vídeos e Reels",
  "Vídeos Imobiliários com IA",
];

const Footer = () => (
  <footer className="relative border-t border-white/[0.06] bg-[#080A0E] pt-20 pb-10" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">Rodapé</h2>
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
        <div>
          <a href="#inicio" aria-label="DigiPro — voltar ao início" data-testid="footer-logo" className="inline-flex items-center gap-3">
            <DPSymbol className="h-8 w-auto" />
            <span className="font-sora font-semibold text-white text-xl tracking-tight">
              Digi<span className="text-[#0066FF]">Pro</span>
            </span>
          </a>
          <p className="mt-5 font-sora text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-[#0066FF] to-[#00D1C2] bg-clip-text text-transparent">
            Do Digital ao Crescimento
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
            Estratégia, marketing e tecnologia para impulsionar negócios no digital.
          </p>
        </div>

        <nav aria-label="Links rápidos">
          <h3 className="font-sora text-sm font-semibold tracking-widest uppercase text-white/80">Navegação</h3>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/50 transition-colors duration-300 hover:text-[#00D1C2]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Categorias de serviços">
          <h3 className="font-sora text-sm font-semibold tracking-widest uppercase text-white/80">Soluções</h3>
          <ul className="mt-5 space-y-3">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a href="#solucoes" className="text-sm text-white/50 transition-colors duration-300 hover:text-[#00D1C2]">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-sora text-sm font-semibold tracking-widest uppercase text-white/80">Contato</h3>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp-link"
                className="inline-flex items-center gap-2.5 text-sm text-white/50 transition-colors duration-300 hover:text-[#00D1C2]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.08 8.08 0 0 1-1.24-4.28c0-4.47 3.64-8.11 8.16-8.11 4.47 0 8.11 3.64 8.11 8.11s-3.64 8.12-8.11 8.12m4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z"/></svg>
                </span>
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/digipro_oficial"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-instagram-link"
                className="inline-flex items-center gap-2.5 text-sm text-white/50 transition-colors duration-300 hover:text-[#00D1C2]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10" aria-hidden="true">
                  <Instagram size={14} />
                </span>
                @digipro_oficial
              </a>
            </li>
            <li data-testid="footer-email-placeholder">
              <span className="inline-flex items-center gap-2.5 text-sm text-white/50">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10" aria-hidden="true">
                  <Mail size={14} />
                </span>
                E-mail comercial em breve
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row">
        <p className="text-xs text-white/35" data-testid="footer-copyright">
          © {new Date().getFullYear()} DigiPro. Todos os direitos reservados.
        </p>
        <a
          href="#inicio"
          data-testid="back-to-top-link"
          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white/50 transition-colors duration-300 hover:text-[#00D1C2]"
        >
          Voltar ao topo
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-[#00D1C2]/50" aria-hidden="true">
            <ArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
