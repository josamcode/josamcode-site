import { useTranslation } from "react-i18next";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import SectionLabel from "../components/ui/SectionLabel";
import Button from "../components/ui/Button";
import { useApp } from "../context/AppContext";
import { whatsappUrl, mailtoUrl, CONTACT } from "../data/contact";

export default function FinalCTA() {
  const { t } = useTranslation();
  const { language } = useApp();

  return (
    <section id="contact" className="relative py-14 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-ink-500/10 dark:border-ivory-50/10 bg-gradient-to-br from-ink-500 via-ink-600 to-ink-700 dark:from-ink-700 dark:via-ink-800 dark:to-black"
        >
          {/* Decorative layers */}
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
          <div className="absolute -top-20 -end-20 w-72 h-72 rounded-full bg-moss-500/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-20 -start-20 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" aria-hidden />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-moss-400/50 to-transparent" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-7 sm:p-10 lg:p-14">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-8 bg-moss-300/60" aria-hidden />
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-moss-300">
                  {t("cta.sectionLabel")}
                </span>
              </div>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-[52px] leading-[1.05] text-ivory-50 tracking-[-0.02em]">
                <span className="block">{t("cta.line1")}</span>
                <span className="block text-moss-300 mt-1">{t("cta.line2")}</span>
              </h2>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  as="a"
                  href={whatsappUrl(language)}
                  target="_blank"
                  rel="noreferrer"
                  variant="accent"
                  size="lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("cta.primary")}
                  <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
                </Button>
                <Button
                  as="a"
                  href={mailtoUrl(language)}
                  variant="outline"
                  size="lg"
                  className="!text-ivory-50 !border-ivory-50/20 hover:!border-moss-400/60 hover:!text-moss-300"
                >
                  <Mail className="h-4 w-4" />
                  {t("cta.secondary")}
                </Button>
              </div>
              <p className="mt-5 text-xs text-ivory-100/60 font-mono uppercase tracking-[0.2em]">
                {t("cta.note")}
              </p>
            </div>

            {/* Right column — small details card */}
            <div className="lg:col-span-4 flex items-end">
              <div className="w-full rounded-2xl border border-ivory-50/10 bg-ivory-50/5 backdrop-blur p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-moss-300">
                  {CONTACT.location}
                </div>
                <div className="mt-3 font-display text-xl text-ivory-50">
                  {t("brand.name")}
                </div>
                <div className="text-xs text-ivory-100/70 mt-1">
                  {t("brand.role")} · {t("brand.secondary")}
                </div>
                <div className="mt-5 hairline" />
                <div className="mt-4 space-y-2 text-xs text-ivory-100/80 font-mono">
                  <div className="truncate">{CONTACT.email}</div>
                  <div className="opacity-70" dir="ltr">{CONTACT.whatsapp}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
