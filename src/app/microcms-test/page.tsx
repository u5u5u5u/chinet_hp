import { getArticlesList } from "../_libs/microcms";
import { TOP_ARTICLE_LIMIT } from "../_constants";
import ArticleListTest from "@/components/ArticleListTest";

const microcmsTest = async () => {
  const data = await getArticlesList({
    limit: TOP_ARTICLE_LIMIT,
  });

  return (
    <>
      <h1>MicroCMS Test</h1>
      <ArticleListTest articles={data.contents} />
    </>
  );
};

export default microcmsTest;
