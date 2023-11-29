"use client";
import { Button, Modal } from "@mantine/core";
import { IconHeartbeat, IconSquareRoundedX } from "@tabler/icons-react";
import { FC, ReactNode } from "react";
import { useDisclosure } from "@mantine/hooks";

const Author: FC<{ children: ReactNode }> = ({ children }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Button
        onClick={open}
        radius="sm"
        bg="red.1"
        c="red"
        w={60}
        h={55}
        size="compact-sm"
      >
        <IconHeartbeat size={40} stroke={1.5} />
      </Button>
      <Modal
        size="lg"
        opened={opened}
        onClose={close}
        centered={true}
        padding={0}
        overlayProps={{ blur: 5 }}
        withCloseButton={false}
        closeOnEscape={false}
        closeOnClickOutside={false}
      >
        {children}
        <div className="absolute top-3 right-3">
          <div role="button" onClick={close}>
            <IconSquareRoundedX stroke={1.5} size={60} color="white" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Author;
