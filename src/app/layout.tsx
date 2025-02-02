import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ClerkProvider,
} from '@clerk/nextjs'

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
  description: "Furniro: A cutting-edge eCommerce platform...",
  icons: {
    icon: [
      { url: "/logo1.png", sizes: "16x16" },
      { url: "/logo1.png", sizes: "32x32" },
      { url: "/logo1.png", sizes: "96x96" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${poppins.className} ${inter.className} bg-primary1 max-w-7xl container mx-auto`} // Added correct font classes
      >
          <Header />
          <div> {children} </div>
          <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
