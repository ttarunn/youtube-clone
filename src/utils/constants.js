const API_KEY = "AIzaSyD6cKmmvUkld7R6eIDcVl4ZG2PS7N9AZ_o"


export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" + API_KEY;


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_VIDEO_BY_KEYWORD = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=apple&key=${API_KEY}`;