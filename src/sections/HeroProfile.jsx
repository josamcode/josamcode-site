import { MoveDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";

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
        <div className="relative h-full w-full">
          <picture>
            <source
              type="image/webp"
              srcSet="/my-photo-480.webp 480w, /my-photo-744.webp 744w, /my-photo-960.webp 960w"
              sizes="(min-width: 1280px) 424px, (min-width: 1024px) 372px, min(100vw - 48px, 640px)"
            />
            <img
              src="/my-photo.jpg"
              alt={t("hero.portraitName")}
              width="744"
              height="992"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </picture>
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
            <h1
              style={{ "--reveal-delay": "50ms" }}
              className="mt-6 font-display text-[28px] sm:text-[40px] lg:text-[56px] xl:text-[60px] leading-[1.02] font-light text-ink-500 dark:text-ivory-50 tracking-[-0.02em] reveal-up"
            >
              {t("hero.headline")}
            </h1>

            <p
              style={{ "--reveal-delay": "100ms" }}
              className="mt-7 max-w-[58ch] text-[15px] sm:text-base leading-relaxed text-ink-400 dark:text-ivory-200 reveal-up"
            >
              {t("hero.paragraph")}
            </p>

            {/* Highlight card */}
            <div
              style={{ "--reveal-delay": "150ms" }}
              className="mt-8 relative reveal-up"
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
            </div>

            {/* Stats row */}
            <div
              style={{ "--reveal-delay": "200ms" }}
              className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 reveal-up"
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
            </div>
          </div>

          {/* Right column — portrait */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div
              style={{ "--reveal-delay": "100ms" }}
              className="relative reveal-up"
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
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{ "--reveal-delay": "350ms" }}
          className="mt-10 lg:mt-14 flex items-center gap-3 text-ink-400 dark:text-ivory-200 reveal-up"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
            {t("hero.scrollHint")}
          </span>
          <span className="hairline w-24" />
          <MoveDown className="h-3.5 w-3.5" />
        </div>
      </Container>
    </section>
  );
}
