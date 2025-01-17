import Conoceme from "./Components/Conoceme";
import Contacto from "./Components/Contacto";
import Hero from "./Components/Hero";
import NewCV from "./Components/NewCV";
import NewGallery from "./Components/NewGallery";
import NewVideoBook from "./Components/NewVideoBook";
import VBook from "./Components/VBook";

export default function Home() {
  return (
    <main className="relative">
      <Hero wallpaper="/joss-portada.webp" alt="Josselyn Castro Garces" />
      <Conoceme />
      <NewCV />
      <NewGallery />
      <NewVideoBook />
      <Contacto />
    </main>
  );
}
