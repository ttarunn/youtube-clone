import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toogleTheme } from "../utils/appSlice";
import { Outlet } from "react-router-dom";
import { searchResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { BiVideoPlus, BiUserCircle, BiSolidMoon } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSun } from "react-icons/bs";

const Head = () => {
  const [showSearchSuggestion, setshowSearchSuggestion] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  // const navigate = useNavigate();

  const items = useSelector((store) => store.search);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const darkTheme = isDarkTheme ? "bg-black text-white shadow-sm shadow-white" : "bg-white";
  const getSearchSuggetsions = async (text) => {
    const data = await fetch(YOUTUBE_SEARCH_API + text);
    const json = await data.json();
    setSearchData(json[1]);

    dispatch(
      searchResults({
        [searchText]: json[1],
      })
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (items[searchText]) {
        setSearchData(items[searchText]);
      } else {
        getSearchSuggetsions(searchText);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const handleIsToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      className={`grid grid-flow-col p-1 shadow-lg sticky top-0 z-10 ${darkTheme} sm:p-5`}
    >
      <div className="flex col-span-2">
        <div className="mt-2.5 mx-1 sm:mt-0 sm:mx-0">
        {isMenuOpen ? (
          <AiOutlineClose
            className="mx-0 cursor-pointer text-xl sm:mx-2  sm:text-3xl sm:mt-1"
            onClick={() => handleIsToggle()}
          />
        ) : (
          <AiOutlineMenu
            className="mx-0 cursor-pointer text-xl sm:mx-2  sm:text-3xl sm:mt-1"
            onClick={() => handleIsToggle()}
          />
        )}
        </div>

        <img
          alt="youtube-logo"
          className="w-16 sm:w-24 sm:ml-1"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        />
      </div>
      <div className="col-span-8 sm:w-3/4 ml-10">
        <div className="flex">
        <input
          type="text"
          className={`border w-[70%] sm:w-full rounded-l-full p-2 sm:px-4 bg-transparent`}
          placeholder="🔍Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setshowSearchSuggestion(true)}
          onBlur={() => setshowSearchSuggestion(false)}
        />
        <button className="border border-black rounded-r-full p-1 bg-gray-300 sm:px-5 sm:p-2">
          🔍
        </button>
        
        </div>
        {showSearchSuggestion && (
          <ul
            className={`absolute border-x-2 py-3 w-[10rem] rounded-lg ${darkTheme} sm:w-[30.8rem]`}
          >
            {searchData.map((search, i) => (
              <li
                key={i}
                className="p-1 font-semibold px-5 hover:bg-gray-300 overflow-hidden"
              >
                {search}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={`col-span-2 flex justify-around ml-1 mt-2 gap-1 sm:mt-0`}>
        {isDarkTheme ? (
          <BsSun
            className="cursor-pointer text-xl sm:text-3xl"
            onClick={() => dispatch(toogleTheme())}
          />
        ) : (
          <BiSolidMoon
            className="cursor-pointer text-xl sm:text-3xl"
            onClick={() => dispatch(toogleTheme())}
          />
        )}
        <BiVideoPlus className="cursor-pointer text-xl sm:text-3xl" />
        <IoIosNotificationsOutline className="cursor-pointer text-xl sm:text-3xl" />
        <BiUserCircle className="cursor-pointer text-xl sm:text-3xl" />
      </div>
      <Outlet />
    </div>
  );
};

export default Head;
