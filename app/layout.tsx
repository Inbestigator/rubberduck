import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Rubberduck",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-sans", inter.variable)}>
        <Providers>
          <main className="flex min-h-dvh w-dvw items-center justify-center overflow-hidden p-4">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
