import { Lightbulb, Cpu, Blocks, TrendingUp } from "lucide-react";
import { Reveal, SectionLabel } from "./shared";

const ITEMS = [
  { n: "01", icon: Lightbulb, title: "Estratégia personalizada", text: "Cada caminho começa pelo contexto, pelos objetivos e pela realidade do negócio." },
  { n: "02", icon: Cpu, title: "Tecnologia e inovação", text: "Ferramentas atuais aplicadas com propósito, clareza e visão de futuro." },
  { n: "03", icon: Blocks, title: "Soluções integradas", text: "Marketing, presença digital e automação trabalhando na mesma direção." },
  { n: "04", icon: TrendingUp, title: "Evolução mensurável", text: "Acompanhamento de indicadores para orientar decisões e oportunidades." },
];

const Differentials = () => (
  <section id="diferenciais" aria-labelledby="diferenciais-title" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 opacity-[0.12] pointer-events-none" aria-hidden="true">
      <img
        src="https://images.unsplash.com/photo-1758073519996-6d3c63b4922c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMGRhcmslMjB0ZWNobm9sb2d5JTIwYmx1ZXxlbnwwfHx8fDE3OTMyNDA3Nzh8MA&ixlib=rb-4.1.0&q=85&w=1600&auto=format"
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D12] via-[#0B0D12]/60 to-[#0B0D12]" />
    </div>

    <div className="relative mx-auto max-w-6xl px-6">
      <div className="max-w-3xl">
        <Reveal><SectionLabel>Por Que a DigiPro</SectionLabel></Reveal>
        <Reveal custom={1}>
          <h2 id="diferenciais-title" className="mt-5 font-sora font-semibold text-white text-3xl md:text-5xl leading-[1.12] tracking-tight">
            Estratégia, tecnologia e resultados{" "}
            <span className="text-white/50">em cada solução.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {ITEMS.map((item, i) => (
          <Reveal key={item.n} custom={i % 2} className="group relative rounded-3xl border border-white/[0.07] bg-[#111827]/70 backdrop-blur-sm p-9 md:p-10 transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-[#0066FF]/40 hover:shadow-[0_24px_60px_-24px_rgba(0,102,255,0.35)]" data-testid={`differential-card-${item.n}`}>
            <div className="flex items-center gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-[#2E9BFF] transition-colors duration-500 group-hover:border-[#0066FF]/40 group-hover:text-[#00D1C2]">
                <item.icon size={24} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <span className="font-sora text-xs font-semibold tracking-widest text-[#00D1C2]/70">{item.n}</span>
                <h3 className="font-sora text-xl md:text-2xl font-semibold text-white">{item.title}</h3>
              </div>
            </div>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-white/55">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
