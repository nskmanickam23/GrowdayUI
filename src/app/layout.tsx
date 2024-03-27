import type { Metadata } from "next";
import ReduxProvider from "@/ReduxStore/ReduxProvider";
import { NextThemesProvider } from "../utils/Themes/ThemesProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Growday - Nurture to lead",
  description: "Nurture to lead",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="font-sans">
          <NextThemesProvider>{children}</NextThemesProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
