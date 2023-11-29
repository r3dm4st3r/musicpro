import { FC } from "react";
import { Image, Paper, Text, Tooltip } from "@mantine/core";
import {
  IconDiscountCheckFilled,
  IconGift,
  IconLanguage,
  IconMusicStar,
  IconMusicUp,
} from "@tabler/icons-react";

const ArtistBanner: FC<{ response: any }> = ({ response }) => {
  return (
    <div className="grid grid-cols-1">
      <Paper withBorder p="sm">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div>
            <Image
              radius={3}
              src={response?.image?.large}
              alt={response?.title}
              className="sm:w-[250px] sm:h-[250px]"
            />
          </div>
          <div className="sm:w-[calc(100%-250px)]">
            <div className="inline-flex items-center gap-2">
              <Text
                fw="bold"
                fz={30}
                lineClamp={1}
                dangerouslySetInnerHTML={{ __html: response?.name }}
              />
              <div
                className={`inline-flex items-center justify-center ${
                  response?.isVerified ? "text-green-500" : "text-gray-300"
                }`}
              >
                <IconDiscountCheckFilled width={35} height={35} stroke={1.5} />
              </div>
            </div>
            {response?.subtitle && (
              <Text
                component="p"
                my={10}
                dangerouslySetInnerHTML={{ __html: response?.subtitle }}
              />
            )}

            <div className="flex flex-col items-start gap-3">
              {response?.artistLanguage && (
                <Tooltip
                  color="green"
                  position="top"
                  label="Language"
                  transitionProps={{ transition: "pop" }}
                  arrowSize={10}
                  withArrow
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center">
                      <IconLanguage stroke={1.5} />
                    </span>
                    <Text className="capitalize">
                      {response?.artistLanguage}
                    </Text>
                  </div>
                </Tooltip>
              )}

              {response?.dob && (
                <Tooltip
                  color="green"
                  position="top"
                  label="Date of Birth"
                  transitionProps={{ transition: "pop" }}
                  arrowSize={10}
                  withArrow
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center">
                      <IconGift stroke={1.5} />
                    </span>
                    <Text className="capitalize">{response?.dob}</Text>
                  </div>
                </Tooltip>
              )}

              {response?.fan_count && response?.fan_count !== "0" && (
                <Tooltip
                  color="green"
                  position="top"
                  label="Fans"
                  transitionProps={{ transition: "pop" }}
                  arrowSize={10}
                  withArrow
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center">
                      <IconMusicStar stroke={1.5} />
                    </span>
                    <Text className="capitalize">{response?.fan_count}</Text>
                  </div>
                </Tooltip>
              )}

              {response?.follower_count && (
                <Tooltip
                  color="green"
                  position="top"
                  label="Followers"
                  transitionProps={{ transition: "pop" }}
                  arrowSize={10}
                  withArrow
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center">
                      <IconMusicUp stroke={1.5} />
                    </span>
                    <Text>{response?.follower_count}</Text>
                  </div>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ArtistBanner;
