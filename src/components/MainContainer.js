import React from "react";
import ButtonLists from "./ButtonLists";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
	return (
		<div className="p-4 col-span-5">
			<ButtonLists />
			<VideoContainer />
		</div>
	);
};

export default MainContainer;
