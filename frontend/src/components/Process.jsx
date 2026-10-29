import { Reveal, SectionLabel } from "./shared";

const STEPS = [
  { n: "01", title: "Diagnóstico", text: "Entendemos o negócio e seus objetivos." },
  { n: "02", title: "Estratégia", text: "Planejamos soluções personalizadas." },
  { n: "03", title: "Implementação", text: "Executamos as ações definidas." },
  { n: "04", title: "Acompanhamento", text: "Analisamos indicadores e oportunidades de melhoria." },
];

const Process = () => (
  <section id="processo" aria-labelledby="processo-title" className="relative py-24 md:py-32 overflow-hidden">
    <div className="relative mx-auto max-w-6xl px-6">
      <div className="max-w-3xl">
        <Reveal><SectionLabel>Como Trabalhamos</SectionLabel></Reveal>
        <Reveal custom={1}>
          <h2 id="processo-title" className="mt-5 font-sora font-semibold text-white text-3xl md:text-5xl leading-[1.12] tracking-tight">
            Do planejamento <span className="text-white/50">à evolução.</span>
          </h2>
        </Reveal>
      </div>

      <ol className="relative mt-20 grid gap-12 md:grid-cols-4 md:gap-6">
        <span className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#0066FF]/50 via-white/10 to-[#00D1C2]/50 md:left-0 md:right-0 md:top-[27px] md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r" aria-hidden="true" />
        {STEPS.map((s, i) => (
          <Reveal as="li" key={s.n} custom={i} className="relative pl-20 md:pl-0 md:pt-20" data-testid={`process-step-${s.n}`}>
            <span className="absolute left-0 top-0 md:left-0 md:top-0 flex h-14 w-14 items-center justify-center rounded-full border border-[#0066FF]/30 bg-[#0B0D12] font-sora text-sm font-semibold text-[#00D1C2] shadow-[0_0_30px_-6px_rgba(0,102,255,0.5)]">
              {s.n}
            </span>
            <h3 className="font-sora text-xl font-semibold text-white">{s.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-white/55 max-w-xs">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
