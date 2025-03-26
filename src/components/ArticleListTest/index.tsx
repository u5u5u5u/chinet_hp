import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/_libs/microcms";

interface Props {
  articles: Article[];
}

const ArticleListTest = ({ articles }: Props) => {
  if (articles.length === 0) {
    return <p>記事がありません</p>;
  }

  return (
    <ul>
      {articles.map((article) => (
        <Link href={`/news/${article.id}`} key={article.id}>
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
        </Link>
      ))}
    </ul>
  );
};

export default ArticleListTest;
