import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	if (!isMenuOpen) {
		return null;
	}

	return (
		<div className="p-3 shadow min-h-screen">
			<>
				<ul className="mt-2">
					<li>
						<Link to="/" className="cursor-pointer">Home</Link>
					</li>
					<li><Link>Sports</Link></li>
					<li><Link>Videos</Link></li>
					<li><Link>Live</Link></li>
				</ul>
			</>
			<div className="mt-4">
				<h1 className="font-bold">Subscription</h1>
				<ul>
					<li><Link>Music</Link></li>
					<li><Link>Sports</Link></li>
					<li><Link>Gaming</Link></li>
					<li><Link>Movies</Link></li>
				</ul>
			</div>

			<div className="mt-4">
				<h1 className="font-bold">Watch Later</h1>
				<ul>
					<li><Link>Music</Link></li>
					<li><Link>Sports</Link></li>
					<li><Link>Gaming</Link></li>
					<li><Link>Movies</Link></li>
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
