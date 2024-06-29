import React, { useEffect, useState } from "react";
import { YOUTUBE_API_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	async function getData() {
		const data = await fetch(YOUTUBE_API_VIDEOS);
		const json = await data.json();
		setVideos(json.items);
	}

	// console.log(videos);

	return (
		<div className="p-2 flex gap-6 flex-wrap">
			{videos.map((eachVideo) => {
				return <VideoCard info={eachVideo} key={videos.id}/>;
			})}
		</div>
	);
};

export default VideoContainer;
