import { BounceLoader } from 'react-spinners';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const HeadLines = () => {
  const headlines = [
    { title: 'OnePlus 11R Solar Red with 512 GB internal storage announced', slug: 'oneplus-11r-solar-red' },
    { title: 'Apple announces new MacBook Pro with M3 chip', slug: 'macbook-pro-m3' },
    { title: 'Google Pixel 9 release date leaked', slug: 'google-pixel-9' },
    { title: 'Tesla launches Cybertruck with enhanced features', slug: 'tesla-cybertruck' },
    { title: 'Amazon introduces drone delivery service', slug: 'amazon-drone-delivery' },
  ];

  return (
    <div className="bg-white shadow flex flex-wrap">
      <div className="flex md:w-[170px] w-full bg-[#dddddd] relative after:absolute after:bg-[#dddddd] after:w-[20px] after:left-[160px] after:skew-x-[20deg] after:top-0 after:bottom-0 after:z-30">
        <div className="md:pl-8 pl-4 w-full py-2 flex justify-start items-center gap-x-1">
          <span>
            <BounceLoader color="#c80000" size={30} />
          </span>
          <h2 className="text-[#333333] font-semibold text-lg">Headlines</h2>
        </div>
      </div>
      <div className="flex md:w-[calc(100%-170px)] w-full">
        <div className="flex w-full justify-start items-center">
          <Marquee>
            {headlines.map((headline, index) => (
              <Link
                key={index}
                className="py-3 block font-semibold hover:text-[#c80000] pr-12 text-sm"
                to={`/news/${headline.slug}`}
              >
                {headline.title}
              </Link>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HeadLines;
