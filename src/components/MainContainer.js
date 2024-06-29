import React from "react";
import ButtonLists from "./ButtonLists";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
	return (
		<div className="col-span-6">
			<ButtonLists />
			<VideoContainer />
		</div>
	);
};

export default MainContainer;
