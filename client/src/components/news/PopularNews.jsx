import React from "react";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";

const PopularNews = ({ type }) => {
  // Dummy data
  const popularNews = [
    {
      image: "https://via.placeholder.com/300x200",
      slug: "news-1",
      title: "Breaking News 1",
      date: "2024-12-01",
      writerName: "John Doe",
      description:
        "<p>This is the description for news 1. It's an HTML string that showcases content.</p>",
    },
    {
      image: "https://via.placeholder.com/300x200",
      slug: "news-2",
      title: "Breaking News 2",
      date: "2024-12-02",
      writerName: "Jane Smith",
      description:
        "<p>This is the description for news 2. It contains more HTML text to convert.</p>",
    },
    {
      image: "https://via.placeholder.com/300x200",
      slug: "news-3",
      title: "Breaking News 3",
      date: "2024-12-03",
      writerName: "Alice Brown",
      description:
        "<p>News 3 description. It provides an example of content with an HTML string.</p>",
    },
    {
      image: "https://via.placeholder.com/300x200",
      slug: "news-4",
      title: "Breaking News 4",
      date: "2024-12-04",
      writerName: "Michael Johnson",
      description: "<p>News 4 description with some additional content.</p>",
    },
  ];

  return (
    <div className="w-full pb-8 mt-5">
      <div className="flex flex-col w-full gap-y-[14px]">
        <Title title="Popular News" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-3 sm:gap-3 lg:gap-x-3">
          {popularNews.map((item, i) => (
            <SimpleDetailsNewCard
              news={item}
              type={type}
              item={item}
              key={i}
              height={230}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
