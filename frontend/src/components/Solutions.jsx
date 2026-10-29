import {
  Share2, Target, MonitorSmartphone, Bot, MapPin, Nfc, Clapperboard, Building2, ArrowUpRight,
} from "lucide-react";
import { Reveal, SectionLabel, WHATSAPP_URL } from "./shared";

const SERVICES = [
  { n: "01", icon: Share2, title: "Gestão de Redes Sociais", text: "Planejamento, conteúdo e gestão estratégica de perfis." },
  { n: "02", icon: Target, title: "Tráfego Pago", text: "Campanhas no Meta Ads e Google Ads." },
  { n: "03", icon: MonitorSmartphone, title: "Sites e Landing Pages", text: "Desenvolvimento responsivo, moderno e focado em conversão." },
  { n: "04", icon: Bot, title: "Automação de WhatsApp", text: "Atendimento inteligente e automação de processos." },
  { n: "05", icon: MapPin, title: "Gestão do Perfil da Empresa no Google", text: "Otimização da presença nas pesquisas e no Google Maps." },
  { n: "06", icon: Nfc, title: "Cartões Digitais e NFC", text: "Compartilhamento de contatos e acesso facilitado a avaliações." },
  { n: "07", icon: Clapperboard, title: "Criação de Conteúdo, Vídeos e Reels", text: "Produção visual para empresas e marcas." },
  { n: "08", icon: Building2, title: "Vídeos Imobiliários com IA", text: "Vídeos de apresentação de imóveis produzidos a partir de fotografias, com movimentos de câmera simulados." },
];

const Solutions = () => (
  <section id="solucoes" aria-labelledby="solucoes-title" className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[900px] rounded-full bg-[#0066FF]/10 blur-[140px] pointer-events-none" aria-hidden="true" />

    <div className="relative mx-auto max-w-6xl px-6">
      <div className="max-w-3xl">
        <Reveal><SectionLabel>O Que Fazemos</SectionLabel></Reveal>
        <Reveal custom={1}>
          <h2 id="solucoes-title" className="mt-5 font-sora font-semibold text-white text-3xl md:text-5xl leading-[1.12] tracking-tight">
            Soluções inteligentes para o seu negócio{" "}
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00D1C2] bg-clip-text text-transparent">evoluir.</span>
          </h2>
        </Reveal>
        <Reveal custom={2}>
          <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed">
            Conectamos diferentes frentes do digital em uma estratégia coerente, moderna e orientada ao próximo passo.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <Reveal key={s.n} custom={i % 4} className="group relative flex flex-col rounded-3xl border border-white/[0.07] bg-[#111827]/60 p-7 transition-[border-color,transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:border-[#00D1C2]/40 hover:shadow-[0_24px_60px_-24px_rgba(0,209,194,0.3)]" data-testid={`solution-card-${s.n}`}>
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-[#2E9BFF] transition-colors duration-500 group-hover:border-[#00D1C2]/40 group-hover:text-[#00D1C2]">
                <s.icon size={22} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="font-sora text-xs font-semibold tracking-widest text-white/30 transition-colors duration-500 group-hover:text-[#00D1C2]/70">{s.n}</span>
            </div>
            <h3 className="mt-7 font-sora text-base md:text-lg font-semibold text-white leading-snug">{s.title}</h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-white/55">{s.text}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Conversar pelo WhatsApp sobre ${s.title}`}
              data-testid={`solution-whatsapp-${s.n}`}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white/40 transition-colors duration-300 hover:text-[#00D1C2]"
            >
              Conversar no WhatsApp
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
