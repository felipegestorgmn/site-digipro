import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel, WHATSAPP_URL } from "./shared";

const FinalCTA = () => (
  <section id="contato" aria-labelledby="contato-title" className="relative py-24 md:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0066FF] via-[#1E8AFF] to-[#00D1C2] p-10 md:p-20 text-center">
        <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-white/10 blur-[90px] pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-[#0B0D12]/20 blur-[90px] pointer-events-none" aria-hidden="true" />

        <div className="relative">
          <span className="inline-flex items-center gap-2.5 text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-[#0B0D12]/80">
            <span className="h-px w-8 bg-[#0B0D12]/60" aria-hidden="true" />
            Vamos Avançar
          </span>
          <h2 id="contato-title" className="mx-auto mt-6 max-w-3xl font-sora font-semibold text-[#0B0D12] text-3xl md:text-5xl leading-[1.1] tracking-tight">
            O próximo nível do seu negócio começa aqui.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-[#0B0D12]/75 leading-relaxed">
            Sua empresa tem potencial para ir mais longe. Vamos construir juntos o próximo passo da sua presença digital.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-cta-button"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#0B0D12] px-9 py-4.5 text-sm font-semibold tracking-wider text-white uppercase transition-transform duration-300 hover:scale-[1.05] active:scale-95 py-4"
          >
            Falar com a DigiPro
            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FinalCTA;
