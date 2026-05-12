import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ y: -14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 14, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
