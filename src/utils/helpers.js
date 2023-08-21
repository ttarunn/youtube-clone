import { YOUTUBE_SEARCH_API } from "./constants";

export const getSearchSuggetsions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + "searchText", {
        method:"GET",
        crossorigin: true,    
        mode: 'no-cors', 
        headers:{
            "Access-Control-Allow-Origin":"*"
        }
    });
    const json = await data.json();
    // setSerachData(json[1])
    console.log(json[1])
  }