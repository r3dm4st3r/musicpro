"use client";
import { FC, ReactNode } from "react";
import { IconPlaylist } from "@tabler/icons-react";
import { ActionIcon, Drawer, ScrollAreaAutosize } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const AudioPlayList: FC<{ children: ReactNode }> = ({ children }) => {
  const { isReady } = useGlobalAudioPlayer();
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
        <IconPlaylist stroke={1.5} />
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
              <IconPlaylist stroke={1.5} />
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
