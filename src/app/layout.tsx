import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-gaming" });

export const metadata: Metadata = {
  title: "GameVortex - Gaming Channel",
  description: "Welcome to GameVortex - Your ultimate destination for gaming content, reviews, and epic gameplay moments!",
  keywords: "gaming, youtube, video games, gameplay, reviews, streaming",
  authors: [{ name: "GameVortex" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f0f23" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 font-sans antialiased",
          inter.variable,
          orbitron.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}