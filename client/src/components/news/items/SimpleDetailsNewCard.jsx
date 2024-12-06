import React from "react";
import { convert } from "html-to-text";

const SimpleDetailsNewCard = ({ news, type, height }) => {
  return (
    <div className="bg-white shadow">
      <div className="group relative overflow-hidden">
        <div
          style={{ height: `${height}px` }}
          className="w-full group-hover:scale-[1.1] transition-all duration-[1s]"
        >
          <img
            className="w-full h-full object-cover"
            src={news?.image}
            alt="News"
          />
        </div>
        <div
          className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"
        ></div>
        <div className="left-5 absolute bottom-4 flex justify-start items-start gap-x-2 text-white font-semibold gap-y-2">
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
            Travel
          </div>
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
            Adventure
          </div>
        </div>
      </div>
      <div className="p-5">
        <a
          className="text-[15px] font-semibold text-[#333333] hover:text-[#c80000]"
          href={`/news/${news?.slug}`}
        >
          {news?.title}
        </a>
        <div className="flex gap-x-2 text-xs font-normal text-slate-600">
          <span>{news?.date}</span>
          <span>{news?.writerName}</span>
        </div>
        {type === "details-news" && (
          <p className="text-sm text-slate-600 pt-3">
            {convert(news?.description || "").slice(0, 200)}
          </p>
        )}
      </div>
    </div>
  );
};

// Dummy data
const dummyNews = {
  image: "https://via.placeholder.com/300x200", // Replace with a valid image URL
  slug: "example-news-slug",
  title: "Example News Title",
  date: "2024-12-01",
  writerName: "John Doe",
  description:
    "<p>This is an example news description. It contains HTML content to showcase the functionality of the html-to-text conversion.</p>"
};

// Usage example
const App = () => {
  return (
    <div className="p-4">
      <SimpleDetailsNewCard news={dummyNews} type="details-news" height={200} />
    </div>
  );
};

export default App;
