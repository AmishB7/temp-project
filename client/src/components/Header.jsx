import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ne'; // Import Nepali locale
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';

// Importing static assets
import bg_header from '../assets/header-bg.jpg';
import logo from '../assets/logo.png';
import adver_image from '../assets/sample-add.jpg';

// Importing the Header_Category component
import Header_Category from './Header_Category';

const Header = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Set moment locale to Nepali
    moment.locale('ne');

    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(moment().locale('ne').format('dddd, D MMMM YYYY, A, h:mm:ss'));
    }, 1000);

    // Set initial time
    setCurrentTime(moment().locale('ne').format('dddd, D MMMM YYYY, A, h:mm:ss'));

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="px-5 lg:px-8 flex justify-between items-center bg-[#333333] text-[#cccccc]">
        {/* Display running Nepali Date and Time */}
        {currentTime && (
          <span className="text-[15px] py-3 font-medium">{currentTime}</span>
        )}
        <div className="flex gap-x-[1px]">
          <a
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]"
            href="#"
          >
            <FaFacebookF />
          </a>
          <a
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]"
            href="#"
          >
            <AiOutlineTwitter />
          </a>
          <a
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]"
            href="#"
          >
            <AiFillYoutube />
          </a>
        </div>
      </div>

      {/* Header Section */}
      <div
        style={{
          backgroundImage: `url(${bg_header})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="px-8 py-14">
          <div className="flex justify-center items-center flex-wrap">
            {/* Logo Section */}
            <div className="md:w-4/12 w-full">
              <div className="flex flex-col justify-center items-center md:items-start">
                <img className="w-[200px] h-[45px]" alt="logo" src={logo} />
                <h2 className="text-[#cccccc]"> Nepali News Portal</h2>
              </div>
            </div>

            {/* Advertisement Section */}
            <div className="md:w-8/12 w-full hidden md:block">
              <div className="w-full flex justify-end">
                <img
                  className="w-full max-w-[400px]"
                  alt="advertisement"
                  src={adver_image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Category */}
      <Header_Category />
    </div>
  );
};

export default Header;
