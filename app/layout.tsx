import "@/app/globals.css";
import "@toolsify/core/styles.layer.css";
import "@toolsify/carousel/styles.layer.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { ColorSchemeScript } from "@toolsify/core";
import { Montserrat } from "next/font/google";
import BaseThemeProvider from "@/providers/ThemeProvider";

const baseFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-base",
  display: "swap",
  preload: true,
  weight: ["400", "600", "700"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "MusicPro - Made by r3dm4st3r",
};

const mode = "dark";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={baseFont.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ColorSchemeScript defaultColorScheme={mode} />
      </head>
      <body>
        <BaseThemeProvider>{children}</BaseThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
export { mode };
