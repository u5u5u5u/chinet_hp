import { TOP_ARTICLE_LIMIT } from "@/app/_constants";
import { getArticlesList } from "@/app/_libs/microcms";
import Heading from "@/components/Heading";
import NewsCarousel from "./Carousel";

export default async function NewsSection() {
  const data = await getArticlesList({
    limit: TOP_ARTICLE_LIMIT,
  });

  console.log(data);

  return (
    <div className="bg-[#131c4d] py-20">
      <div className="flex flex-col justify-center items-center">
        <Heading title="News" />
        <NewsCarousel data={data} />
      </div>
    </div>
  );
}
