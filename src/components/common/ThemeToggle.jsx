import { Sun, Moon } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { useTranslation } from "react-i18next";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useApp();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`${t("nav.theme")}: ${isDark ? t("nav.dark") : t("nav.light")}`}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-500/10 dark:border-ivory-50/10 text-ink-400 dark:text-ivory-100 hover:bg-ink-500/5 dark:hover:bg-ivory-50/5 transition-colors overflow-hidden"
    >
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200">
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
    </button>
  );
}
