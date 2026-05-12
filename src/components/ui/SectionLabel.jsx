export default function SectionLabel({ children, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-moss-600/70 dark:bg-moss-400/60" aria-hidden />
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-moss-700 dark:text-moss-300">
        {children}
      </span>
    </div>
  );
}
