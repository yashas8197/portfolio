import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yashas | Product First Engineer",
  description:
    "Product First engineer specializing in backend systems, financial infrastructure, and scalable applications.",
  keywords: [
    "product engineer",
    "backend engineer",
    "full stack developer",
    "system design",
    "financial systems",
  ],
  openGraph: {
    title: "Yashas | Product First Engineer",
    description:
      "Product First engineer specializing in backend systems, financial infrastructure, and scalable applications.",
    type: "website",
    siteName: "Yashas Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased selection:bg-blue-100`}>
        {children}
      </body>
    </html>
  );
}
