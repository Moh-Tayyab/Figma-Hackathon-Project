import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/app/context/CartContext";
<<<<<<< HEAD

=======
>>>>>>> 745cd7210b4f13dcde6f3eb6c0b3a3e0dd6c9451

// Google Fonts configuration
const inter = Inter({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Furniro",
  description: "Furniro: A cutting-edge eCommerce platform developed using Next.js, React, and TypeScript.",
  icons:{
    icon:['/logo1.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${inter.className} bg-primary1 max-w-7xl container mx-auto`} // Added correct font classes
      >
        <CartProvider>
          <Header />
          <div> {children} </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
