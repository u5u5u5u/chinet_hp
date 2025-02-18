import React from "react";
import Image from "next/image";

import { getArticleDetail } from "@/app/_libs/microcms";
import type { Article } from "@/app/_libs/microcms";
import { formatDate } from "@/lib/formatDate";

interface Props {
  params: { contentId: string };
}

const ArticleDetail = async ({ params }: Props) => {
  const { contentId } = params;
  const article: Article = await getArticleDetail(contentId);
  console.log(typeof article.publishedAt); // string

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
      <p>{article.category.name}</p>
      <p>
        {article.publishedAt ? formatDate(article.publishedAt) : "日付不明"}
      </p>
      <p>{article.createdAt ? formatDate(article.createdAt) : "日付不明"}</p>
      <div dangerouslySetInnerHTML={{ __html: article.contents }} />
    </article>
  );
};

export default ArticleDetail;
