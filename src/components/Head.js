import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { searchResults } from '../utils/searchSlice'
import { YOUTUBE_SEARCH_API, YOUTUBE_VIDEO_BY_KEYWORD_API, YOUTUBE_VIDEO_CATEGORY_API } from '../utils/constants'
import { getSearchSuggetsions } from '../utils/helpers'


const Head = () => {

  const [showSearchSuggestion, setshowSearchSuggestion] = useState(false);
  const [searchData, setSearchData] = useState([])
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();
  
  // const navigate = useNavigate();

  const items = useSelector(store => store.search)

  const getSearchSuggetsions = async (text) => {
    const data = await fetch(YOUTUBE_SEARCH_API + text);
    const json = await data.json();
    setSearchData(json[1])

    dispatch(searchResults({
      [searchText]: json[1]
    }));    
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (items[searchText]) {
        setSearchData(items[searchText]);
      } else {
        getSearchSuggetsions(searchText);
      }
    }, 200);

    return () => {
      clearTimeout(timer)
    }
  }, [searchText]);

  // const handleNavigate = ()=> {
  //   navigate("search_results?q=")
  // }

  const handleIsToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 shadow-lg'>
        <div className='flex col-span-1'>
            <img alt='icon' className='w-10 mx-2 cursor-pointer' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
            onClick={() => handleIsToggle()}
            />

            <a href='/'><img alt='youtube-logo' className='w-24 mx-1 mt-2' src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            /></a>
        </div>
        <div className='col-span-10 ml-36'>
            <input 
            type='text' 
            className='border border-black w-2/4 rounded-l-full p-2 px-4' 
            placeholder='🔍Search'
            value={searchText}
            onChange={(e)=> setSearchText(e.target.value)}
            onFocus={()=> setshowSearchSuggestion(true)}
            onBlur={()=> setshowSearchSuggestion(false)}
            />
            <button 
            className='border border-black rounded-r-full p-2 bg-gray-300 px-5'>🔍</button>
            {showSearchSuggestion && <ul className='absolute border-x-2 w-96 py-3 rounded-lg bg-white'>
              {searchData.map((search, i) => <li key={i} className='p-1 font-semibold px-5 bg-white hover:bg-gray-300 overflow-hidden'>{search}</li>)}
            </ul>}
        </div>
        
        <div className='col-span-1'>
            <img alt='user' className='w-8' src="https://cdn-icons-png.flaticon.com/512/552/552721.png"/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Head