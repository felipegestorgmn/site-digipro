import { Reveal, SectionLabel } from "./shared";

const PILLARS = [
  { title: "Direção", text: "Planejamento e estratégia." },
  { title: "Conexão", text: "Integração entre pessoas e tecnologia." },
  { title: "Progresso", text: "Evolução contínua." },
];

const About = () => (
  <section id="sobre" aria-labelledby="sobre-title" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute top-1/4 -right-40 h-[400px] w-[400px] rounded-full bg-[#00D1C2]/[0.07] blur-[130px] pointer-events-none" aria-hidden="true" />

    <div className="relative mx-auto max-w-6xl px-6">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal><SectionLabel>Sobre a DigiPro</SectionLabel></Reveal>
          <Reveal custom={1}>
            <h2 id="sobre-title" className="mt-5 font-sora font-semibold text-white text-3xl md:text-5xl leading-[1.12] tracking-tight">
              Mais do que presença digital.{" "}
              <span className="bg-gradient-to-r from-[#0066FF] to-[#00D1C2] bg-clip-text text-transparent">
                Uma estratégia para crescer.
              </span>
            </h2>
          </Reveal>
          <Reveal custom={2}>
            <p className="mt-7 text-base md:text-lg text-white/60 leading-relaxed">
              A DigiPro nasceu para conectar empresas às oportunidades do mundo digital.
              Unimos marketing, tecnologia, criatividade e automação para fortalecer marcas,
              modernizar processos e desenvolver soluções personalizadas.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} custom={i} className="group flex items-center gap-6 rounded-3xl border border-white/[0.07] bg-[#111827]/60 p-7 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-[#00D1C2]/40" data-testid={`pillar-${p.title.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}`}>
              <span className="h-12 w-px shrink-0 bg-gradient-to-b from-[#0066FF] to-[#00D1C2]" aria-hidden="true" />
              <div>
                <h3 className="font-sora text-lg font-semibold tracking-wide text-white uppercase">{p.title}</h3>
                <p className="mt-1 text-sm text-white/55">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
