import CV from "./Components/CV";
import Conoceme from "./Components/Conoceme";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import VBook from "./Components/VBook";
import GalleryImages from "./data/images";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Conoceme />
      <CV />
      <Gallery galleryID="gallery" images={GalleryImages} />
      <VBook />
      <Contacto />
    </main>
  );
}
