import { FC } from "react";
import { Paper } from "@mantine/core";
import dynamic from "next/dynamic";
import Logo from "@/components/common/logo/Logo";

const LanguagePicker = dynamic(
  () => import("@/components/common/header/language/LanguagePicker"),
);
const MobMenu = dynamic(() => import("@/components/common/header/MobMenu"));
const Header: FC = () => {
  return (
    <Paper
      shadow="sm"
      display="flex"
      className="py-3 px-5 flex items-center justify-between h-full"
    >
      <Logo />
      <div>
        <div className="flex items-center justify-end gap-2">
          <LanguagePicker />
          <MobMenu />
        </div>
      </div>
    </Paper>
  );
};

export default Header;
