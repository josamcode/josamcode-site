import { motion } from "framer-motion";
import {
  Calendar,
  Stethoscope,
  Phone,
  HeartPulse,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  CheckCircle2,
  Wallet,
  Receipt,
  Bell,
} from "lucide-react";

/* Visually distinct mockup compositions for each project. */

function ClinicMockup({ accent }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-ivory-100 dark:bg-ink-700/70 border border-ink-500/8 dark:border-ivory-50/8">
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-4 h-8 border-b border-ink-500/8 dark:border-ivory-50/8 bg-ivory-50/60 dark:bg-ink-800/60">
        <span className="h-2 w-2 rounded-full bg-ink-200/60" />
        <span className="h-2 w-2 rounded-full bg-ink-200/60" />
        <span className="h-2 w-2 rounded-full bg-ink-200/60" />
        <div className="mx-auto h-3.5 w-40 rounded-full bg-ivory-200/80 dark:bg-ink-600/60" />
      </div>
      {/* Hero band */}
      <div className="p-4 pt-5">
        <div className="rounded-xl overflow-hidden border border-ink-500/8 dark:border-ivory-50/8">
          <div
            className="relative h-24 sm:h-28"
            style={{
              background: `linear-gradient(135deg, ${accent}22, ${accent}10)`,
            }}
          >
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute inset-x-3 bottom-2 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-ink-400 dark:text-ivory-100">
                  Cairo · Clinic
                </div>
                <div className="font-display text-base text-ink-500 dark:text-ivory-50">
                  Modern care, easy booking
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-ivory-50" style={{ background: accent }}>
                Book now
              </div>
            </div>
          </div>
        </div>
        {/* Services row */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { Icon: Stethoscope, label: "General" },
            { Icon: HeartPulse, label: "Cardio" },
            { Icon: Calendar, label: "Booking" },
          ].map(({ Icon, label }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              className="rounded-lg border border-ink-500/8 dark:border-ivory-50/8 bg-ivory-50/80 dark:bg-ink-800/60 px-2.5 py-2"
            >
              <Icon className="h-3.5 w-3.5 text-ink-400 dark:text-ivory-100" />
              <div className="mt-1 text-[10px] text-ink-400 dark:text-ivory-200">{label}</div>
            </motion.div>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-3 flex items-center justify-between rounded-lg border border-ink-500/8 dark:border-ivory-50/8 bg-ivory-50/80 dark:bg-ink-800/60 px-3 py-2">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-moss-700 dark:text-moss-300" />
            <span className="text-[11px] text-ink-400 dark:text-ivory-100">WhatsApp · 24/7</span>
          </div>
          <ArrowUpRight className="h-3.5 w-3.5 text-ink-300 dark:text-ivory-200 rtl:-scale-x-100" />
        </div>
      </div>
    </div>
  );
}

function DashboardMockup({ accent }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-ivory-100 dark:bg-ink-700/70 border border-ink-500/8 dark:border-ivory-50/8">
      <div className="flex items-center gap-1.5 px-4 h-8 border-b border-ink-500/8 dark:border-ivory-50/8 bg-ivory-50/60 dark:bg-ink-800/60">
        <span className="h-2 w-2 rounded-full bg-ink-200/60" />
        <span className="h-2 w-2 rounded-full bg-ink-200/60" />
        <span className="h-2 w-2 rounded-full bg-ink-200/60" />
        <div className="mx-auto h-3.5 w-32 rounded-full bg-ivory-200/80 dark:bg-ink-600/60" />
      </div>
      <div className="p-4 grid grid-cols-3 gap-2">
        {/* KPI cards */}
        {[
          { label: "Revenue", value: "EGP 184k", trend: "+12%", up: true },
          { label: "Customers", value: "1,284", trend: "+4%", up: true },
          { label: "Unpaid", value: "EGP 22k", trend: "-9%", up: false },
        ].map((k, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            className="rounded-lg border border-ink-500/8 dark:border-ivory-50/8 bg-ivory-50/80 dark:bg-ink-800/60 p-2.5"
          >
            <div className="text-[9px] font-mono uppercase tracking-widest text-ink-300 dark:text-ivory-200">
              {k.label}
            </div>
            <div className="mt-1 font-display text-[15px] text-ink-500 dark:text-ivory-50 leading-tight">{k.value}</div>
            <div
              className={`mt-1 inline-flex items-center gap-1 text-[10px] ${
                k.up ? "text-moss-700 dark:text-moss-300" : "text-amber-600 dark:text-amber-400"
              }`}
            >
              {k.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {k.trend}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Chart */}
      <div className="px-4 pb-4">
        <div className="rounded-lg border border-ink-500/8 dark:border-ivory-50/8 bg-ivory-50/80 dark:bg-ink-800/60 p-3">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-300 dark:text-ivory-200">
              Sales · last 30d
            </div>
            <div className="text-[10px] text-moss-700 dark:text-moss-300">+27%</div>
          </div>
          <svg viewBox="0 0 200 60" className="mt-2 w-full h-16">
            <defs>
              <linearGradient id="cgrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={accent} stopOpacity="0.45" />
                <stop offset="100%" stopColor={accent} stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,42 L20,38 L40,40 L60,30 L80,32 L100,22 L120,26 L140,14 L160,18 L180,8 L200,12 L200,60 L0,60 Z"
              fill="url(#cgrad)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            />
            <motion.path
              d="M0,42 L20,38 L40,40 L60,30 L80,32 L100,22 L120,26 L140,14 L160,18 L180,8 L200,12"
              fill="none"
              stroke={accent}
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BillingMockup({ accent }) {
  const rows = [
    { name: "Nour A.", value: "EGP 4,200", paid: true },
    { name: "Mansoura Co.", value: "EGP 12,800", paid: false },
    { name: "Hassan T.", value: "EGP 980", paid: true },
    { name: "Mira S.", value: "EGP 3,150", paid: false },
  ];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-ivory-100 dark:bg-ink-700/70 border border-ink-500/8 dark:border-ivory-50/8">
      <div className="flex items-center gap-1.5 px-4 h-8 border-b border-ink-500/8 dark:border-ivory-50/8 bg-ivory-50/60 dark:bg-ink-800/60">
        <span className="h-2 w-2 rounded-full bg-ink-200/60" />
        <span className="h-2 w-2 rounded-full bg-ink-200/60" />
        <span className="h-2 w-2 rounded-full bg-ink-200/60" />
        <div className="mx-auto h-3.5 w-36 rounded-full bg-ivory-200/80 dark:bg-ink-600/60" />
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-ink-500/8 dark:border-ivory-50/8 bg-ivory-50/80 dark:bg-ink-800/60 p-2.5">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-ink-300 dark:text-ivory-200">
              <Wallet className="h-3 w-3" />
              Collected
            </div>
            <div className="mt-1 font-display text-[15px] text-ink-500 dark:text-ivory-50">EGP 142k</div>
          </div>
          <div className="rounded-lg border border-ink-500/8 dark:border-ivory-50/8 bg-ivory-50/80 dark:bg-ink-800/60 p-2.5">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-ink-300 dark:text-ivory-200">
              <Receipt className="h-3 w-3" />
              Outstanding
            </div>
            <div className="mt-1 font-display text-[15px]" style={{ color: accent }}>EGP 22k</div>
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-ink-500/8 dark:border-ivory-50/8 bg-ivory-50/80 dark:bg-ink-800/60 overflow-hidden">
          <div className="px-3 py-2 flex items-center justify-between border-b border-ink-500/8 dark:border-ivory-50/8">
            <div className="text-[10px] font-mono uppercase tracking-widest text-ink-300 dark:text-ivory-200">
              Recent invoices
            </div>
            <Bell className="h-3 w-3 text-ink-300 dark:text-ivory-200" />
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12 + i * 0.06, duration: 0.4 }}
              className={`flex items-center justify-between px-3 py-2 text-[11px] ${
                i < rows.length - 1 ? "border-b border-ink-500/6 dark:border-ivory-50/6" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`grid place-items-center h-5 w-5 rounded-full text-[9px] ${
                    r.paid
                      ? "bg-moss-600/15 text-moss-700 dark:text-moss-300"
                      : "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                  }`}
                >
                  {r.paid ? <CheckCircle2 className="h-3 w-3" /> : "!"}
                </span>
                <span className="text-ink-500 dark:text-ivory-100">{r.name}</span>
              </div>
              <div className="font-mono text-ink-400 dark:text-ivory-200">{r.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectMockup({ kind, accent = "#15803d" }) {
  if (kind === "clinic") return <ClinicMockup accent={accent} />;
  if (kind === "dashboard") return <DashboardMockup accent={accent} />;
  if (kind === "billing") return <BillingMockup accent={accent} />;
  return null;
}
