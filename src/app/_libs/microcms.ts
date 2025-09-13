import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Category = {
  name: string;
} & MicroCMSListContent;

export type Article = {
  title: string;
  category: Category;
  thumbnail: MicroCMSImage;
  contents: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getArticlesList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Article>({
    endpoint: "articles",
    queries,
  });
  return listData;
};

export const getArticleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  try {
    const detailData = await client.get<Article>({
      endpoint: "articles",
      contentId: `${contentId}`,
      queries,
    });
    return detailData;
  } catch (error) {
    console.error('MicroCMS API Error:', error);
    throw error;
  }
};
