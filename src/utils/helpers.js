import { YOUTUBE_VIDEO_BY_KEYWORD_API } from "./constants";

export const getSearchSuggetsions = async (keyword) => {
    const data = await fetch(`${YOUTUBE_VIDEO_BY_KEYWORD_API}`)
    // const json = await data.json()
    console.log(data)
    return data
}