import Image from "next/image";
// @ts-ignore
import NotFoundImage from "@/assets/img/not.png";
import { Paper } from "@toolsify/core";
const NotFound = () => {
  return (
    <div>
      <Paper
        p="xl"
        className="min-h-[calc(100vh-170px)] flex items-center justify-center"
        withBorder
      >
        <div className="relative h-full flex items-center justify-center">
          <Image
            src={NotFoundImage}
            alt="NotFound"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </Paper>
    </div>
  );
};

export default NotFound;
