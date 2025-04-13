import {FC} from "react";
import {IconBrandApplePodcast} from "@tabler/icons-react";
import MusicArtist from "@/components/cards/MusicArtist";
import PageTitle from "@/components/common/heading/PageTitle";

const MusicArtistWrapper: FC<{ artists: any[]; hideFansCount?: boolean }> = ({
  artists,
  hideFansCount = false,
}) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5">
        <PageTitle
          title="Artists"
          color="green.1"
          icon={<IconBrandApplePodcast size={30} color="green" stroke={1.5} />}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {artists?.map((artist: any) => {
          return (
            <MusicArtist
              key={artist?.id}
              artist={artist}
              hideFansCount={hideFansCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MusicArtistWrapper;
