import { FC } from "react";
import { IconMusic } from "@tabler/icons-react";
import PageTitle from "@/components/common/heading/PageTitle";
import MusicListTable from "@/components/cards/MusicListTable";

const MusicLists: FC<{ response: any }> = ({ response }) => {
  return (
    <div>
      <div className="grid grid-cols-1 mt-5 mb-1">
        <PageTitle
          title={`${response?.list_count} ${
            response?.list_count > 1 ? "songs" : "song"
          }`}
          color="red.1"
          icon={<IconMusic size={30} color="red" stroke={1.5} />}
        />
      </div>
      <MusicListTable response={response?.list} />
    </div>
  );
};

export default MusicLists;
