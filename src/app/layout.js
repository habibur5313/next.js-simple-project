import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { AuthProvider } from "@/Provider/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blogger.com || Home",
  description: "Blogger.com || Home",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" data-theme='light'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <div className="container mx-auto ">
        <Navbar></Navbar>
       <div className="min-h-[calc(100vh-455px)] mt-5">
       {children}
       </div>
       </div>
       <Footer></Footer>
      </body>
    </html>
    </AuthProvider>
  );
}
