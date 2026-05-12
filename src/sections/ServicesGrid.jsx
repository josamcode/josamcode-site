import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import Container from "../components/ui/Container";
import SectionLabel from "../components/ui/SectionLabel";
import { SERVICES } from "../data/services";

export default function ServicesGrid() {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative py-14 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <SectionLabel>{t("services.sectionLabel")}</SectionLabel>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-ink-500 dark:text-ivory-50 tracking-[-0.02em] max-w-[20ch]">
              {t("services.title")}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-ink-400 dark:text-ivory-100">
              {t("services.subtitle")}
            </p>
          </div>
        </div>

        {/* Services list — editorial style */}
        <div className="mt-10 border-t border-ink-500/14 dark:border-ivory-50/10">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const meta = t(`services.items.${s.id}`, { returnObjects: true });
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative border-b border-ink-500/14 dark:border-ivory-50/10"
              >
                {/* Hover band */}
                <div className="absolute inset-0 bg-moss-600/0 group-hover:bg-moss-600/5 transition-colors duration-300" />
                <div className="relative grid grid-cols-12 gap-4 lg:gap-8 items-start py-5 lg:py-7 px-2 lg:px-4">
                  <div className="col-span-2 lg:col-span-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-300 dark:text-ivory-200 pt-1.5">
                    0{i + 1}
                  </div>
                  <div className="col-span-10 lg:col-span-3 flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-500/5 dark:bg-ivory-50/5 text-ink-500 dark:text-ivory-50 group-hover:bg-moss-600 group-hover:text-ivory-50 transition-colors duration-300">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl text-ink-500 dark:text-ivory-50 leading-tight pt-1.5 tracking-[-0.01em]">
                      {meta.title}
                    </h3>
                  </div>
                  <div className="col-span-12 lg:col-span-7 lg:pt-2">
                    <p className="text-[15px] leading-relaxed text-ink-400 dark:text-ivory-200 max-w-2xl">
                      {meta.body}
                    </p>
                  </div>
                  <div className="hidden lg:flex col-span-1 justify-end pt-2">
                    <ArrowUpRight className="h-5 w-5 text-ink-300 dark:text-ivory-200 group-hover:text-moss-700 dark:group-hover:text-moss-300 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
