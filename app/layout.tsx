import "@/app/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { ColorSchemeScript } from "@mantine/core";
import { Montserrat } from "next/font/google";
import ThemeProvider from "@/providers/ThemeProvider";

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
export { mode };
