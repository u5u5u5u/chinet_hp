import { getArticlesList } from "@/app/_libs/microcms";
import Heading from "@/components/Heading";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { Article } from "@/app/_libs/microcms";
import Image from "next/image";
import Link from "next/link";

const fetchAllArticles = async (): Promise<Article[]> => {
  const limit = 100;
  let offset = 0;
  let allArticles: Article[] = [];

  while (true) {
    const response = await getArticlesList({ limit, offset });
    allArticles = allArticles.concat(response.contents);

    if (response.contents.length < limit) break;
    offset += limit;
  }

  return allArticles;
};

export default async function NewsSection() {
  const articles = await fetchAllArticles();

  return (
    <div className="bg-[#131c4d] py-20">
      <div className="flex flex-col justify-center items-center">
        <Heading title="News" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {articles.map((content) => (
            <Link
              href={`/news/${content.id}`}
              key={content.id}
              className="w-[320px]"
            >
              <Card
                key={content.id}
                className="w-[320px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              >
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
                  <p className="text-xs text-gray-500">{content.publishedAt}</p>
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md">
                    News
                  </span>
                  <CardTitle className="text-sm mt-1">
                    {content.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
