import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/navSlice";

const Head = () => {
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
				<input
					type="text"
					className="border-2 p-1.5 rounded-l-3xl w-[400px] placeholder:text-center"
					placeholder="Search"
				/>
				<button className="font-semibold border-2 rounded-r-3xl px-3 py-1.5 w-23">
					Search
				</button>
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
