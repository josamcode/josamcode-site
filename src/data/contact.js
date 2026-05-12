// Replace these placeholder values with your real contact details.
// All CTAs and social links throughout the site read from this single file.

export const CONTACT = {
  email: "hello@josamcode.com",
  whatsapp: "+201204770940",
  whatsappMessage: {
    en: "Hi Jo Sam, I'd like to tell you about my project.",
    ar: "أهلًا جو سام، حابب أحكيلك عن مشروعي.",
  },
  location: "Remote · MENA",
};

export const whatsappUrl = (lang = "en") => {
  const phone = CONTACT.whatsapp.replace(/[^0-9]/g, "");
  const text = encodeURIComponent(
    CONTACT.whatsappMessage[lang] || CONTACT.whatsappMessage.en
  );
  return `https://wa.me/${phone}?text=${text}`;
};

export const mailtoUrl = (lang = "en") => {
  const subject = encodeURIComponent(
    lang === "ar" ? "تعاون جديد" : "New project inquiry"
  );
  return `mailto:${CONTACT.email}?subject=${subject}`;
};
