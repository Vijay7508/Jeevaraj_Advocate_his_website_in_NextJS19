import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 ${playfair.variable}`}>
        {/* 🔴 BCI Disclaimer Popup */}
        <DisclaimerModal />

        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
