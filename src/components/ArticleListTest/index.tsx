import Image from "next/image";
import { Article } from "@/app/_libs/microcms";

type Props = {
  articles: Article[];
};

const ArticleListTest = ({ articles }: Props) => {
  if (articles.length === 0) {
    return <p>記事がありません</p>;
  }

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <h2>{article.title}</h2>
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
        </li>
      ))}
    </ul>
  );
};

export default ArticleListTest;
