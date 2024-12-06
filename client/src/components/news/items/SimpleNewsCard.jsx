import React from "react";

const SimpleNewsCard = ({ item, type }) => {
  return (
    <div className="group relative">
      {/* Image */}
      <div className="overflow-hidden">
        <div
          className={`${
            type ? "h-[270px] sm:h-[470px]" : "h-[228px]"
          } w-full group-hover:scale-[1.1] transition-all duration-[1s]`}
        >
          <img
            className="w-full h-full object-cover"
            src={item.image}
            alt="news"
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="w-full h-full absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>

      {/* Content */}
      <div className="absolute left-5 bottom-4 flex flex-col justify-start items-start text-white font-semibold gap-y-2">
        <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
          {item.category}
        </div>
        <a
          href={`/news/${item.slug}`}
          className="text-xl hover:underline hover:text-gray-200"
        >
          {item.title}
        </a>
        <div className="flex gap-x-2 text-sm font-normal">
          <span>{item.date}</span>
          <span>{item.writerName}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleNewsCard;
