import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RAIL_ITEMS } from "../../data/rail";

export default function IconRail() {
  const { t } = useTranslation();
  const [active, setActive] = useState(RAIL_ITEMS[0].id);

  useEffect(() => {
    const sections = RAIL_ITEMS.map((it) => ({ id: it.id, el: document.querySelector(it.target) }))
      .filter((it) => it.el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const match = sections.find((s) => s.el === visible.target);
          if (match) setActive(match.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      aria-label="Section navigation"
      className="pointer-events-none fixed inset-y-0 z-30 hidden xl:flex items-center start-6 2xl:start-10"
    >
      <div className="pointer-events-auto card-surface rounded-full px-2 py-3 flex flex-col items-center gap-1">
        {RAIL_ITEMS.map(({ id, icon: Icon, target }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={target}
              aria-label={t(`rail.${id}`)}
              aria-current={isActive ? "true" : undefined}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            >
              <span
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-moss-600/12 dark:bg-moss-500/15 ring-1 ring-inset ring-moss-600/30"
                    : "bg-transparent group-hover:bg-ink-500/5 dark:group-hover:bg-ivory-50/5"
                }`}
                aria-hidden
              />
              <Icon
                className={`relative h-[18px] w-[18px] transition-colors ${
                  isActive
                    ? "text-moss-700 dark:text-moss-300"
                    : "text-ink-300 dark:text-ivory-200 group-hover:text-ink-500 dark:group-hover:text-ivory-50"
                }`}
              />
              <span className="pointer-events-none absolute start-full ms-3 whitespace-nowrap rounded-full bg-ink-500 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-ivory-50 opacity-0 group-hover:opacity-100 transition-opacity dark:bg-ivory-50 dark:text-ink-700">
                {t(`rail.${id}`)}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
