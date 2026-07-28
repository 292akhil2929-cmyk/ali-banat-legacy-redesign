import type { Metadata } from "next";
import "./globals.css";
import "./cinematic.css";

export const metadata: Metadata = {
  title: "Ali Banat Legacy | A life that became a legacy",
  description: "A cinematic journey through Ali Banat's life, faith, humanitarian mission and the MATW legacy that continues.",
  icons: { icon: "/assets/favicon.svg", shortcut: "/assets/favicon.svg" },
  openGraph: { title: "Ali Banat Legacy | A legacy that continues", description: "One man chose lasting impact. Continue the mission Ali began through MATW Project." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
