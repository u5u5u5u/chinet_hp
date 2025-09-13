import { notFound } from "next/navigation";
import { getArticleDetail } from "@/app/_libs/microcms";
import type { Article as ArticleType } from "@/app/_libs/microcms";
import Article from "@/components/Article";

interface Props {
  params: Promise<{ contentId: string }>;
  searchParams: Promise<{
    dk?: string;
  }>;
}

const ArticleDetail = async ({ params, searchParams }: Props) => {
  const { contentId } = await params;
  const { dk } = await searchParams;
  const article: ArticleType = await getArticleDetail(contentId, {
    draftKey: dk,
  }).catch(notFound);

  return <Article article={article} />;
};

export default ArticleDetail;
