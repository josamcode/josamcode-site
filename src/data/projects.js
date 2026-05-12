import {
  Stethoscope,
  LineChart,
  FileText,
  Phone,
  Calendar,
  HeartPulse,
  TrendingUp,
  Users,
  Receipt,
  Wallet,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

// Project metadata. Translatable content lives in /i18n/locales/*.json under projects.items.<id>
// Replace mockupSrc later with your real screenshots placed in /src/assets/projects/.
export const PROJECTS = [
  {
    id: "clinic",
    icon: Stethoscope,
    accent: "#0d9488",
    mockup: {
      kind: "clinic",
      bullets: [
        { icon: Calendar, key: "Booking" },
        { icon: HeartPulse, key: "Care" },
        { icon: Phone, key: "Contact" },
      ],
    },
  },
  {
    id: "dashboard",
    icon: LineChart,
    accent: "#15803d",
    mockup: {
      kind: "dashboard",
      bullets: [
        { icon: TrendingUp, key: "Revenue" },
        { icon: Users, key: "Customers" },
        { icon: BarChart3, key: "Trends" },
      ],
    },
  },
  {
    id: "billing",
    icon: FileText,
    accent: "#b45309",
    mockup: {
      kind: "billing",
      bullets: [
        { icon: Receipt, key: "Invoices" },
        { icon: Wallet, key: "Payments" },
        { icon: ClipboardCheck, key: "Tracking" },
      ],
    },
  },
];
