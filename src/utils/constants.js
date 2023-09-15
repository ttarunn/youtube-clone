export const API_KEY = "AIzaSyBqZJznLp_2ZFzTZZirocY0SMSIJF0dWa8"


export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${API_KEY}`;


export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_VIDEO_BY_KEYWORD_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=apple&key=${API_KEY}`;


export const COMMENT_API = 'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=ay4MKe1u7Ec&key=' + API_KEY;

export const LIVE_CHAT_COUNT = 60

