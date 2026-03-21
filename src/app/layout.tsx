import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import JsReady from "@/components/JsReady";

export const metadata: Metadata = {
  title: "CAIMAN.LAB",
  description: "Design, Work, Intel & Explore",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsReady />
        <Nav />
        {children}
      </body>
    </html>
  );
}
