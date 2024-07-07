import React, { useEffect, useState } from "react";
import { YOUTUBE_API_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
				// console.log(eachVideo);
				return (
					<Link to={"/watch?v=" + eachVideo.id} key={eachVideo.id}>
						<VideoCard info={eachVideo} />
					</Link>
				);
			})}
		</div>
	);
};

export default VideoContainer;
