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
  color: string;
  icon: ReactNode;
}
export const menus: IMenu[] = [
  {
    name: "Home",
    path: "/",
    color: "indigo",
    icon: <IconBrandGoogleHome stroke={1.5} size={40} />,
  },
  {
    name: "Albums",
    path: "/album",
    color: "orange",
    icon: <IconAlbum stroke={1.5} size={40} />,
  },
  {
    name: "Playlists",
    path: "/playlist",
    color: "pink",
    icon: <IconPlaylist stroke={1.5} size={40} />,
  },
  {
    name: "Artists",
    path: "/artist",
    color: "teal",
    icon: <IconUserBolt stroke={1.5} size={40} />,
  },
];

const SidebarItems = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {menus.map((menu) => {
        return (
          <Tooltip
            label={
              <Text fw="bold" c="white">
                {menu.name}
              </Text>
            }
            key={menu.name}
            position="right"
            withArrow
            arrowSize={12}
            color={menu.color}
            transitionProps={{ transition: "pop", duration: 200 }}
          >
            <Button
              fullWidth
              component={Link}
              href={menu.path}
              variant="subtle"
              bg={`${menu.color}.7`}
              c="white"
              w={60}
              h={55}
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
