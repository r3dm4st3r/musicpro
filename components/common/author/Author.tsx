"use client";
import { Button, Modal, useDisclosure } from "@toolsify/core";
import {
  AiFillX,
  AiFillTrophy,
} from "@toolsify/icons/ai";
import { FC, ReactNode } from "react";

const Author: FC<{ children: ReactNode }> = ({ children }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <Button
        variant="default"
        onClick={open}
        radius="sm"
        w={50}
        h={45}
        size="compact-sm"
      >
        <AiFillTrophy size={25} />
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
            <AiFillX  />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Author;
