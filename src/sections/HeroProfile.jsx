import { motion } from "framer-motion";
import { ArrowDown, Sparkles, MoveDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

function PortraitPlaceholder() {
  const { t } = useTranslation();
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-500 via-ink-600 to-ink-700 dark:from-ink-700 dark:via-ink-800 dark:to-black" />
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_20%_30%,rgba(110,231,162,0.5),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(193,167,113,0.4),transparent_55%)]" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      {/* Initials monogram */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="relative">
          <img src="/my-photo.jpg" />
        </div>
      </div>

      {/* Floating tag — top */}


      {/* Caption — bottom */}
      <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-ivory-50/10 backdrop-blur-md border border-ivory-50/15 p-4">
        <div className="font-display text-xl text-ivory-50">{t("hero.portraitName")}</div>
        <div className="mt-1 text-xs text-ivory-100/80">{t("hero.portraitCaption")}</div>
      </div>

    </div>
  );
}

export default function HeroProfile() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-10 lg:pb-16 overflow-hidden"
    >
      {/* Decorative top hairline */}
      <div className="absolute inset-x-0 top-16 hairline opacity-60" aria-hidden />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left column — text */}
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 font-display text-[28px] sm:text-[40px] lg:text-[56px] xl:text-[60px] leading-[1.02] font-light text-ink-500 dark:text-ivory-50 tracking-[-0.02em]"
            >
              {t("hero.headline")}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-7 max-w-[58ch] text-[15px] sm:text-base leading-relaxed text-ink-400 dark:text-ivory-200"
            >
              {t("hero.paragraph")}
            </motion.p>

            {/* Highlight card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-8 relative"
            >
              <div className="card-surface relative rounded-[1.75rem] p-6 sm:p-7 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-moss-600/40 to-transparent" />
                <div className="absolute -top-12 -end-12 w-40 h-40 rounded-full bg-moss-600/8 blur-3xl" aria-hidden />
                <div className="relative">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-moss-700 dark:text-moss-300">
                    {t("hero.card.label")}
                  </div>
                  <div className="mt-3 font-display text-2xl sm:text-3xl text-ink-500 dark:text-ivory-50">
                    {t("hero.card.title")}
                  </div>
                  <div className="mt-2 text-sm sm:text-[15px] text-ink-400 dark:text-ivory-200 max-w-md">
                    {t("hero.card.body")}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-8 grid grid-cols-3 gap-4 sm:gap-6"
            >
              {[
                { value: "16+", labelKey: "hero.stats.shipped" },
                { value: "React · Node", labelKey: "hero.stats.stack" },
                { value: "100%", labelKey: "hero.stats.focus" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="border-t border-ink-500/10 dark:border-ivory-50/10 pt-3"
                >
                  <div className="font-display text-xl sm:text-2xl text-ink-500 dark:text-ivory-50">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-300 dark:text-ivory-200">
                    {t(s.labelKey)}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — portrait */}
          <div className="lg:col-span-5 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative"
            >
              {/* Frame layers */}
              <div className="absolute -inset-3 rounded-[2.25rem] border border-ink-500/8 dark:border-ivory-50/8" aria-hidden />
              <div className="absolute -inset-6 rounded-[2.5rem] border border-ink-500/5 dark:border-ivory-50/5" aria-hidden />
              <PortraitPlaceholder />

              {/* Side badge */}
              <div className="absolute top-4 -start-4 sm:-start-6 z-10 hidden sm:block">
                <div className="card-surface rounded-2xl px-3 py-2.5">
                  <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink-300 dark:text-ivory-200">
                    {t("brand.secondary")}
                  </div>
                  <div className="font-display text-sm text-ink-500 dark:text-ivory-50 leading-tight">
                    {t("brand.role")}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 lg:mt-14 flex items-center gap-3 text-ink-400 dark:text-ivory-200"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
            {t("hero.scrollHint")}
          </span>
          <span className="hairline w-24" />
          <MoveDown className="h-3.5 w-3.5" />
        </motion.div>
      </Container>
    </section>
  );
}
