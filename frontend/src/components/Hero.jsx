import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "./shared";

const lineWrap = {
  hidden: {},
  visible: (i) => ({ transition: { staggerChildren: 0.14, delayChildren: 0.55 + i * 0.25 } }),
};
const lineInner = {
  hidden: { y: "115%" },
  visible: { y: "0%", transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="inicio" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Fundo: composição tecnológica abstrata */}
      <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1710957987034-cea509422852?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlJTIwZGFyayUyMGJsdWV8ZW58MHx8fHwxNzkzMjQwNzc4fDA&ixlib=rb-4.1.0&q=85&w=1920&auto=format"
          alt=""
          className="h-full w-full object-cover opacity-25"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D12]/70 via-[#0B0D12]/40 to-[#0B0D12]" />
      </motion.div>

      {/* Iluminação orgânica */}
      <motion.div style={{ y: glowY }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[820px] rounded-full bg-[#0066FF]/20 blur-[140px]" />
        <div className="absolute bottom-0 right-[8%] h-[340px] w-[420px] rounded-full bg-[#00D1C2]/10 blur-[120px]" />
      </motion.div>

      {/* Gráfico ascendente conceitual */}
      <motion.svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0" />
            <stop offset="45%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#00D1C2" />
          </linearGradient>
        </defs>
        <motion.path
          d="M-20 300 C 240 290, 420 250, 640 200 S 1080 110, 1460 30"
          fill="none"
          stroke="url(#hero-line)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.7, duration: 2.2, ease: "easeInOut" }}
        />
      </motion.svg>

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md px-5 py-2"
          data-testid="hero-label"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#00D1C2]" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-[0.35em] text-white/80 uppercase">DigiPro</span>
        </motion.div>

        <h1 className="font-sora font-semibold leading-[1.02] tracking-tight text-white text-[13vw] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <motion.span className="block overflow-hidden pb-1" variants={lineWrap} initial="hidden" animate="visible" custom={0}>
            <motion.span className="block" variants={lineInner}>DO DIGITAL AO</motion.span>
          </motion.span>
          <motion.span className="block overflow-hidden pb-2" variants={lineWrap} initial="hidden" animate="visible" custom={1}>
            <motion.span className="block bg-gradient-to-r from-[#0066FF] via-[#2E9BFF] to-[#00D1C2] bg-clip-text text-transparent" variants={lineInner}>
              CRESCIMENTO.
            </motion.span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed"
          data-testid="hero-description"
        >
          Transformamos presença digital em oportunidades reais de crescimento.
          Conectamos estratégia, marketing e tecnologia para impulsionar negócios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#solucoes"
            data-testid="hero-solutions-button"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D1C2] px-8 py-4 text-sm font-semibold tracking-wider text-[#0B0D12] uppercase transition-transform duration-300 hover:scale-[1.04] active:scale-95"
          >
            Conhecer Soluções
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-specialist-button"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-[border-color,background-color,transform] duration-300 hover:border-[#00D1C2]/60 hover:bg-white/[0.06] hover:scale-[1.04] active:scale-95"
          >
            Falar com um Especialista
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#posicionamento"
        aria-label="Rolar para a próxima seção"
        data-testid="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/80 transition-colors duration-300"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown size={20} aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
