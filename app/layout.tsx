import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

import StyledComponentsRegistry from "./lib/registry";
import MainHeader from "/components/main-header";
import Footer from "/components/footer";

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
        <StyledComponentsRegistry>
          <MainHeader />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
