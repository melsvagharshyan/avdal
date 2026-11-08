import { About } from "./components/About";
import { Footer, MobileCallBar } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LanguageProvider } from "./components/LanguageProvider";
import { Menu } from "./components/Menu";
import { Visit } from "./components/Visit";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Avdal · Ավդալ",
  servesCuisine: ["Armenian", "Georgian"],
  telephone: "+37494007752",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nalbandyan 26",
    addressCountry: "AM",
  },
  openingHours: "Mo-Su 10:00-22:00",
  sameAs: ["https://www.instagram.com/sevanxinkali/"],
  priceRange: "֏",
};

export default function Home() {
  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <div className="ornament-band" />
        <Menu />
        <About />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <MobileCallBar />
    </LanguageProvider>
  );
}
