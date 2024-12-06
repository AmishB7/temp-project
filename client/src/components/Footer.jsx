import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";

// Dummy data for the footer
const dummyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#1e1919]">
        <div className="px-4 md:px-8 py-10 w-full gap-12 grid lg:grid-cols-4 grid-cols-1">
          <div className="w-full">
            <div className="w-full flex flex-col gap-y-[14px]">
              {/* Dummy logo image */}
              <img
                className="w-[200px] h-[100px]"
                src="https://via.placeholder.com/200x100.png?text=Logo"
                alt="logo"
              />
              <h2 className="text-slate-300">{dummyText}</h2>
              <h2 className="text-slate-300">{dummyText}</h2>
            </div>
          </div>
          
          {/* Gallery Component (dummy data for gallery) */}
          <div className="w-full flex flex-col gap-y-[14px]">
            <h3 className="text-white text-lg">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {/* Dummy images for gallery */}
              <img src="https://via.placeholder.com/100x100.png?text=Image1" alt="Gallery Image 1" className="w-full h-full object-cover" />
              <img src="https://via.placeholder.com/100x100.png?text=Image2" alt="Gallery Image 2" className="w-full h-full object-cover" />
              <img src="https://via.placeholder.com/100x100.png?text=Image3" alt="Gallery Image 3" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Categories Section (dummy data) */}
          <div>
            <h3 className="text-white text-lg">Categories</h3>
            <ul className="text-slate-300">
              <li><Link to="/category/education">Education</Link></li>
              <li><Link to="/category/technology">Technology</Link></li>
              <li><Link to="/category/sports">Sports</Link></li>
            </ul>
          </div>

          {/* Recent News Section (dummy data) */}
          <div>
            <h3 className="text-white text-lg">Recent News</h3>
            <ul className="text-slate-300">
              <li><Link to="/news/1">News 1</Link></li>
              <li><Link to="/news/2">News 2</Link></li>
              <li><Link to="/news/3">News 3</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#262323]">
        <div className="px-4 md:px-8 py-5 flex flex-col md:flex-row gap-3 justify-between items-center">
          <div className="flex gap-y-2 text-gray-400 justify-start items-center">
            <span>By Suyash, Amish & Prashanna </span> 
          </div>
          <div className="flex gap-x-[4px]">
            <a
              className="w-[37px] h-[35px] text-white flex justify-center items-center bg-[#ffffff2b]"
              href="#"
            >
              <FaFacebookF />
            </a>
            <a
              className="w-[37px] text-white h-[35px] flex justify-center items-center bg-[#ffffff2b]"
              href="#"
            >
              <AiOutlineTwitter />
            </a>
            <a
              className="w-[37px] text-white h-[35px] flex justify-center items-center bg-[#ffffff2b]"
              href="#"
            >
              <AiFillYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
