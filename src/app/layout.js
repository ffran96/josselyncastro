import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FontAwesomeConfig from "../../fontawesome";

const inter = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Josselyn Castro - Actriz",
  description: "Josselyn Castro - Actriz",
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
