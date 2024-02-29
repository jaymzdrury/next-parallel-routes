import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parallel Routes",
  description: "Intro to parallel routes",
  icons: {
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({
  children,
  data,
}: Readonly<{
  children: React.ReactNode;
  data: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {data}
      </body>
    </html>
  );
}
