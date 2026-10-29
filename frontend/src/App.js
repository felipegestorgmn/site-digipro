import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Positioning from "@/components/Positioning";
import Solutions from "@/components/Solutions";
import Differentials from "@/components/Differentials";
import About from "@/components/About";
import Process from "@/components/Process";
import Founder from "@/components/Founder";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const useSmoothScroll = () => {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return undefined;

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -90 });
      }
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);
};

function App() {
  useSmoothScroll();

  return (
    <div className="min-h-screen overflow-x-clip bg-[#0B0D12] text-white antialiased selection:bg-[#0066FF]/40 selection:text-white" data-testid="digipro-homepage">
      <a
        href="#conteudo"
        data-testid="skip-to-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#0066FF] focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Marquee />
        <Positioning />
        <Solutions />
        <Differentials />
        <About />
        <Process />
        <Founder />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
