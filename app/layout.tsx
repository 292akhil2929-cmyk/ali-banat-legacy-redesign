import type { Metadata } from "next";
import "./globals.css";
import "./overrides.css";

export const metadata: Metadata = {
  title: "Ali Banat Legacy | A legacy that continues",
  description: "Discover Ali Banat's story and continue the MATW mission through water, orphan care, food and humanitarian relief.",
  icons: { icon: "/assets/favicon.svg", shortcut: "/assets/favicon.svg" },
  openGraph: { title: "Ali Banat Legacy | A legacy that continues", description: "One man chose lasting impact. Continue the mission Ali began through MATW Project." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
