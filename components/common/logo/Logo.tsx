import React from "react";
import { Text } from "@mantine/core";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative inline-flex text-transparent no-underline"
    >
      <Text
        component="div"
        size="40px"
        fw={700}
        variant="gradient"
        gradient={{ from: "teal", to: "lime", deg: 172 }}
      >
        MUSIC
      </Text>
      <span className="font-extrabold absolute top-[-5px] right-[-40px] text-[var(--mantine-primary-color-filled)]">
        PRO
      </span>
    </Link>
  );
};

export default Logo;
