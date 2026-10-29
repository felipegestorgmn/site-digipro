import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { DPSymbol, WHATSAPP_URL } from "./shared";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
      >
        <div
          className={`flex items-center justify-between gap-2 sm:gap-4 rounded-full border px-4 sm:px-5 py-2.5 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 ${
            scrolled
              ? "bg-[#0B0D12]/85 border-white/15 shadow-[0_8px_40px_-8px_rgba(0,102,255,0.25)]"
              : "bg-[#0B0D12]/60 border-white/10"
          }`}
        >
          <a href="#inicio" aria-label="DigiPro — voltar ao início" data-testid="header-logo" className="flex items-center gap-2 sm:gap-2.5 shrink-0 min-w-0">
            <DPSymbol className="h-6 md:h-7 w-auto shrink-0" />
            <span className="font-sora font-semibold text-white text-base sm:text-lg tracking-tight">
              Digi<span className="text-[#0066FF]">Pro</span>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={`nav-link-${l.label.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}`}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300 focus-visible:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-quote-button"
              className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D1C2] px-5 py-2.5 text-xs font-semibold tracking-wider text-[#0B0D12] uppercase transition-transform duration-300 hover:scale-[1.04] active:scale-95"
            >
              Solicitar Orçamento
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              data-testid="mobile-menu-toggle"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-300 hover:border-[#00D1C2]/50"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-white/10 bg-[#0B0D12]/95 backdrop-blur-2xl p-6 lg:hidden"
          >
            <nav aria-label="Navegação móvel">
              <ul className="flex flex-col gap-1">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      data-testid={`mobile-nav-link-${l.label.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}`}
                      className="block rounded-xl px-4 py-3.5 font-sora text-lg text-white/80 transition-colors duration-300 hover:bg-white/5 hover:text-white"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="mobile-quote-button"
              className="mt-5 flex items-center justify-center rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D1C2] px-6 py-4 text-sm font-semibold tracking-wider text-[#0B0D12] uppercase"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
