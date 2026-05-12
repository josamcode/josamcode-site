import { Languages } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { useTranslation } from "react-i18next";

export default function LanguageToggle({ compact = false }) {
  const { language, setLanguage } = useApp();
  const { t } = useTranslation();

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
        aria-label={t("nav.language")}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-500/10 dark:border-ivory-50/10 text-ink-400 dark:text-ivory-100 hover:bg-ink-500/5 dark:hover:bg-ivory-50/5 transition-colors"
      >
        <Languages className="h-4 w-4" />
      </button>
    );
  }

  return (
    <div
      role="tablist"
      aria-label={t("nav.language")}
      className="inline-flex items-center rounded-full border border-ink-500/10 dark:border-ivory-50/10 p-0.5 bg-ivory-100/60 dark:bg-ink-700/60 backdrop-blur"
    >
      {[
        { code: "en", label: "EN" },
        { code: "ar", label: "AR" },
      ].map((opt) => {
        const active = language === opt.code;
        return (
          <button
            key={opt.code}
            role="tab"
            aria-selected={active}
            onClick={() => setLanguage(opt.code)}
            className={`relative h-8 min-w-[42px] px-3 text-[11px] font-mono uppercase tracking-[0.18em] rounded-full transition-colors ${
              active
                ? "text-ivory-50 bg-ink-500 dark:bg-moss-600 shadow-sm"
                : "text-ink-300 dark:text-ivory-200 hover:text-ink-500 dark:hover:text-ivory-50"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
