import type { Metadata } from "next";
import "./globals.css";
import "./cinematic.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ali-banat-legacy-timeline-experimen.vercel.app"),
  title: "Ali Banat Legacy | A life that became a legacy",
  description: "A cinematic journey through Ali Banat's life, faith, humanitarian mission and the MATW legacy that continues.",
  alternates: { canonical: "/" },
  icons: { icon: "/assets/favicon.svg", shortcut: "/assets/favicon.svg" },
  openGraph: {
    title: "Ali Banat Legacy | A legacy that continues",
    description: "One man chose lasting impact. Continue the mission Ali began through MATW Project.",
    type: "website",
    url: "/",
    siteName: "Ali Banat Legacy",
    images: [{ url: "/assets/hero-ali-children.jpg", width: 648, height: 366, alt: "Ali Banat with children during his humanitarian work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Banat Legacy | A legacy that continues",
    description: "One man chose lasting impact. Continue the mission Ali began through MATW Project.",
    images: ["/assets/hero-ali-children.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
