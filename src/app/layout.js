import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FontAwesomeConfig from "../../fontawesome";

const inter = Lora({ subsets: ["latin"] });
const { className } = inter;

export const metadata = {
  title: "Josselyn Castro - Actriz profesional en Valencia",
  description:
    "Actriz profesional en Valencia. Formación y experiencia en teatro, audiovisuales y publicidad. ¡Descubre mi trabajo!",
  keywords: [
    "Actriz en Valencia",
    "Actriz profesional",
    "Actuación teatral",
    "Casting para actriz",
    "Interpretación ante la cámara",
    "Creación de personajes",
    "Publicidad y videoclips",
    "Actriz para audiovisuales",
    "Teatro y audiovisuales",
    "Actriz española",
  ],
  openGraph: {
    images: "https://www.josselyncastro.com/joss-og.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="es">
      <head>
        <FontAwesomeConfig />
      </head>
      <body className={className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
