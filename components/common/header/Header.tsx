import { FC } from "react";
import { Paper, Text } from "@mantine/core";
import dynamic from "next/dynamic";

const LanguagePicker = dynamic(
  () => import("@/components/common/header/language/LanguagePicker"),
);
const Header: FC = () => {
  return (
    <Paper
      shadow="sm"
      display="flex"
      className="py-3 px-5 flex items-center justify-between h-full"
    >
      <div className="relative inline-flex">
        <Text
          component="div"
          size="40px"
          fw={700}
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 172 }}
        >
          MUSIC
        </Text>
        <span className="font-extrabold absolute top-[-5px] right-[-40px]">
          PRO
        </span>
      </div>
      <div>
        <div>
          <LanguagePicker />
        </div>
      </div>
    </Paper>
  );
};

export default Header;
