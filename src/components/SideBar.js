import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	if (!isMenuOpen) {
		return null;
	}

	return (
		<div className="p-3 shadow min-h-screen">
			<>
				<ul className="mt-2">
					<li>Home</li>
					<li>Sports</li>
					<li>Videos</li>
					<li>Live</li>
				</ul>
			</>
			<div className="mt-4">
				<h1 className="font-bold">Subscription</h1>
				<ul>
					<li>Music</li>
					<li>Sports</li>
					<li>Gaming</li>
					<li>Movies</li>
				</ul>
			</div>

			<div className="mt-4">
				<h1 className="font-bold">Watch Later</h1>
				<ul>
					<li>Music</li>
					<li>Sports</li>
					<li>Gaming</li>
					<li>Movies</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
