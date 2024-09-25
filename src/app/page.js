import HomeWelcome from "./home/components/HomeWelcome"
import CubeContainer from "./home/components/CubeContainer";
import ColorApplier from './home/components/ColorApplier';
import { ColorProvider } from './home/components/ColorContext';
import CustomCursor from '@/components/CustomCursor';
import Customers from "./home/components/Customers";
import Services from "./home/components/Services";
import Solutions from "./home/components/Solutions";
import Skills from "./home/components/Skills";
import Divider from "./home/components/Divider";
import ContactDallas from "./home/components/ContactDallas";
import Footer from "@/components/Footer";
import Header from '@/components/Header';

export const metadata = {
  title: 'Dallas Tek - Hjem',
  description: "Dallas Tek - Din løsning for bedrift konsultering, utvikling, design, og digital tansformering i Bergen.",
  keywords: "Dallas Tek, Dallas tech, IT-løsninger, IT-konsultasjon, IT-tjenester, Webutvikling, Programvareutvikling, Apputvikling, Teknologirådgivning, IT-støtte, digitalisering, webutvikling, web-design, bedriftkonsultasjon, utvikling, design, digital transformasjon, IT-løsninger Bergen, Webutvikling Bergen, IT-konsulent Bergen, Programvareutvikling Norge, Digitalisering Bergen, IT-tjenester i nærheten, Webdesign Bergen, IT-rådgivning Norge, IT-støtte Bergen, Apputvikling Bergen, E-handelsløsninger, Nettside redesign, SEO-tjenester Bergen, Hosting-løsninger, UX/UI design, Tilpassede programvareløsninger, Skybaserte løsninger, Databaseadministrasjon, API-integrasjon, Teknologisk innovasjon, Bedriftsløsninger, Digitale verktøy, IT-sikkerhet, Datamigrering, Skalerbare løsninger, IT-prosjektledelse, Nettbutikk utvikling, Mobilapp utvikling, Kontinuerlig integrasjon og levering"
};

export default function Home() {

  return (
    <ColorProvider>
    <ColorApplier />
    <div className={`App`}>
      <main className={`Primary`}>
        <HomeWelcome />
        <CubeContainer />
        <Customers />
        <Services />
        <Solutions />
        <div className="Gradient">
          <Skills />
          <Divider />
          <ContactDallas />
        </div>
        <Footer />
      </main>
    </div>
    <CustomCursor />
    </ColorProvider>
  );
}
