import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { BsList } from 'react-icons/bs';

const HeaderCategory = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('');
  const [show, setShow] = useState(false);
  const [cateShow, setCateShow] = useState(false);

  // Dummy data for categories
  const categories = [
    { id: 1, name: 'Technology', category: 'technology' },
    { id: 2, name: 'Sports', category: 'sports' },
    { id: 3, name: 'Politics', category: 'politics' },
    { id: 4, name: 'Health', category: 'health' },
  ];

  const search = (e) => {
    e.preventDefault();
    navigate(`/search/news?value=${state}`);
    setState('');
    setShow(false);
  };

  return (
    <div className="w-full">
      <div className="bg-[#c80000] w-full text-white uppercase font-semibold relative">
        <div className="px-8 flex justify-between items-center relative h-[48px]">
          <div
            onClick={() => setCateShow(!cateShow)}
            className={`text-3xl flex lg:hidden font-bold h-full w-[48px] cursor-pointer justify-center items-center ${cateShow ? 'bg-[#00000026]' : ''} hover:bg-[#00000026]`}
          >
            <BsList />
          </div>
          <div className="flex-wrap hidden lg:flex">
            <a
              className={`px-6 font-medium py-[13px]`}
              href="/"
            >
              Home
            </a>
            {categories.map((c) => (
              <a
                key={c.id}
                className={`px-6 font-medium py-[13px]`}
                href={`/news/category/${c.category}`}
              >
                {c.name}
              </a>
            ))}
          </div>
          <div className="h-full w-[48px]">
            <div
              onClick={() => setShow(!show)}
              className={`text-xl ${show ? 'bg-[#00000026]' : ''} font-bold h-full w-full cursor-pointer justify-center flex items-center hover:bg-[#00000026]`}
            >
              {show ? <IoClose /> : <AiOutlineSearch />}
            </div>
            <div
              className={`absolute transition-all text-slate-700 z-20 shadow-lg lg:right-10 top-[50px] w-full lg:w-[300px] right-0 ${show ? 'visible' : 'invisible'}`}
            >
              <div className="p-3 bg-white">
                <form onSubmit={search} className="flex">
                  <div className="w-[calc(100%-45px)] h-[40px]">
                    <input
                      value={state}
                      required
                      onChange={(e) => setState(e.target.value)}
                      type="text"
                      placeholder="search"
                      className="h-full w-full p-2 border border-slate-300 outline-none bg-slate-100"
                    />
                  </div>
                  <button className="w-[45px] hover:bg-red-700 cursor-pointer h-[40px] flex justify-center outline-none items-center bg-red-600 text-white text-xl">
                    <AiOutlineSearch />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {cateShow && (
        <div className="flex flex-wrap lg:hidden py-2 px-[30px]">
          <a
            className={`px-4 font-medium py-[5px]`}
            href="/"
          >
            Home
          </a>
          {categories.map((c) => (
            <a
              key={c.id}
              className={`px-4 font-medium py-[5px]`}
              href={`/news/category/${c.category}`}
            >
              {c.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderCategory;
