import { ReactNode } from "react";
import {
  TbAlbum,
TbBrandGoogle,
  TbList,
  TbBolt,
} from "@toolsify/icons/tb";
import { Button, Text, Tooltip } from "@toolsify/core";
import Link from "next/link";

interface IMenu {
  name: string;
  path: string;
  icon: ReactNode;
}
export const menus: IMenu[] = [
  {
    name: "Home",
    path: "/",
    icon: <TbBrandGoogle size={25} />,
  },
  {
    name: "Albums",
    path: "/album",
    icon: <TbAlbum size={25} />,
  },
  {
    name: "Playlists",
    path: "/playlist",
    icon: <TbList size={25} />,
  },
  {
    name: "Artists",
    path: "/artist",
    icon: <TbBolt size={25} />,
  },
];

const SidebarItems = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {menus.map((menu) => {
        return (
          <Tooltip
            label={<Text fw="bold">{menu.name}</Text>}
            key={menu.name}
            position="right"
            withArrow
            arrowSize={11}
            transitionProps={{ transition: "pop", duration: 200 }}
          >
            <Button
              fullWidth
              component={Link}
              href={menu.path}
              variant="default"
              w={50}
              h={45}
              size="compact-lg"
              key={menu.name}
            >
              {menu.icon}
            </Button>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default SidebarItems;
