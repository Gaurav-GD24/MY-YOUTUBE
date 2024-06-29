import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
	return (
		<div className="w-full min-h-screen md:max-w-[98%] mx-auto grid grid-cols-7 gap-4">
			<SideBar />
			<Outlet />
		</div>
	);
};

export default Body;
