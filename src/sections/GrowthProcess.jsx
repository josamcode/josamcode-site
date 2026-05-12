import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import SectionLabel from "../components/ui/SectionLabel";
import { PROCESS } from "../data/process";

export default function GrowthProcess() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true });

  return (
    <section id="process" className="relative py-14 lg:py-20">
      <Container>
        <div className="max-w-3xl">
          <SectionLabel>{t("process.sectionLabel")}</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-ink-500 dark:text-ivory-50 tracking-[-0.02em]">
            {t("process.title")}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-400 dark:text-ivory-100 max-w-2xl">
            {t("process.lead")}
          </p>
        </div>

        <div className="mt-10 relative">
          {/* Connecting line */}
          <div className="absolute start-7 top-7 bottom-7 w-px bg-gradient-to-b from-moss-600/40 via-ink-500/15 to-transparent dark:via-ivory-50/10 hidden md:block" aria-hidden />

          <ol className="space-y-4">
            {PROCESS.map((step, i) => {
              const Icon = step.icon;
              const content = steps[i] || {};
              return (
                <motion.li
                  key={step.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
                >
                  {/* Step indicator */}
                  <div className="md:col-span-1 flex items-center md:items-start gap-4">
                    <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-ivory-100/80 dark:bg-ink-700/80 border border-ink-500/8 dark:border-ivory-50/8">
                      <Icon className="h-5 w-5 text-moss-700 dark:text-moss-300" />
                      <span className="absolute -top-1.5 -end-1.5 grid h-5 w-5 place-items-center rounded-full bg-ink-500 text-ivory-50 text-[10px] font-mono dark:bg-moss-600">
                        {i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-11 card-surface rounded-2xl p-5 sm:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-10">
                      <h3 className="font-display text-xl sm:text-2xl text-ink-500 dark:text-ivory-50 lg:w-1/3 tracking-[-0.01em]">
                        {content.title}
                      </h3>
                      <p className="mt-2 lg:mt-0 text-[15px] leading-relaxed text-ink-400 dark:text-ivory-200 lg:flex-1">
                        {content.body}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
