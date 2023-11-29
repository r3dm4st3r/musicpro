import React, { FC, ReactNode } from "react";
import { ActionIcon, Text } from "@mantine/core";

const PageTitle: FC<{ icon?: ReactNode; color?: string; title: string }> = ({
  title,
  icon,
  color = "red.1",
}) => {
  return (
    <div className="mb-5 inline-flex items-center gap-5">
      <ActionIcon
        color={color}
        size={50}
        radius="100%"
        className="shadow-md shadow-gray-300"
      >
        {icon}
      </ActionIcon>
      <Text lineClamp={1} fz={25} fw="bold">
        {title}
      </Text>
    </div>
  );
};

export default PageTitle;
