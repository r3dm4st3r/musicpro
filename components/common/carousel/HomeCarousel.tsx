import {Carousel, CarouselProps, CarouselSlide} from "@mantine/carousel";
import {Badge, Image, Paper} from "@mantine/core";
import {FC} from "react";
import Link from "next/link";

export interface ICarousel {
  props?: CarouselProps;
  data: string[] | any;
}
const HomeCarousel: FC<ICarousel> = ({ props, data }) => {
  return (
    <div className="grid grid-cols-1">
      <Carousel
        slideSize={{ base: "50%", sm: "33%", md: "25%", lg: "20%" }}
        slideGap="md"
        controlsOffset="md"
        align="start"
        slidesToScroll={5}
        height="100%"
        controlSize={40}
        withIndicators
        loop
        draggable
        dragFree
        style={{ flex: 1 }}
        {...props}
        styles={{
          control: {
            background: "black",
            color: "white",
          },
        }}
      >
        {data?.map((item: any) => (
          <CarouselSlide key={item?.id}>
            <Link href={`/${item?.type}/${item?.id}`}>
              <Paper shadow="xs" p="0" mb={2} pos="relative">
                <div className="absolute top-1 right-1">
                  <Badge color="orange">{item?.type}</Badge>
                </div>
                <Image radius="sm" src={item?.image?.large} alt={item?.title} />
              </Paper>
            </Link>
          </CarouselSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
