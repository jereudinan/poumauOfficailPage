import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poumau Web",
  description: "Official Corporate Homepage for Poumau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
