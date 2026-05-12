import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import Container from "../components/ui/Container";
import SectionLabel from "../components/ui/SectionLabel";
import ProjectMockup from "../components/ui/ProjectMockup";
import { PROJECTS } from "../data/projects";

function KPIChip({ value, label, accent }) {
  return (
    <div className="rounded-2xl border border-ink-500/12 dark:border-ivory-50/8 bg-ivory-100/70 dark:bg-ink-700/40 px-4 py-3">
      <div
        className="font-display text-2xl leading-none"
        style={{ color: accent }}
      >
        {value}
      </div>
      <div className="mt-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-ink-300 dark:text-ivory-200">
        {label}
      </div>
    </div>
  );
}

function ProjectTab({ project, active, onClick, t, index }) {
  const Icon = project.icon;
  const item = t(`projects.items.${project.id}`, { returnObjects: true });
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
      aria-pressed={active}
      className={`group relative text-start rounded-3xl p-5 sm:p-6 border transition-all duration-300 overflow-hidden ${
        active
          ? "border-moss-600/45 dark:border-moss-500/40 bg-ivory-100/95 dark:bg-ink-700/70 shadow-[0_24px_48px_-28px_rgba(21,128,61,0.32)]"
          : "border-ink-500/12 dark:border-ivory-50/8 bg-ivory-50/70 dark:bg-ink-700/30 hover:border-ink-500/24 dark:hover:border-ivory-50/15 hover:bg-ivory-100/80 dark:hover:bg-ink-700/50"
      }`}
    >
      {/* Number */}
      <div className="absolute top-4 end-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300 dark:text-ivory-200">
        0{index + 1}
      </div>
      <div
        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl"
        style={{ background: `${project.accent}18`, color: project.accent }}
      >
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-300 dark:text-ivory-200">
        {item.tag}
      </div>
      <h3 className="mt-1 font-display text-xl sm:text-2xl text-ink-500 dark:text-ivory-50 leading-tight">
        {item.title}
      </h3>
      <p className="mt-2 text-[13px] leading-relaxed text-ink-400 dark:text-ivory-200 line-clamp-2">{item.outcome}</p>

      {/* Active indicator */}
      <div
        className={`mt-5 h-px w-full bg-gradient-to-r ${
          active
            ? "from-moss-600/60 via-moss-600/30 to-transparent"
            : "from-ink-500/10 to-transparent dark:from-ivory-50/10"
        }`}
      />
      <div className="mt-3 flex items-center gap-2 text-xs text-ink-300 dark:text-ivory-200 group-hover:text-moss-700 dark:group-hover:text-moss-300 transition-colors">
        <span>{active ? t("projects.case.kpiLabel") : t("projects.switcher.label")}</span>
        <ArrowUpRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
      </div>
    </motion.button>
  );
}

export default function ProjectsShowcase() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const active = PROJECTS.find((p) => p.id === activeId) || PROJECTS[0];
  const item = t(`projects.items.${active.id}`, { returnObjects: true });

  return (
    <section id="projects" className="relative py-14 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionLabel>{t("projects.sectionLabel")}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-ink-500 dark:text-ivory-50 tracking-[-0.02em] max-w-[24ch]">
              {t("projects.sectionTitle")}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-ink-400 dark:text-ivory-100">
              {t("projects.sectionLead")}
            </p>
          </div>
        </div>

        {/* Project tabs */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <ProjectTab
              key={p.id}
              project={p}
              index={i}
              active={p.id === active.id}
              onClick={() => setActiveId(p.id)}
              t={t}
            />
          ))}
        </div>

        {/* Case study panel */}
        <div className="mt-6 lg:mt-8 rounded-4xl border border-ink-500/12 dark:border-ivory-50/8 bg-ivory-50/80 dark:bg-ink-700/20 overflow-hidden shadow-[0_18px_44px_-30px_rgba(11,10,8,0.18)] dark:shadow-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Mockup */}
              <div className="lg:col-span-6 relative p-5 sm:p-7 lg:p-9 border-b lg:border-b-0 lg:border-e border-ink-500/10 dark:border-ivory-50/8">
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${active.accent}14, transparent 55%)`,
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400 dark:text-ivory-200">
                      {item.tag} · Demo
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-moss-700 dark:text-moss-300">
                      {item.title}
                    </div>
                  </div>
                  <div className="aspect-[5/4] w-full max-w-[560px]">
                    <ProjectMockup kind={active.mockup.kind} accent={active.accent} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 p-5 sm:p-7 lg:p-9">
                <h3 className="font-display text-2xl sm:text-3xl text-ink-500 dark:text-ivory-50 tracking-[-0.01em]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-400 dark:text-ivory-200 max-w-md">
                  {item.outcome}
                </p>

                <div className="mt-5 space-y-3.5">
                  {[
                    { label: t("projects.case.problem"), body: item.problem, icon: "01" },
                    { label: t("projects.case.built"), body: item.built, icon: "02" },
                    { label: t("projects.case.impact"), body: item.impact, icon: "03" },
                  ].map((row, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-moss-700 dark:text-moss-300 w-6 mt-1">
                        {row.icon}
                      </div>
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-400 dark:text-ivory-200">
                          {row.label}
                        </div>
                        <p className="mt-1 text-[14px] leading-relaxed text-ink-500 dark:text-ivory-100">
                          {row.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* KPIs */}
                <div className="mt-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-moss-700 dark:text-moss-300">
                      {t("projects.case.kpiLabel")}
                    </span>
                    <span className="hairline flex-1" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {item.kpis.map((kpi, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.06, duration: 0.45 }}
                      >
                        <KPIChip value={kpi.value} label={kpi.label} accent={active.accent} />
                      </motion.div>
                    ))}
                  </div>
                  <p className="mt-4 text-[11px] text-ink-300 dark:text-ivory-200/70">
                    {t("projects.case.kpiNote")}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
