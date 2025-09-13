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
  try {
    const { contentId } = await params;
    const { dk } = await searchParams;
    
    // プレビューキーが存在する場合のみdraftKeyを設定
    const queries = dk ? { draftKey: dk } : {};
    
    const article: ArticleType = await getArticleDetail(contentId, queries);
    
    if (!article) {
      notFound();
    }

    return <Article article={article} />;
  } catch (error) {
    console.error('Article fetch error:', error);
    notFound();
  }
};

export default ArticleDetail;
