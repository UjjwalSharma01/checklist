import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./globals.css";

export const metadata = {
  title: "The Checklist",
  description: "A modern, minimalistic, and gradient-rich website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
