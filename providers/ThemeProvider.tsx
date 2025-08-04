import { FC, ReactNode } from "react";
import {ThemeProvider} from "@toolsify/core/providers";
import dynamic from "next/dynamic";
import PlayerProvider from "@/providers/PlayerProvider";

const MasterLayout = dynamic(() => import("@/layout/MasterLayout"));

const BaseThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <PlayerProvider>
        <MasterLayout>{children}</MasterLayout>
      </PlayerProvider>
    </ThemeProvider>
  );
};

export default BaseThemeProvider;
