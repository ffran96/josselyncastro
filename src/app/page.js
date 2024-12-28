import CV from "./Components/CV";
import Conoceme from "./Components/Conoceme";
import Contacto from "./Components/Contacto";
import Hero from "./Components/Hero";
import NewGallery from "./Components/NewGallery";
import VBook from "./Components/VBook";

export default function Home() {
  return (
    <main className="relative">
      <Hero wallpaper="/joss-portada.webp" alt="Josselyn Castro Garces" />
      <Conoceme />
      <CV />
      <NewGallery />
      <VBook />
      <Contacto />
    </main>
  );
}
