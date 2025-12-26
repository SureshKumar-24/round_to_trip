import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Base URL for the website - update this with your production domain
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aalishaanglobalbposervices.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1E73BE",
};

export const metadata: Metadata = {
  // Base metadata
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aalishaan Global BPO Services | Customer Support Outsourcing",
    template: "%s | Aalishaan Global BPO Services",
  },
  description:
    "Professional customer support outsourcing for UK, US & European businesses. Email, chat, and travel booking support with English and German language capabilities. Start with a pilot program today.",
  keywords: [
    "BPO services",
    "customer support outsourcing",
    "email support",
    "live chat support",
    "travel booking support",
    "ticket management",
    "UK customer support",
    "US customer support",
    "European customer support",
    "German language support",
    "Goethe B2 German",
    "customer experience",
    "CX outsourcing",
    "travel tech support",
    "SaaS customer support",
    "India BPO",
    "global customer service",
    "Aalishaan Global",
  ],
  authors: [{ name: "Aalishaan Global BPO Services" }],
  creator: "Aalishaan Global BPO Services",
  publisher: "Aalishaan Global BPO Services",

  // Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Aalishaan Global BPO Services",
    title: "Aalishaan Global BPO Services | Customer Support Outsourcing",
    description:
      "Professional customer support outsourcing for UK, US & European businesses. Email, chat, and travel booking support with English and German language capabilities.",
    images: [
      {
        url: "/round_logo.png",
        width: 1200,
        height: 630,
        alt: "Aalishaan Global BPO Services - Customer Support Outsourcing",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Aalishaan Global BPO Services | Customer Support Outsourcing",
    description:
      "Professional customer support outsourcing for UK, US & European businesses. Email, chat, and travel booking support.",
    images: ["/round_logo.png"],
    creator: "@aalishaanglobal",
  },

  // Additional metadata
  category: "Business Services",
  classification: "Business Process Outsourcing",

  // Alternate languages (if applicable)
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "en-GB": siteUrl,
      "de-DE": `${siteUrl}/german-services`,
    },
  },

  // App links
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "business:contact_data:country_name": "India",
    "business:contact_data:email": "info@aalishaanglobalbposervices.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
