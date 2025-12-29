import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* 🔴 BCI Disclaimer Popup */}
        <DisclaimerModal />

        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
