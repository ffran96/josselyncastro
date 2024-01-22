import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

const inter = Lora({ subsets: ["latin"] });

export const metadata = {
  title: "Josselyn Castro - Actriz",
  description: "Josselyn Castro - Actriz",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="es">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
