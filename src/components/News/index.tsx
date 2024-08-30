// components/NewsSection.tsx
import React from "react"; // Reactをインポートする
import styles from "./style.module.scss"; // 正しいインポートパスとファイル名を使用

export default function NewsSection() {
  const newsItems = [
    { id: 1, title: "News Item 1" },
    { id: 2, title: "News Item 2" },
    { id: 3, title: "News Item 3" },
  ];

  return (
    <div className={styles.news}>
      <h2>News</h2>
      <div className={styles.newsGrid}>
        {newsItems.map((item) => (
          <div key={item.id} className={styles.newsItem}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
