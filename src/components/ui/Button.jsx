import { forwardRef } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss-600/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory-50 dark:focus-visible:ring-offset-ink-800 disabled:opacity-50 disabled:cursor-not-allowed select-none";

const variants = {
  primary:
    "bg-ink-500 text-ivory-50 hover:bg-ink-600 dark:bg-moss-600 dark:text-ivory-50 dark:hover:bg-moss-500 shadow-[0_8px_24px_-12px_rgba(11,10,8,0.5)] dark:shadow-[0_8px_24px_-12px_rgba(20,83,45,0.6)] hover:-translate-y-0.5",
  accent:
    "bg-moss-600 text-ivory-50 hover:bg-moss-700 dark:bg-moss-500 dark:hover:bg-moss-400 dark:text-ink-700 shadow-[0_10px_28px_-12px_rgba(21,128,61,0.5)] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-ink-500 dark:text-ivory-100 hover:bg-ink-500/5 dark:hover:bg-ivory-50/5 border border-ink-500/10 dark:border-ivory-50/10",
  outline:
    "bg-transparent text-ink-500 dark:text-ivory-100 border border-ink-500/20 dark:border-ivory-50/15 hover:border-moss-600/60 hover:text-moss-700 dark:hover:text-moss-300",
};

const sizes = {
  sm: "h-9 px-4",
  md: "h-11 px-5",
  lg: "h-12 px-6 text-[15px]",
};

const Button = forwardRef(function Button(
  { variant = "primary", size = "md", as: As = "button", className = "", children, ...rest },
  ref
) {
  return (
    <As
      ref={ref}
      className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...rest}
    >
      {children}
    </As>
  );
});

export default Button;
