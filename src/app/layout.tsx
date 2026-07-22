import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VisaDesk - Your Passport to Global Opportunities",
  description:
    "AI-Powered Visa Consultancy. Helping students, professionals, families, and businesses obtain visas with AI-powered document verification and expert immigration guidance.",
  keywords:
    "visa consultancy, immigration, passport, AI visa, global opportunities, student visa, work visa, tourist visa",
  openGraph: {
    title: "VisaDesk - Your Passport to Global Opportunities",
    description:
      "AI-Powered Visa Consultancy helping you navigate immigration with ease.",
    type: "website",
  },
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
