const WORDS = [
  "Estratégia", "Marketing", "Tecnologia", "Automação", "Crescimento",
  "Inovação", "Presença Digital", "Performance",
];

const Marquee = () => (
  <div className="relative overflow-hidden border-y border-white/[0.06] bg-[#0B0D12] py-6" aria-hidden="true">
    <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
      {[...WORDS, ...WORDS].map((w, i) => (
        <span key={i} className="flex items-center gap-10">
          <span className="font-sora text-lg md:text-xl font-semibold tracking-wide text-white/25 uppercase">{w}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D1C2] opacity-60" />
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
