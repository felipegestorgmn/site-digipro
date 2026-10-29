import { Compass, Workflow, MessagesSquare, ArrowRight } from "lucide-react";
import { Reveal, SectionLabel } from "./shared";

const ITEMS = [
  {
    n: "01",
    icon: Compass,
    title: "Clareza antes de agir",
    text: "Entendemos objetivos, público e cenário antes de definir o caminho.",
  },
  {
    n: "02",
    icon: Workflow,
    title: "Processo bem definido",
    text: "Planejamento, implementação e acompanhamento em uma jornada organizada.",
  },
  {
    n: "03",
    icon: MessagesSquare,
    title: "Comunicação direta",
    text: "Decisões e próximos passos explicados com objetividade e transparência.",
  },
];

const Positioning = () => (
  <section id="posicionamento" aria-labelledby="posicionamento-title" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute top-1/3 -left-40 h-[380px] w-[380px] rounded-full bg-[#0066FF]/10 blur-[120px] pointer-events-none" aria-hidden="true" />

    <div className="relative mx-auto max-w-6xl px-6">
      <div className="max-w-3xl">
        <Reveal><SectionLabel>Crescimento com Direção</SectionLabel></Reveal>
        <Reveal custom={1}>
          <h2 id="posicionamento-title" className="mt-5 font-sora font-semibold text-white text-3xl md:text-5xl leading-[1.12] tracking-tight">
            Estratégia antes da execução.{" "}
            <span className="text-white/50">Estrutura para evoluir.</span>
          </h2>
        </Reveal>
        <Reveal custom={2}>
          <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">
            A DigiPro conecta posicionamento, tecnologia e operação para que cada ação digital tenha propósito e continuidade.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {ITEMS.map((item, i) => (
          <Reveal key={item.n} custom={i + 1} className="group relative rounded-3xl border border-white/[0.07] bg-[#111827]/60 p-8 transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-[#0066FF]/40 hover:shadow-[0_24px_60px_-24px_rgba(0,102,255,0.35)]">
            <div className="flex items-start justify-between">
              <span className="font-sora text-sm font-semibold tracking-widest text-[#00D1C2]/80">{item.n}</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-[#2E9BFF] transition-colors duration-500 group-hover:border-[#0066FF]/40 group-hover:text-[#00D1C2]">
                <item.icon size={20} strokeWidth={1.6} aria-hidden="true" />
              </span>
            </div>
            <h3 className="mt-8 font-sora text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/55">{item.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal custom={2} className="mt-12">
        <a
          href="#sobre"
          data-testid="positioning-approach-link"
          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[#00D1C2] transition-colors duration-300 hover:text-white"
        >
          Conheça nossa abordagem
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </Reveal>
    </div>
  </section>
);

export default Positioning;
