import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SimpleNewsCard from "./items/SimpleNewsCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const LatestNews = () => {
  // Dummy data
  const dummyNews = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200",
      title: "Breaking News 1",
      description: "This is the description for news 1.",
      date: "2024-12-01",
      writerName: "John Doe",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200",
      title: "Breaking News 2",
      description: "This is the description for news 2.",
      date: "2024-12-02",
      writerName: "Jane Smith",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200",
      title: "Breaking News 3",
      description: "This is the description for news 3.",
      date: "2024-12-03",
      writerName: "Alice Brown",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200",
      title: "Breaking News 4",
      description: "This is the description for news 4.",
      date: "2024-12-04",
      writerName: "Michael Johnson",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous }) => (
    <div className="flex justify-between items-center">
      <div className="text-xl font-bold text-[#333333] relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
        Latest News
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <button
          onClick={() => previous()}
          className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200"
        >
          <span>
            <FiChevronLeft />
          </span>
        </button>
        <button
          onClick={() => next()}
          className="w-[30px] h-[30px] flex justify-center items-center bg-white border-slate-200"
        >
          <span>
            <FiChevronRight />
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col-reverse gap-3 pr-0 lg:pr-2">
      <Carousel
        autoPlay={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
        infinite={true}
        transitionDuration={500}
      >
        {dummyNews.map((item) => (
          <SimpleNewsCard item={item} key={item.id} type="latest" />
        ))}
      </Carousel>
    </div>
  );
};

export default LatestNews;
