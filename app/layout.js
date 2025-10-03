import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// Google Font: Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // include only what you use
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Zogiraa",
  description: "Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
