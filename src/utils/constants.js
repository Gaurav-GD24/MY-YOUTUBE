const API_KEY = "AIzaSyAmEU2PPA08XNVkR4Py9nIXX1lcQ0UaltY";

export const YOUTUBE_API_VIDEOS =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
	API_KEY;

export const YOUTUBE_SEARCH_API =
	"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
