import localFont from "next/font/local";
import "./globals.css";
import StartOverlay from "@/components/StartOverlay";
import Header from '@/components/Header';
import { LocalBusiness, WithContext } from 'schema-dts';

export const metadata = {
  title: "Dallas Tek - Løsningen for din bedrift",
  description: "Dallas Tek - Din løsning for bedrift konsultering, utvikling, design, og digital tansformering i Bergen.",
  keywords: "Dallas Tek, Dallas tech, IT-løsninger, IT-konsultasjon, IT-tjenester, Webutvikling, Programvareutvikling, Apputvikling, Teknologirådgivning, IT-støtte, digitalisering, webutvikling, web-design, bedriftkonsultasjon, utvikling, design, digital transformasjon, IT-løsninger Bergen, Webutvikling Bergen, IT-konsulent Bergen, Programvareutvikling Norge, Digitalisering Bergen, IT-tjenester i nærheten, Webdesign Bergen, IT-rådgivning Norge, IT-støtte Bergen, Apputvikling Bergen, E-handelsløsninger, Nettside redesign, SEO-tjenester Bergen, Hosting-løsninger, UX/UI design, Tilpassede programvareløsninger, Skybaserte løsninger, Databaseadministrasjon, API-integrasjon, Teknologisk innovasjon, Bedriftsløsninger, Digitale verktøy, IT-sikkerhet, Datamigrering, Skalerbare løsninger, IT-prosjektledelse, Nettbutikk utvikling, Mobilapp utvikling, Kontinuerlig integrasjon og levering"
};

const jsonLd = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "Dallas Tek",
    url: "https://www.dallastek.no/",
    logo: "https://www.dallastek.no/favicon.ico",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bergen",
      addressRegion: "Vestland",
      postalCode: "5003",
      addressCountry: "NO"
    },
    telephone: "+47-900-68-775",
    url: "https://www.dallastek.no",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "60.39299",
      longitude: "5.32415"
    },
    sameAs: [
      "https://www.linkedin.com/company/dallas-tek-l%C3%B8sninger/"
    ]
};

<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StartOverlay />
        <Header />
        {children}
      </body>
    </html>
  );
}
