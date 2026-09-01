export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export function asset(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export const EMAIL = "anatolymazo@gmail.com";
export const CONSULT_SUBJECT = "Compliance consultation request";
export const LINKEDIN_URL = "https://www.linkedin.com/in/anatoly-mazo-9949a85";
export const SITE_NAME = "Anatoly Mazo";
export const SITE_TITLE =
  "Anatoly Mazo — Institutional Compliance Consulting";
export const SITE_DESCRIPTION =
  "Senior-level compliance consulting forged at Wells Fargo. Boutique, executive-level advisory for private funds, wealth managers, family offices, and high-growth investment companies.";

export const PAY_URL = "https://buy.stripe.com/aFadR91w7d3t4YoeJZ7EQ01";
export const consultMailto = `mailto:${EMAIL}?subject=${encodeURIComponent(CONSULT_SUBJECT)}`;

export const SECTOR_OPTIONS = [
  "3c1 Private Funds",
  "Wealth Management & Family Offices",
  "High-Growth Investment Companies",
  "Other",
] as const;

export type SectorOption = (typeof SECTOR_OPTIONS)[number];

export const NAV_LINKS = [
  { href: "/#expertise", hash: "#expertise", label: "Expertise" },
  { href: "/#sectors", hash: "#sectors", label: "Sectors" },
  { href: "/#approach", hash: "#approach", label: "Approach" },
  { href: "/#services", hash: "#services", label: "Services" },
  { href: "/#contact", hash: "#contact", label: "Contact" },
  { href: "/#pay", hash: "#pay", label: "Pay" },
] as const;

export function buildConsultMailto(fields: {
  name: string;
  firm: string;
  email: string;
  phone?: string;
  sector: string;
  message: string;
}): string {
  const body = [
    `Name: ${fields.name}`,
    `Firm: ${fields.firm}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone?.trim() ? fields.phone.trim() : "Not provided"}`,
    `Sector: ${fields.sector}`,
    "",
    "Message:",
    fields.message.trim(),
  ].join("\n");

  return `mailto:${EMAIL}?subject=${encodeURIComponent(CONSULT_SUBJECT)}&body=${encodeURIComponent(body)}`;
}
