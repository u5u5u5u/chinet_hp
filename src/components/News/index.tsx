import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getArticlesList } from "@/app/_libs/microcms";
import { TOP_ARTICLE_LIMIT } from "@/app/_constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function NewsSection() {
  const data = await getArticlesList({
    limit: TOP_ARTICLE_LIMIT,
  });

  console.log(data);

  return (
    <div className="bg-[#0b1e3f] py-10">
      {" "}
      {/* ダークブルー背景 */}
      <h2 className="text-white text-2xl text-center mb-6">News</h2>
      <div className="flex justify-center">
        <Carousel className="w-full max-w-5xl">
          <CarouselContent className="flex gap-4">
            {data.contents.map((content, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <Card className="w-[320px] bg-white rounded-lg shadow-md overflow-hidden">
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
                  <CardContent className="p-3">
                    <CardDescription className="text-xs text-gray-600">
                      {content.description || "詳細はありません"}
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
