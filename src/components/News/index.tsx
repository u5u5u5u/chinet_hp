// components/NewsSection.tsx
import React from "react"; // Reactをインポートする

export default function NewsSection() {
  const newsItems = [
    { id: 1, title: "News 1" },
    { id: 2, title: "News 2" },
    { id: 3, title: "News 3" },
  ];

  return (
    <div>
      <h2>News</h2>
      <div className="flex gap-[20px]">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="bg-gray-200 p-[20px] flex-1 text-center rounded-lg"
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
