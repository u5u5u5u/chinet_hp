"use client";

import type { Article } from "@/app/_libs/microcms";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

interface NewsCarouselProps {
  data: {
    contents: Article[];
  };
}

const NewsCarousel = ({ data }: NewsCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]}
      className="w-[330px] md:w-[80%] max-w-5xl"
    >
      <CarouselContent>
        {data.contents.map((content, index) => (
          <Link href={`/news/${content.id}`} key={index} className="flex flex-col">
            <CarouselItem key={index} className="basis-1/3">
              <div className="flex p-1">
                <Card className="w-[320px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                  {content.thumbnail?.url && (
                    <Image
                      src={content.thumbnail.url}
                      alt={content.title}
                      width={320}
                      height={240}
                      className="w-full h-auto"
                    />
                  )}
                  <CardHeader className="p-3">
                    <p className="text-xs text-gray-500">
                      {content.publishedAt}
                    </p>
                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md">
                      News
                    </span>
                    <CardTitle className="text-sm mt-1">
                      {content.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default NewsCarousel;
