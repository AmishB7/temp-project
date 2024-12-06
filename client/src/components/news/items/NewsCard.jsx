import React from "react";

const NewsCard = ({ item }) => {
  return (
    <div className="bg-white shadow flex p-4">
      <div className="relative group overflow-hidden h-full">
        <div className="group-hover:scale-[1.1] transition-all duration-[1s] w-[100px] md:w-[160px] h-[93px] lg:w-[100px] relative">
          <img
            className="w-full h-full object-cover"
            src={item.image}
            alt="News"
          />
          <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 w-[calc(100%-100px)] md:w-[calc(100%-160px)] lg:w-[calc(100%-100px)] pl-3">
        <a href={`/news/category/${item.category}`} className="text-sm font-semibold text-[#c80000]">
          {item.category}
        </a>
        <a
          href={`/news/${item.slug}`}
          className="text-sm font-semibold text-[#333333] hover:text-[#c80000]"
        >
          {item.title}
        </a>
        <div className="flex gap-x-2 text-xs font-normal text-slate-600">
          <span>{item.date}</span>
          <span>{item.writerName}</span>
        </div>
      </div>
    </div>
  );
};

const news = {
  Sports: [
    {
      image: "https://via.placeholder.com/160",
      category: "Sports",
      slug: "football-highlights",
      title: "Football Highlights: Amazing Match!",
      date: "2024-12-05",
      writerName: "Jane Doe",
    },
    {
      image: "https://via.placeholder.com/160",
      category: "Sports",
      slug: "basketball-news",
      title: "Basketball: Top 5 Players This Year",
      date: "2024-12-04",
      writerName: "John Smith",
    },
  ],
  Technology: [
    {
      image: "https://via.placeholder.com/160",
      category: "Technology",
      slug: "ai-breakthrough",
      title: "AI Breakthrough of the Year!",
      date: "2024-12-03",
      writerName: "Alice Brown",
    },
  ],
};

// Usage example
const App = () => {
  return (
    <div className="p-4">
      <NewsCard item={news} />
    </div>
  );
};

export default App;
