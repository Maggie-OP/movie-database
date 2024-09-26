import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

import MainHeader from "@/components/main-header";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movie Database",
  description: "Some description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.className} antialiased`}>
        <div className="flex flex-col min-h-screen overflow-x-hidden overflow-y-auto">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
