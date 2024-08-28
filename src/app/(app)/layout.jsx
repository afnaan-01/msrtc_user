import { Inter } from "next/font/google";
 import { Toaster } from "@/components/ui/toaster";
import NaveBar from "@/components/NaveBar";
import NavBar from "@/components/NaveBar";
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <div className={inter.className}>
        <main>
            <div><NavBar/></div>
            {children}</main>
        <Toaster />
        </div>
  );
}
