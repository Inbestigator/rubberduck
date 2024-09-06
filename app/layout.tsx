import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Rubberduck",
  description:
    "Have a conversation with this nice duck to help work out a solution to your problem.",
  openGraph: {
    title: "Rubberduck",
    description:
      "Have a conversation with this nice duck to help work out a solution to your problem.",
    images: [
      {
        url: "https://rubberduck.dev/image.jpg",
        width: 1280,
        height: 720,
      },
    ],
    locale: "en-US",
    type: "website",
  },
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
