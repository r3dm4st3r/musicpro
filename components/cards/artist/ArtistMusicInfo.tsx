import React, { FC } from "react";
import Link from "next/link";
import { IconMusic } from "@tabler/icons-react";
import { Image, Paper } from "@mantine/core";
import PageTitle from "@/components/common/heading/PageTitle";

const ArtistMusicInfo: FC<{ response: string[]; title: string }> = ({
  response,
  title,
}) => {
  if (!response?.length) return null;
  return (
    <div>
      <div className="grid grid-cols-1">
        <PageTitle
          title={title}
          color="red.1"
          icon={<IconMusic size={30} color="red" stroke={1.5} />}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {response?.map((item: any) => {
          return (
            <Link key={item?.id} href={`/${item?.type}/${item?.id}`}>
              <Paper shadow="xs" p="0" mb={2} pos="relative">
                <Image radius="sm" src={item?.image?.large} alt={item?.title} />
              </Paper>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistMusicInfo;
