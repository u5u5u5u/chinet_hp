import { getArticleDetail } from "@/app/_libs/microcms";
import type { Article as ArticleType } from "@/app/_libs/microcms";
import Article from "@/components/Article";

interface Props {
  params: { contentId: string };
}

const ArticleDetail = async ({ params }: Props) => {
  const { contentId } = params;
  const article: ArticleType = await getArticleDetail(contentId);

  return <Article article={article} />;
};

export default ArticleDetail;
