import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/navSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
	// here we are creating state variable for search functionality
	const [searchText, setSearchText] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [show, setShow] = useState(false);

	// console.log(searchText);
	// call the the search API
	useEffect(() => {
		// we make an API call after 200 milliseconds
		const timer = setTimeout(() => getSearchData(), 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchText]);

	const getSearchData = async () => {
		const data = await fetch(YOUTUBE_SEARCH_API + searchText);
		const json = await data.json();
		setSuggestions(json[1]);
	};

	const dispatch = useDispatch();

	function toggleMenuHandler() {
		dispatch(toggleMenu());
	}

	return (
		<div className="w-full md:max-w-[98%] mx-auto p-4 flex justify-between items-center shadow-sm">
			<div className="flex items-center ">
				<img
					src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
					alt="hamburger__Icon"
					width={35}
					className="cursor-pointer"
					onClick={() => {
						toggleMenuHandler();
					}}
				/>
				<img
					src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
					alt="youtube__Logo"
					width={160}
					className="ml-2"
				/>
			</div>
			<div>
				<div>
					<input
						type="text"
						className="border px-6 py-1.5 rounded-l-3xl w-[600px] placeholder:text-center"
						placeholder="Search"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
						onFocus={() => setShow(true)}
						onBlur={() => setShow(false)}
					/>
					<button className="font-semibold border rounded-r-3xl px-3 py-1.5 w-23 cursor-pointer active:opacity-30">
						Search
					</button>
				</div>

				{show && (
					<div className="fixed bg-white rounded w-[39%] shadow mt-1">
						<ul>
							{suggestions.map((item) => {
								return (
									<li className="px-3 py-1 hover:bg-gray-100">
										{item}
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</div>
			<div>
				<img
					src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
					alt="user__Icon"
					width={40}
				/>
			</div>
		</div>
	);
};

export default Head;
