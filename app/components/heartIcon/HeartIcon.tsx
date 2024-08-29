import React from "react";
import { SvgIcon } from "@mui/material";

interface HeartIconTypes {
	w?: string;
	firstColor: string;
	finalColor: string;
}

function HeartIcon({ w, firstColor, finalColor }: HeartIconTypes) {
	return (
		<div className="flex cursor-pointer drop-shadow">
			<SvgIcon className={`mr-1 w-[${w}px] h-[${w}px] drop-shadow`}>
				<defs>
					<linearGradient id={`grad${firstColor}-${finalColor}`} x1="0%" y1="0%" x2="100%" y2="0%">
						<stop
							offset="0%"
							style={{ stopColor: firstColor, stopOpacity: 0.7 }}
						/>
						<stop
							offset="100%"
							style={{ stopColor: finalColor, stopOpacity: 1 }}
						/>
						{/* <stop offset="0%" style={{ stopColor: "#fa7f7f", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#fce7ba", stopOpacity: 1 }} /> */}
					</linearGradient>
				</defs>
				<path
					d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
					fill={`url(#grad${firstColor}-${finalColor})`}
				/>
			</SvgIcon>
		</div>
	);
}

export default HeartIcon;
