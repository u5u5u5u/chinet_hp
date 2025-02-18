import Image from "next/image";
import type { Article } from "@/app/_libs/microcms";
import { formatDate } from "@/lib/formatDate";
import CategoryBadge from "@/components/CategoryBadge";

interface Props {
  article: Article;
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <h1>{article.title}</h1>
      {article.thumbnail ? (
        <Image
          src={article.thumbnail.url}
          alt={article.title}
          width={article.thumbnail.width}
          height={article.thumbnail.height}
        />
      ) : (
        <p>サムネイルがありません</p>
      )}
      <CategoryBadge category={article.category} />
      <p>
        {article.publishedAt ? formatDate(article.publishedAt) : "日付不明"}
      </p>
      <p>{article.createdAt ? formatDate(article.createdAt) : "日付不明"}</p>
      <div dangerouslySetInnerHTML={{ __html: article.contents }} />
    </article>
  );
};

export default Article;