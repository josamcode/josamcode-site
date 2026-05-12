import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const THEME_KEY = "josam.theme";
const LANG_KEY = "josam.lang";

const AppContext = createContext(null);

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export function AppProvider({ children }) {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState(getInitialTheme);
  const [language, setLanguageState] = useState(() => i18n.language || "ar");

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Apply language + direction to <html>
  useEffect(() => {
    const root = document.documentElement;
    const dir = language === "ar" ? "rtl" : "ltr";
    root.setAttribute("lang", language);
    root.setAttribute("dir", dir);
    window.localStorage.setItem(LANG_KEY, language);
    if (i18n.language !== language) i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const setLanguage = useCallback((lng) => {
    if (lng !== "en" && lng !== "ar") return;
    setLanguageState(lng);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((l) => (l === "ar" ? "en" : "ar"));
  }, []);

  const value = useMemo(
    () => ({ theme, toggleTheme, language, setLanguage, toggleLanguage, dir: language === "ar" ? "rtl" : "ltr" }),
    [theme, toggleTheme, language, setLanguage, toggleLanguage]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};
