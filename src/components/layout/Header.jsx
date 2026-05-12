import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import LanguageToggle from "../common/LanguageToggle";
import ThemeToggle from "../common/ThemeToggle";
import Button from "../ui/Button";
import { whatsappUrl } from "../../data/contact";
import { useApp } from "../../context/AppContext";

const navLinks = [
  { id: "projects", href: "#projects" },
  { id: "services", href: "#services" },
  { id: "process", href: "#process" },
  { id: "social", href: "#social" },
  { id: "contact", href: "#contact" },
];

export default function Header() {
  const { t } = useTranslation();
  const { language } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 py-4 sm:py-0 transition-all duration-300 ${scrolled
        ? "backdrop-blur-xl bg-ivory-50/75 dark:bg-ink-800/75 border-b border-ink-500/8 dark:border-ivory-50/8"
        : "bg-transparent"
        }`}
    >
      <Container className="flex h-10 sm:h-[72px] items-center justify-between gap-4">
        {/* Brand */}
        <a href="#hero" className="group flex items-center gap-3">
          <img
            src="/logo.png"
            srcSet="/logo-260.webp 2x"
            alt="Logo"
            height="24"
            decoding="async"
            className="h-8 max-w-[130px] hidden dark:block"
          />

          <img
            src="/logo-dark.png"
            srcSet="/logo-dark-260.webp 2x"
            alt="Logo"
            height="24"
            decoding="async"
            className="h-8 max-w-[130px] block dark:hidden"
          />
        </a>

        {/* Desktop nav */}
        {/* <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={l.href}
              className="px-3 py-2 text-sm text-ink-400 dark:text-ivory-100 hover:text-moss-700 dark:hover:text-moss-300 transition-colors"
            >
              {t(`nav.${l.id}`)}
            </a>
          ))}
        </nav> */}

        {/* Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <Button as="a" href={whatsappUrl(language)} target="_blank" rel="noreferrer" variant="primary" size="sm">
            {t("nav.cta")}
            <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-500/10 dark:border-ivory-50/10 text-ink-500 dark:text-ivory-100"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      {open && (
          <div className="lg:hidden border-t border-ink-500/8 dark:border-ivory-50/8 bg-ivory-50/95 dark:bg-ink-800/95 backdrop-blur-xl">
            <Container className="py-6">
              <nav className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <a
                    key={l.id}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-base text-ink-500 dark:text-ivory-50 hover:bg-ink-500/5 dark:hover:bg-ivory-50/5 transition-colors"
                  >
                    <span className="font-display">{t(`nav.${l.id}`)}</span>
                    <ArrowUpRight className="h-4 w-4 text-moss-700 dark:text-moss-300 rtl:-scale-x-100" />
                  </a>
                ))}
              </nav>
              <div className="mt-5">
                <Button
                  as="a"
                  href={whatsappUrl(language)}
                  target="_blank"
                  rel="noreferrer"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  {t("nav.cta")}
                  <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
                </Button>
              </div>
            </Container>
          </div>
        )}
    </header>
  );
}
