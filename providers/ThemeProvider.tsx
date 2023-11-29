import { FC, ReactNode } from "react";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/theme";
import { mode } from "@/app/layout";
import dynamic from "next/dynamic";
import PlayerProvider from "@/providers/PlayerProvider";

const MasterLayout = dynamic(() => import("@/layout/MasterLayout"));

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MantineProvider
      defaultColorScheme={mode}
      forceColorScheme={mode}
      classNamesPrefix="r3dm4st3r"
      theme={theme}
      withCssVariables
    >
      <PlayerProvider>
        <MasterLayout>{children}</MasterLayout>
      </PlayerProvider>
    </MantineProvider>
  );
};

export default ThemeProvider;
