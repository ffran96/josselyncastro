import Hero from "./Components/Hero";
import Conoceme from "./Components/Conoceme";
import NewCV from "./Components/NewCV";
import NewGallery from "./Components/NewGallery";
import NewVideoBook from "./Components/NewVideoBook";
import Contacto from "./Components/Contacto";

export default function Home() {
  return (
    <main className="relative">
      <Hero wallpaper="/joss-portada.webp" alt="Josselyn Castro Garces" />
      <Conoceme />
      <NewGallery />
      <NewVideoBook />
      <NewCV />
{/*       <Contacto />
 */}    </main>
  );
}
