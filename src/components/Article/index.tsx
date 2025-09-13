import Image from "next/image";
import styles from "./index.module.css";
import type { Article } from "@/app/_libs/microcms";
import { formatDate } from "@/lib/formatDate";
import CategoryBadge from "@/components/CategoryBadge";

interface Props {
  article: Article;
}

const Article = ({ article }: Props) => {
  // デバッグ用のログ（開発時のみ）
  if (process.env.NODE_ENV === "development") {
    console.log("Article data:", {
      title: article.title,
      contentsType: typeof article.contents,
      contentsValue: article.contents,
    });
  }

  return (
    <article className="full-width px-6 py-36 flex flex-col items-center">
      <div className="flex flex-col items-center max-w-screen-lg bg-slate-200 px-9 py-12 rounded-lg text-gray-800 max-md:px-2 max-md:py-6">
        <h1 className="text-4xl font-bold py-6 max-md:text-2xl max-md:px-2 max-md:py-3">
          {article.title}
        </h1>
        {article.thumbnail ? (
          <Image
            src={article.thumbnail.url}
            alt={article.title}
            width={article.thumbnail.width}
            height={article.thumbnail.height}
            className="px-4 py-6"
          />
        ) : (
          <p>サムネイルがありません</p>
        )}
        <div className="w-full px-8 py-2 max-md:p-4">
          <CategoryBadge category={article.category} />
        </div>
        <div className="w-full py-2 px-6 max-md:px-6">
          <p className="py-1">
            投稿日<span className="text-sm mx-3">:</span>
            {article.publishedAt ? formatDate(article.publishedAt) : "日付不明"}
          </p>
          <p className="text-left py-1">
            更新日<span className="text-sm mx-3">:</span>
            {article.createdAt ? formatDate(article.createdAt) : "日付不明"}
          </p>
        </div>
        {article.contents && typeof article.contents === "string" ? (
          <div
            dangerouslySetInnerHTML={{ __html: article.contents }}
            className={styles.article}
          />
        ) : (
          <div className={styles.article}>
            <p>コンテンツがありません</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default Article;
