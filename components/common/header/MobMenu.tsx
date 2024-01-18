"use client";
import React from "react";
import { Button, Drawer, Text } from "@mantine/core";
import { IconMenuDeep } from "@tabler/icons-react";
import {
  useDisclosure,
  useIsomorphicEffect,
  useMediaQuery,
} from "@mantine/hooks";
import { menus } from "@/components/common/sidebar/SidebarItems";
import Link from "next/link";
import Logo from "@/components/common/logo/Logo";
import { usePathname } from "next/navigation";

const MobMenu = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 585px)");
  const pathname = usePathname();
  useIsomorphicEffect(() => {
    if (pathname && opened) {
      close();
    }
  }, [pathname]);

  if (!isMobile) return null;
  return (
    <>
      <Button h={42} variant="light" onClick={open}>
        <IconMenuDeep stroke={1.5} />
      </Button>
      <Drawer
        opened={opened}
        onClose={close}
        title={<Logo />}
        styles={{
          header: {
            boxShadow: "var(--mantine-shadow-sm)",
            borderBottom: "1px solid var(--mantine-color-default)",
          },
          body: {
            padding: "var(--mantine-spacing-lg)",
          },
        }}
      >
        <div className="grid grid-cols-2 gap-2">
          {menus.map((menu, i) => {
            return (
              <Button
                w="100%"
                h="100%"
                size="xl"
                component={Link}
                key={i}
                href={menu.path}
              >
                <div className="p-4">
                  {menu.icon}
                  <Text>{menu.name}</Text>
                </div>
              </Button>
            );
          })}
        </div>
      </Drawer>
    </>
  );
};

export default MobMenu;
