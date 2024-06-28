import React from "react";

const VideoCard = ({ info }) => {
	console.log(info);
	const { snippet, statistics } = info;
	const { channelTitle, description, thumbnails, title } = snippet;
	const { medium, high } = thumbnails;

    const{viewCount, likeCount} = statistics;

	return (
		<div className="w-60 border border-gray-400 p-2 rounded-xl cursor-pointer">
			<img src={medium.url} alt="" className="rounded-lg"/>
			<h3 className="font-semibold leading-tight mt-2">{title}</h3>
            <h2 className="font-bold mt-2">{channelTitle}</h2>
            <span>{viewCount} views</span>
		</div>
	);
};

export default VideoCard;
