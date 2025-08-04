"use client";
import { FC, ReactNode } from "react";
import { FaTableList } from "@toolsify/icons/fa6";
import { ActionIcon, Drawer, ScrollAreaAutosize } from "@toolsify/core";
import { useDisclosure } from "@mantine/hooks";
import { useAudioPlayer } from "react-use-audio-player";

const AudioPlayList: FC<{ children: ReactNode }> = ({ children }) => {
  const { isReady } = useAudioPlayer();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <ActionIcon
        onClick={open}
        disabled={!isReady}
        variant="subtle"
        w={40}
        h={40}
      >
        <FaTableList />
      </ActionIcon>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size={550}
        scrollAreaComponent={ScrollAreaAutosize}
        title={
          <div className="flex items-center gap-2">
            <span>
              <FaTableList />
            </span>{" "}
            <span>Upcoming Playlist</span>
          </div>
        }
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        styles={{
          header: { boxShadow: "var(--mantine-shadow-md)" },
          title: { fontWeight: "bold" },
          inner: { padding: 0 },
          body: { padding: 0 },
        }}
      >
        {children}
      </Drawer>
    </div>
  );
};

export default AudioPlayList;
