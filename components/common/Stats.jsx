import { stats } from "@/data/site";
import { useCounterAnimation, useScrollReveal } from "@/hooks/useAnimation";
import { Eyebrow, DemoBadge, ScrollReveal } from "./Motion";

const Stat = ({ s, start, i }) => {
  const v = useCounterAnimation(s.value, { start });
  return (
    <ScrollReveal delay={i * 0.08} className="border-l-2 border-[#ff3131] pl-6 sm:pl-8 py-4" data-testid={`stat-${i}`}>
      <p className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-none tabular-nums">
        {s.value === 0 ? "00" : v}<span className="text-[#ff3131]">{s.suffix}</span>
      </p>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-600">{s.label}</p>
    </ScrollReveal>
  );
};

export const Stats = () => {
  const [ref, inView] = useScrollReveal();
  return (
    <section ref={ref} data-testid="metrics-section" className="bg-white border-t border-[#e5e5e5]">
      <div className="container-x section-pad">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <Eyebrow>By the numbers</Eyebrow>
          <h2 className="display-lg text-[#111]">Results you can measure</h2>
          <DemoBadge label="Demo data — real metrics pending" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => <Stat key={s.label} s={s} start={inView} i={i} />)}
        </div>
      </div>
    </section>
  );
};
