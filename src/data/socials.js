import {
  YoutubeIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  WhatsappIcon,
} from "../components/common/BrandIcons";
import { CONTACT, whatsappUrl, mailtoUrl } from "./contact";

// Replace placeholder URLs with your real profiles.
export const SOCIALS = [
  {
    id: "youtube",
    name: "YouTube",
    handle: "@josamcode",
    icon: YoutubeIcon,
    href: "https://youtube.com/@josam_code",
    accent: "#dc2626",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@josamcode",
    icon: InstagramIcon,
    href: "https://instagram.com/josamcode",
    accent: "#db2777",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "/in/gerges-samuel",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/gerges-samuel",
    accent: "#0a66c2",
  },
  {
    id: "github",
    name: "GitHub",
    handle: "@josamcode",
    icon: GithubIcon,
    href: "https://github.com/josamcode",
    accent: "#111111",
  },
  {
    id: "email",
    name: "Email",
    handle: CONTACT.email,
    icon: MailIcon,
    href: mailtoUrl(),
    accent: "#b45309",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    handle: "Direct chat",
    icon: WhatsappIcon,
    href: whatsappUrl(),
    accent: "#15803d",
  },
];
