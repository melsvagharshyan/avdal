import type { Metadata, Viewport } from "next";
import {
  Manrope,
  Noto_Sans_Armenian,
  Noto_Serif_Armenian,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

const serifHy = Noto_Serif_Armenian({
  variable: "--font-serif-hy",
  subsets: ["armenian"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const sansHy = Noto_Sans_Armenian({
  variable: "--font-sans-hy",
  subsets: ["armenian"],
});

export const metadata: Metadata = {
  title: "Ավդալ · Avdal — Խինկալի և Լահմաջո",
  description:
    "Ավդալ — ձեռքով պատրաստված խինկալի և թարմ լահմաջո։ Նալբանդյան 26շ., Գազի գրասենյակի դիմաց։ Առաքում՝ 094 00 77 52։ Avdal — handmade khinkali & lahmajo, delivery available.",
  keywords: [
    "Ավդալ",
    "Avdal",
    "խինկալի",
    "լահմաջո",
    "khinkali",
    "lahmajo",
    "хинкали",
    "ламаджо",
    "Sevan",
  ],
  openGraph: {
    title: "Ավդալ · Avdal — Արհեստը սերունդներին",
    description: "Handmade khinkali & fresh lahmajo. Delivery: 094 00 77 52",
    images: ["/images/logo.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0c0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hy"
      className={`${playfair.variable} ${serifHy.variable} ${manrope.variable} ${sansHy.variable} antialiased`}
    >
      <body className="min-h-full bg-ink text-cream">{children}</body>
    </html>
  );
}
