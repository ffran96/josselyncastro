import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FontAwesomeConfig from "../../fontawesome";

const inter = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Josselyn Castro - Actriz profesional en Valencia",
  description:
    "Actriz profesional en Valencia. Formación y experiencia en teatro, audiovisuales y publicidad. ¡Descubre mi trabajo!😊",
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
    images:
      "https://www.josselyncastro.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoss-portada.8a87a388.webp&w=3840&q=100",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="es">
      <head>
        <FontAwesomeConfig />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
