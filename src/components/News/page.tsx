import { getArticlesList } from "@/app/_libs/microcms";
import NewsSection from "@/components/News"; // クライアントコンポーネントをインポート

export default async function Page() {
  const data = await getArticlesList({ limit: TOP_ARTICLE_LIMIT });

  return <NewsSection data={data} />; // クライアントコンポーネントにデータを渡す
}
