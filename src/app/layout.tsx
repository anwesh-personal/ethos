import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Term4Sale.com — Lead Generation Anatomy | Deep Visual Analysis",
  description:
    "An interactive, animated breakdown of how Term4Sale.com generates massive organic insurance leads through utility-first design, trust architecture, and ecosystem strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
