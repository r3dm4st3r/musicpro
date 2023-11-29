import { FC } from "react";
import {
  Paper,
  Table,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from "@mantine/core";
import { Duration } from "@/utils";
import PlaySong from "@/components/actions/PlaySong";
import MusicImage from "@/components/cards/MusicImage";

const MusicListTable: FC<{ response: any[]; mini?: boolean }> = ({
  response,
  mini = false,
}) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      <Paper withBorder radius="md" className="overflow-hidden">
        <TableScrollContainer minWidth={500}>
          <Table
            striped
            highlightOnHover
            withRowBorders
            withColumnBorders
            horizontalSpacing="md"
            verticalSpacing="md"
          >
            <TableThead>
              <TableTr>
                <TableTh w={90}>#</TableTh>
                <TableTh>Title</TableTh>
                {!mini && <TableTh w={100}>Duration</TableTh>}
                <TableTh w={80} align="center">
                  Action
                </TableTh>
              </TableTr>
            </TableThead>
            <TableTbody>
              {response?.map((song: any, i: number) => {
                return (
                  <TableTr key={i}>
                    <TableTd align="center">
                      <MusicImage
                        id={song?.id}
                        alt={song?.title}
                        image={song?.image}
                      />
                    </TableTd>
                    <TableTd>
                      <Text
                        fw="bold"
                        lineClamp={1}
                        dangerouslySetInnerHTML={{ __html: song?.title }}
                      />
                      {mini && Duration(song?.duration)}
                    </TableTd>
                    {!mini && (
                      <TableTd>
                        <Text fw="bold" lineClamp={1}>
                          {Duration(song?.duration)}
                        </Text>
                      </TableTd>
                    )}
                    <TableTd align="center">
                      <PlaySong lists={response} index={i} song={song} />
                    </TableTd>
                  </TableTr>
                );
              })}
            </TableTbody>
          </Table>
        </TableScrollContainer>
      </Paper>
    </div>
  );
};

export default MusicListTable;
