export const site = {
  name: "Shirin Keshmirinejad",
  brand: "Arctor",
  role: "Architect & Interior Designer",
  email: "sh.kshmirinejad@gmail.com",
  phone: "+39 375 538 0275",
  phoneHref: "+393755380275",
  city: "Genoa",
  country: "Italy",
  coords: "44°24′N 8°56′E",
  cv: "/shirin-keshmirinejad-cv.pdf",
  portfolio: "/shirin-keshmirinejad-portfolio.pdf",
  years: { start: 2010, latest: 2025 },
} as const;

export const softwareTools = ["AutoCAD", "Revit", "Rhinoceros", "Photoshop", "V-Ray", "InDesign"] as const;

export const languages = [
  { name: "Persian", level: "Native", code: "fa" },
  { name: "English", level: "Fluent", code: "en" },
  { name: "Arabic", level: "Advanced", code: "ar" },
  { name: "Italian", level: "Intermediate", code: "it" },
] as const;

/** Luxury Italian houses she specified and sold at CasaViore, Tehran. */
export const brands = [
  "Poliform",
  "Baxter",
  "Antonio Lupi",
  "Paolo Castelli",
  "Varenna",
] as const;
