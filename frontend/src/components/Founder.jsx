import { User, Linkedin } from "lucide-react";
import { Reveal, SectionLabel, DPSymbol } from "./shared";

const Founder = () => (
  <section id="fundador" aria-labelledby="fundador-title" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute bottom-0 -left-40 h-[360px] w-[360px] rounded-full bg-[#0066FF]/10 blur-[130px] pointer-events-none" aria-hidden="true" />

    <div className="relative mx-auto max-w-6xl px-6">
      <div className="max-w-3xl">
        <Reveal><SectionLabel>Liderança com Propósito</SectionLabel></Reveal>
        <Reveal custom={1}>
          <h2 id="fundador-title" className="mt-5 font-sora font-semibold text-white text-3xl md:text-5xl leading-[1.12] tracking-tight">
            Por trás da tecnologia, <span className="text-white/50">existe visão.</span>
          </h2>
        </Reveal>
        <Reveal custom={2}>
          <p className="mt-5 text-base md:text-lg text-white/60">Conheça quem está por trás da DigiPro.</p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-stretch">
        <Reveal custom={1} className="relative">
          <div
            className="relative flex h-full min-h-[420px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-[#0066FF]/25 bg-[#111827]/50 p-10"
            data-testid="founder-photo-placeholder"
            role="img"
            aria-label="Espaço reservado para a fotografia profissional do fundador da DigiPro"
          >
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none" aria-hidden="true">
              <img
                src="https://images.unsplash.com/photo-1669295384050-a1d4357bd1d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMDNkJTIwc2hhcGUlMjBkYXJrJTIwY3lhbnxlbnwwfHx8fDE3OTMyNDA3Nzd8MA&ixlib=rb-4.1.0&q=85&w=1200&auto=format"
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-4 rounded-2xl border border-white/[0.06]" aria-hidden="true" />
            <span className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-[#00D1C2]/60 rounded-tl-2xl" aria-hidden="true" />
            <span className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-[#00D1C2]/60 rounded-tr-2xl" aria-hidden="true" />
            <span className="absolute bottom-4 left-4 h-8 w-8 border-b-2 border-l-2 border-[#00D1C2]/60 rounded-bl-2xl" aria-hidden="true" />
            <span className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-[#00D1C2]/60 rounded-br-2xl" aria-hidden="true" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/30">
              <User size={40} strokeWidth={1.2} aria-hidden="true" />
            </div>
            <p className="relative mt-6 font-sora text-sm font-semibold tracking-[0.25em] uppercase text-white/50">
              Fotografia em breve
            </p>
            <p className="relative mt-2 max-w-xs text-center text-xs leading-relaxed text-white/35">
              Espaço reservado para a fotografia profissional do fundador.
            </p>
          </div>
        </Reveal>

        <Reveal custom={2} className="flex flex-col justify-center rounded-3xl border border-white/[0.07] bg-[#111827]/60 p-9 md:p-12">
          <DPSymbol className="h-8 w-auto self-start opacity-70" />
          <blockquote className="mt-8 text-lg md:text-xl leading-relaxed text-white/80 font-light">
            “A DigiPro representa a união entre estratégia, tecnologia e a vontade de transformar
            ideias em oportunidades. Acredito que cada negócio possui um potencial único e que as
            ferramentas digitais, quando utilizadas com propósito, podem abrir novos caminhos
            para o crescimento.”
          </blockquote>

          <div className="mt-10 space-y-4 border-t border-white/[0.07] pt-8">
            <div data-testid="founder-name-field">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/35">Nome</p>
              <p className="mt-1 font-sora text-base text-white/70">A definir pelo fundador</p>
            </div>
            <div data-testid="founder-role-field">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/35">Cargo</p>
              <p className="mt-1 font-sora text-base text-white/70">Fundador — DigiPro</p>
            </div>
            <div data-testid="founder-contact-field">
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/35">Contato profissional</p>
              <p className="mt-1 inline-flex items-center gap-2 text-base text-white/70">
                <Linkedin size={16} className="text-[#2E9BFF]" aria-hidden="true" />
                Em breve
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Founder;
