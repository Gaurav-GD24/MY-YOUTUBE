import React from "react";

const VideoCard = ({ info }) => {
	// console.log(info);
	const { snippet, statistics } = info;
	const { channelTitle, description, thumbnails, title } = snippet;
	const { medium, high } = thumbnails;

    const{viewCount, likeCount} = statistics;

	return (
		<div className="w-[230px] p-2 rounded-xl cursor-pointer shadow-md">
			<img src={medium.url} alt="" className="rounded-lg"/>
			<h3 className="font-medium leading-tight mt-2 text-gray-600">{title}</h3>
            <h2 className="font-bold ">{channelTitle}</h2>
            <span className="">{viewCount} views</span>
		</div>
	);
};

export default VideoCard;
