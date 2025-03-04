import localFont from "next/font/local";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "FrithCode Technologies",
  description: "FrithCode offers innovative web development solutions tailored to your business needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main className="min-h-[calc(100vh-160px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}