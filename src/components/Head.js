import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toogleTheme } from "../utils/appSlice";
import { Outlet } from "react-router-dom";
import { searchResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { BiVideoPlus, BiUserCircle, BiSolidMoon } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSun } from 'react-icons/bs'

const Head = () => {
  const [showSearchSuggestion, setshowSearchSuggestion] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const dispatch = useDispatch();

  // const navigate = useNavigate();

  const items = useSelector((store) => store.search);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const darkTheme = isDarkTheme ? 'bg-black text-white':'bg-white'
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
    <div className={`grid grid-flow-col p-5 shadow-lg sticky top-0 z-10 ${darkTheme}`}>
      <div className="flex col-span-1">
        {isMenuOpen ? (
          <AiOutlineClose
            size={"2rem"}
            className="mx-2 cursor-pointer"
            onClick={() => handleIsToggle()}
          />
        ) : (
          <AiOutlineMenu
            size={"2rem"}
            className="mx-2 cursor-pointer"
            onClick={() => handleIsToggle()}
          />
        )}

        <a href="/">
          <img
            alt="youtube-logo"
            className="w-24 mx-1 mt-2"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </a>
      </div>
      <div className="col-span-9 ml-36">
        <input
          type="text"
          className="border border-black w-2/4 rounded-l-full p-2 px-4 bg-transparent"
          placeholder="🔍Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setshowSearchSuggestion(true)}
          onBlur={() => setshowSearchSuggestion(false)}
        />
        <button className="border border-black rounded-r-full p-2 bg-gray-300 px-5">
          🔍
        </button>
        {showSearchSuggestion && (
          <ul className={`absolute border-x-2 w-96 py-3 rounded-lg ${darkTheme}`}>
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

      <div className="col-span-2 flex justify-around">
        {isDarkTheme ? <BsSun size={"2rem"} className="cursor-pointer" onClick={()=> dispatch(toogleTheme())}/> : <BiSolidMoon size={"2rem"} className="cursor-pointer" onClick={()=> dispatch(toogleTheme())}/>}
        <BiVideoPlus size={"2rem"} className="cursor-pointer" />
        <IoIosNotificationsOutline size={"2rem"} className="cursor-pointer" />
        <BiUserCircle className="w-8 h-8 cursor-pointer" />
      </div>
      <Outlet />
    </div>
  );
};

export default Head;
