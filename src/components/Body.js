import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
	return (
		<div className="w-full md:max-w-[98%] mx-auto grid grid-cols-6 gap-4">
			<SideBar />
			<MainContainer />
		</div>
	);
};

export default Body;
