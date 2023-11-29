import { Image, Paper, Text, Tooltip } from "@mantine/core";
import {
  IconCalendar,
  IconLanguage,
  IconMicrophone,
  IconMusic,
} from "@tabler/icons-react";
import Link from "next/link";
import { FC } from "react";

const MusicBannerInfo: FC<{ response: any }> = ({ response }) => {
  return (
    <div className="grid grid-cols-1">
      <Paper withBorder p="sm">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div>
            <Image
              radius={3}
              src={response?.image?.large}
              alt={response?.title}
              className="sm:w-[250px] sm:h-[250px]"
            />
          </div>
          <div className="sm:w-[calc(100%-250px)]">
            <Text
              mb={10}
              fw="bold"
              lineClamp={1}
              dangerouslySetInnerHTML={{ __html: response?.title }}
              fz={{ base: 20, sm: 30 }}
            />
            {response?.description && (
              <Text
                component="p"
                my={10}
                dangerouslySetInnerHTML={{ __html: response?.description }}
              />
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              {response?.language && (
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center">
                    <IconLanguage stroke={1.5} />
                  </span>
                  <Text className="capitalize">{response?.language}</Text>
                </div>
              )}

              {response?.year && (
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center">
                    <IconCalendar stroke={1.5} />
                  </span>
                  <Text className="capitalize">{response?.year}</Text>
                </div>
              )}

              {response?.list_count && (
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center">
                    <IconMusic stroke={1.5} />
                  </span>
                  <Text>
                    {response?.list_count}{" "}
                    {response?.list_count > 1 ? "songs" : "song"}
                  </Text>
                </div>
              )}
            </div>

            <div className="mt-3">
              <h4 className="flex items-center gap-2">
                <span>
                  <IconMicrophone stroke={1.5} />
                </span>
                <span>Artists</span>
              </h4>
              <div className="inline-flex items-center gap-2 mt-3">
                {response?.more_info?.artists
                  ?.slice(0, 5)
                  .map((artist: any, i: number) => {
                    return (
                      <Link href={`/artist/${artist?.id}`} key={i}>
                        <Tooltip
                          label={
                            <Text fw="bold" c="white">
                              {artist?.name}
                            </Text>
                          }
                          color="orange"
                          transitionProps={{ transition: "pop" }}
                          withArrow
                          arrowSize={10}
                        >
                          <Image
                            radius={3}
                            w={50}
                            h={50}
                            src={artist?.image?.medium}
                            alt={artist?.name}
                          />
                        </Tooltip>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default MusicBannerInfo;
