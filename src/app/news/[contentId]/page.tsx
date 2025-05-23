import { notFound } from "next/navigation";
import { getArticleDetail } from "@/app/_libs/microcms";
import type { Article as ArticleType } from "@/app/_libs/microcms";
import Article from "@/components/Article";

interface Props {
  params: Promise<{ contentId: string }>;
}

const ArticleDetail = async ({ params }: Props) => {
  const { contentId } = await params;
  const article: ArticleType = await getArticleDetail(contentId).catch(
    notFound
  );

  return <Article article={article} />;
};

export default ArticleDetail;
