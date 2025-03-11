import { getArticlesList } from "@/app/_libs/microcms";
import NewsSection from "@/components/News";
import { TOP_ARTICLE_LIMIT } from "@/app/_constants";

export default async function Page() {
  const data = await getArticlesList({ limit: TOP_ARTICLE_LIMIT });

  return <NewsSection data={data} />;
}
