export const API_KEY = "AIzaSyD6cKmmvUkld7R6eIDcVl4ZG2PS7N9AZ_o"


export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" + API_KEY;


export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_VIDEO_BY_KEYWORD_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=apple&key=${API_KEY}`;

export const YOUTUBE_VIDEO_CATEGORY_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=amazon&key='+ API_KEY


// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1
