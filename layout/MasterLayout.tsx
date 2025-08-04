import { FC, ReactNode } from "react";
import dynamic from "next/dynamic";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  ScrollAreaAutosize,
} from "@toolsify/core";
const Header = dynamic(() => import("@/components/common/header/Header"));
const Sidebar = dynamic(() => import("@/components/common/sidebar/Sidebar"));
const PlayerWrapper = dynamic(
  () => import("@/components/player/PlayerWrapper"),
);

const MasterLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 90,
        breakpoint: "586px",
        collapsed: { mobile: true, desktop: false },
      }}
      footer={{ height: 70 }}
      padding={0}
      withBorder
    >
      <AppShellHeader zIndex={10}>
        <Header />
      </AppShellHeader>
      <AppShellNavbar zIndex={8}>
        <Sidebar />
      </AppShellNavbar>
      <AppShellMain>
        <ScrollAreaAutosize mah="calc(100vh - 130px)">
          <div className="p-5">{children}</div>
        </ScrollAreaAutosize>
      </AppShellMain>
      <AppShellFooter>
        <PlayerWrapper />
      </AppShellFooter>
    </AppShell>
  );
};

export default MasterLayout;
