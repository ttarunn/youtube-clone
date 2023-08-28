import { YOUTUBE_SEARCH_API } from "./constants";

export const getSearchSuggetsions = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_API}apple`, { mode: 'no-cors' })
    // const json = await data.json()
    console.log(data)
    return data
}