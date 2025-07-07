import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baikary",
  description: "Baikary is a platform for creating and managing your website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
