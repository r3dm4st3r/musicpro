import { FC } from "react";
import Link from "next/link";
import { Image, Paper, Text } from "@mantine/core";

const MusicArtist: FC<{ artist: any; hideFansCount?: boolean }> = ({
  artist,
  hideFansCount = false,
}) => {
  return (
    <Paper
      shadow="xs"
      p="0"
      mb={2}
      pos="relative"
      withBorder
      className="overflow-hidden"
    >
      <Link
        href={`/artist/${artist?.id}`}
        className="no-underline text-[var(--mantine-primary-color-filled)]"
      >
        <Image src={artist?.image?.large} alt={artist?.title} />
        <div className="p-3">
          <Text
            fw="bold"
            fz={16}
            component="h3"
            lineClamp={1}
            dangerouslySetInnerHTML={{ __html: artist?.name }}
          />
          {!hideFansCount && (
            <div className="flex items-center gap-2">
              <Text component="h3" c="orange" lineClamp={1}>
                {artist?.follower_count} Fans
              </Text>
            </div>
          )}
        </div>
      </Link>
    </Paper>
  );
};

export default MusicArtist;
