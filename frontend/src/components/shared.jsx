import { motion } from "framer-motion";

export const WHATSAPP_URL = "https://wa.me/5567984065156";

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2.5 text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-[#00D1C2]">
    <span className="h-px w-8 bg-gradient-to-r from-[#0066FF] to-[#00D1C2]" aria-hidden="true" />
    {children}
  </span>
);

export const Reveal = ({ children, className = "", custom = 0, as = "div" }) => {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={custom}
    >
      {children}
    </Tag>
  );
};

export const DPSymbol = ({ className = "h-7 w-auto" }) => (
  <svg viewBox="0 0 1200 460" className={className} role="img" aria-label="Símbolo DigiPro">
    <defs>
      <linearGradient id="dp-grad-p" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00D1C2" />
        <stop offset="55%" stopColor="#2E9BFF" />
        <stop offset="100%" stopColor="#0066FF" />
      </linearGradient>
      <linearGradient id="dp-grad-bar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00D1C2" />
        <stop offset="100%" stopColor="#0066FF" />
      </linearGradient>
    </defs>
    {/* Letra D */}
    <path
      fill="#FFFFFF"
      d="M120 60 L430 60 C585 60 690 130 690 230 C690 330 585 400 430 400 L120 400 L175 300 L390 300 C465 300 520 275 520 230 C520 185 465 160 390 160 L175 160 Z"
    />
    {/* Barras de velocidade */}
    <path fill="url(#dp-grad-bar)" d="M235 185 L400 185 L365 250 L200 250 Z" />
    <path fill="url(#dp-grad-bar)" d="M160 300 L325 300 L290 365 L125 365 Z" />
    {/* Letra P */}
    <path
      fill="url(#dp-grad-p)"
      d="M740 60 L1030 60 C1150 60 1215 120 1215 195 C1215 270 1150 330 1030 330 L895 330 L855 430 L700 430 Z M910 160 L870 240 L995 240 C1045 240 1075 222 1075 200 C1075 178 1045 160 995 160 Z"
    />
  </svg>
);
