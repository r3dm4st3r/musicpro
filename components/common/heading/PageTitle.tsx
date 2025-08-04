import React, { FC, ReactNode } from "react";
import { ActionIcon, Text } from "@toolsify/core";

const PageTitle: FC<{ icon?: ReactNode; color?: string; title: string }> = ({
  title,
  icon,
  color = "red.1",
}) => {
  return (
    <div className="mb-5 inline-flex items-center gap-5">
      <ActionIcon color={color} size={50} p="xs" radius="100%">
        {icon}
      </ActionIcon>
      <Text lineClamp={1} fz={25} fw="bold">
        {title}
      </Text>
    </div>
  );
};

export default PageTitle;
