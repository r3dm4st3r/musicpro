import { ReactNode } from "react";
import {
  IconAlbum,
  IconBrandGoogleHome,
  IconPlaylist,
  IconUserBolt,
} from "@tabler/icons-react";
import { Button, Text, Tooltip } from "@mantine/core";
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
    icon: <IconBrandGoogleHome stroke={1.5} size={25} />,
  },
  {
    name: "Albums",
    path: "/album",
    icon: <IconAlbum stroke={1.5} size={25} />,
  },
  {
    name: "Playlists",
    path: "/playlist",
    icon: <IconPlaylist stroke={1.5} size={25} />,
  },
  {
    name: "Artists",
    path: "/artist",
    icon: <IconUserBolt stroke={1.5} size={25} />,
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
