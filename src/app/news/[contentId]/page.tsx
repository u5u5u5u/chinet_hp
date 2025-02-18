import React from "react";
import Image from "next/image";

import { getArticleDetail } from "@/app/_libs/microcms";
import type { Article } from "@/app/_libs/microcms";

interface Props {
  params: { contentId: string };
}

const ArticleDetail = async ({ params }: Props) => {
  const { contentId } = params;
  const article = await getArticleDetail(contentId);

  return (
    <article>
      <h1>テスト</h1>
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
      <p>{article.publishedAt}</p>
      <p>{article.createdAt}</p>
      <div dangerouslySetInnerHTML={{ __html: article.contents }} />
    </article>
  );
};

export default ArticleDetail;
