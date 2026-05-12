import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import SectionLabel from "../components/ui/SectionLabel";
import { PARTNERS } from "../data/partners";

function PartnerCard({ partner, index, t }) {
  const meta = t(`partners.items.${partner.id}`, { returnObjects: true }) || {};
  const name = meta.name || partner.id;
  const who = meta.who || "";

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="min-w-0"
    >
      <div
        tabIndex={0}
        className="group relative aspect-square sm:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-ink-500/12 dark:border-ivory-50/8 bg-ivory-100/70 dark:bg-ink-700/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-moss-600/40 dark:hover:border-moss-400/30 hover:shadow-[0_22px_44px_-26px_rgba(11,10,8,0.28)] dark:hover:shadow-[0_22px_44px_-26px_rgba(0,0,0,0.6)] focus-within:border-moss-600/50 focus-visible:outline-none"
        aria-label={name}
      >
        {/* Soft accent wash */}
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70"
          style={{
            background: `radial-gradient(circle at 30% 25%, ${partner.accent}14, transparent 60%)`,
          }}
          aria-hidden
        />

        {/* Logo */}
        <div className="absolute inset-0 grid place-items-center p-4 sm:p-6 lg:p-8 transition-all duration-500 group-hover:scale-[0.96] group-hover:opacity-90">
          <div className="grid h-[100%] w-[72%] max-h-28 max-w-28 place-items-center overflow-hidden rounded-2xl sm:max-h-36 sm:max-w-36 lg:max-h-52 lg:max-w-52">
            <img
              src={partner.logo}
              srcSet={partner.logoWebp}
              sizes="(min-width: 1024px) 208px, (min-width: 640px) 144px, 105px"
              alt={name}
              width="210"
              height="210"
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-2xl object-contain duration-500"
            />
          </div>
        </div>

        {/* Hover-reveal panel */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <div className="m-2 rounded-xl border border-ivory-50/10 bg-ink-500/92 px-3.5 py-3 shadow-[0_18px_36px_-22px_rgba(0,0,0,0.55)] backdrop-blur-md dark:bg-ink-800/92 sm:m-2.5">
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: partner.accent }}
                aria-hidden
              />

              <div className="truncate font-display text-[15px] leading-tight tracking-[-0.01em] text-ivory-50">
                {name}
              </div>
            </div>

            {who && (
              <p className="mt-1.5 line-clamp-2 text-[12px] leading-snug text-ivory-100/80">
                {who}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.li>
  );
}

export default function PartnersSuccess() {
  const { t } = useTranslation();

  return (
    <section id="partners" className="relative py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionLabel>{t("partners.sectionLabel")}</SectionLabel>

            <h2 className="mt-4 max-w-[22ch] font-display text-3xl leading-[1.1] tracking-[-0.02em] text-ink-500 dark:text-ivory-50 sm:text-4xl lg:text-[40px]">
              {t("partners.title")}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-ink-400 dark:text-ivory-100">
              {t("partners.lead")}
            </p>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-10">
          {PARTNERS.map((partner, index) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              index={index}
              t={t}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
