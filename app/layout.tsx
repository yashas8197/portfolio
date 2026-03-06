import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-blue-100 dark:selection:bg-blue-900/50`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
