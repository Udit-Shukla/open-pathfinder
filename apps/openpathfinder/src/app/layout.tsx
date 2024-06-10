import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenPathFinder | Application",
  description: "Navigate Your Coding Journey: Explore Open Source Projects by Tech Stack, Connect, and Collaborate with New Developers on Open Path Finder.",
  icons: {
    icon: "/logos/opf-wbg.png "
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
