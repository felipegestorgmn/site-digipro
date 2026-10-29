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
  <img
    src="/brand/dp-logo-dark.png"
    alt="Logotipo DigiPro"
    className={className}
    loading="eager"
    decoding="async"
  />
);
