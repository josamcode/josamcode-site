import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, MessageCircle, Mail } from "lucide-react";
import Container from "../components/ui/Container";
import SectionLabel from "../components/ui/SectionLabel";
import Button from "../components/ui/Button";
import { SOCIALS } from "../data/socials";
import { whatsappUrl, mailtoUrl } from "../data/contact";
import { useApp } from "../context/AppContext";

export default function SocialCard() {
  const { t } = useTranslation();
  const { language } = useApp();

  return (
    <section id="social" className="relative py-12 lg:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-4xl border border-ink-500/12 dark:border-ivory-50/8 bg-ivory-50/80 dark:bg-ink-700/30 shadow-[0_22px_50px_-32px_rgba(11,10,8,0.22)] dark:shadow-none">
          {/* Decorative panel */}
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_85%_15%,rgba(21,128,61,0.12),transparent_50%)]" aria-hidden />
          <div className="absolute -top-px inset-x-12 h-px bg-gradient-to-r from-transparent via-moss-600/40 to-transparent" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-14">
            <div className="lg:col-span-5">
              <SectionLabel>{t("social.sectionLabel")}</SectionLabel>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] text-ink-500 dark:text-ivory-50 tracking-[-0.01em]">
                {t("social.title")}
              </h2>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-moss-700 dark:text-moss-300">
                {t("social.subtitle")}
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-ink-400 dark:text-ivory-100 max-w-md">
                {t("social.lead")}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
                <Button
                  as="a"
                  href={whatsappUrl(language)}
                  target="_blank"
                  rel="noreferrer"
                  variant="accent"
                  size="md"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("social.ctaPrimary")}
                  <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
                </Button>
                <Button
                  as="a"
                  href={mailtoUrl(language)}
                  variant="outline"
                  size="md"
                >
                  <Mail className="h-4 w-4" />
                  {t("social.ctaSecondary")}
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SOCIALS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.li
                      key={s.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.45, delay: i * 0.04 }}
                    >
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-ink-500/12 dark:border-ivory-50/8 bg-ivory-100/80 dark:bg-ink-800/60 px-4 py-3.5 hover:border-moss-600/50 hover:bg-ivory-100 dark:hover:bg-moss-400/10 dark:hover:border-moss-400/40 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <span
                          className="grid h-10 w-10 place-items-center rounded-xl"
                          style={{ background: `${s.accent}1A`, color: s.accent }}
                        >
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="font-display text-[15px] text-ink-500 dark:text-ivory-50 leading-tight">
                            {s.name}
                          </div>
                          <div className="text-[11px] font-mono text-ink-300 dark:text-ivory-200 truncate">
                            {s.handle}
                          </div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-ink-300 dark:text-ivory-200 group-hover:text-moss-700 dark:group-hover:text-moss-300 transition-colors rtl:-scale-x-100" />
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
