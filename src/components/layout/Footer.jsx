import { useTranslation } from "react-i18next";
import Container from "../ui/Container";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-ink-500/8 dark:border-ivory-50/8">
      <Container className="py-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
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
        </div>
        <div className="text-xs text-ink-300 dark:text-ivory-200">
          &copy; {year} {t("brand.name")}. {t("footer.rights")}
        </div>
      </Container>
    </footer>
  );
}
