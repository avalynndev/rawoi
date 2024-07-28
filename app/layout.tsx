import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavbarContainer from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen overflow-y-scroll dark text-foreground bg-background">
        <NextUIProvider>
          <NavbarContainer />
          {children}
        </NextUIProvider>
        </div>
      </body>
    </html>
  );
}
