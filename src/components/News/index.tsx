import { TOP_ARTICLE_LIMIT } from "@/app/_constants";
import { getArticlesList } from "@/app/_libs/microcms";
import Heading from "@/components/Heading";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default async function NewsSection() {
  const data = await getArticlesList({
    limit: TOP_ARTICLE_LIMIT,
  });

  return (
    <div className="bg-[#131c4d] py-20">
      <div className="flex flex-col justify-center items-center">
        <Heading title="News" />
        <Carousel className="w-full max-w-5xl">
          <CarouselContent className="flex gap-4">
            {data.contents.map((content, index) => (
              <Link href={`/news/${content.id}`} key={index}>
                <CarouselItem key={index} className="basis-1/3">
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
                </CarouselItem>
              </Link>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
