import React from "react";

const Button = (props) => {
	const { name } = props;
	return (
		<div className="px-3 flex justify-around py-1  w-min rounded-md cursor-pointer shadow-md hover:opacity-80 hover:bg-gray-900 hover:text-white duration-150 bg-gray-100">
			{name}
		</div>
	);
};

export default Button;
