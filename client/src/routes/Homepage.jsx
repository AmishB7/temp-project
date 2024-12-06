import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import HeadLines from "../components/HeadLines";
import Breadcrumb from "../components/Breadcrumb";
import Header_Category from "../components/news/Header_Category";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";
import LatestNews from "../components/news/LatestNews";
import PopularNews from "../components/news/PopularNews";
import DetailsNewsRow from "../components/news/DetailsNewsRow";
import DetailsNewsCol from "../components/news/DetailsNewsCol";
import Footer from "../components/Footer";
import SimpleNewsCard from "../components/news/items/SimpleNewsCard";
import DetailsNews from "../components/news/DetailsNews";
import Title from "../components/Title";
import NewsCard from "../components/news/items/NewsCard";

const Homepage = () => {
  const [news, setNews] = useState({});
  const base_api_url = "https://your-api-url.com"; // Replace with actual base API URL

  // Fetch news data
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${base_api_url}/api/all/news`);
        const data = await response.json();
        setNews(data.news);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="mt-4 flex flex-col gap-4">
      <Header/>
      {news && <HeadLines news={news} />}
<div className="px-4 md:px-8">
      {/* Breadcrumb */}
      <Breadcrumb one="Category" two="Subcategory" />
      {/* Featured Posts */}
      <div className="bg-slate-100 px-4 md:px-8 py-8 mt-2">
        <div className="flex flex-wrap">
      <FeaturedPosts />
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-slate-100 px-4 md:px-8 py-8 mt-2">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12">
            {news["Education"] && <LatestNews news={news["Education"]} />}
          </div>
          <div className="w-full lg:w-6/12 mt-5 lg:mt-0">
            <div className="flex flex-col gap-y-[14px] pl-0 lg:pl-2">
              <h2 className="text-lg font-bold">Technology</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                {news["Technology"] &&
                  news["Technology"].slice(0, 4).map((item, i) => (
                    <SimpleNewsCard item={item} key={i} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular News */}
      {news["Travel"] && <PopularNews type="Popular news" news={news["Travel"]} />}

      {/* Section Details */}
      <div className="w-full">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-8/12">
            {news["Sports"] && (
              <DetailsNewsRow news={news["Sports"]} category="Sports" type="details-news" />
            )}
            {news["Health"] && <DetailsNewsCol news={news["Health"]} category="Health" />}
          </div>
          <div className="w-full lg:w-4/12">
            {news["Education"] && (
              <DetailsNewsCol news={news["Education"]} category="Education" />
            )}
          </div>
        </div>
      </div>
      {/* Recent Posts */}
      <div>
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
</div>
      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default Homepage;
