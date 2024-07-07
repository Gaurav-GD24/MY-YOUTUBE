import React from "react";
import Button from "./Button";

const Lists = [
	"All",
	"Gaming",
	"Cooking",
	"Music",
	"Live",
	"Cricket",
	"Football",
	"Cooking",
	"Travel",
	"Cars",
	"Kids",
];

const ButtonLists = () => {
	return (
		<div className="flex justify-left space-x-6 p-3">
			{Lists.map((category, i) => {
				return <Button name={category} key={i}></Button>;
			})}
		</div>
	);  
};

export default ButtonLists;
