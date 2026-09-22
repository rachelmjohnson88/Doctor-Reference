import type { Metadata } from "next";
import { PT_Serif, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const body = PT_Serif({
  variable: "--font-body",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RefDoc — clinical reference",
  description: "A quick-reference site for doctors: scoring systems, protocols, and classifications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-(--color-page) text-(--color-ink)">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
