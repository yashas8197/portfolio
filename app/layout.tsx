import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Script from "next/script";

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
      <body
        className={`${inter.className} antialiased selection:bg-blue-100 dark:selection:bg-blue-900/50`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S9KQKRJMGV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-S9KQKRJMGV');
  `}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
