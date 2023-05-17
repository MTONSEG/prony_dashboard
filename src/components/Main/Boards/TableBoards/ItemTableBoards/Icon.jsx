import React from "react";
import { DragControls } from "framer-motion";


export function ReorderIcon({ dragControls, className }) {
	return (
		<svg
			className={className && className}
			xmlns="http://www.w3.org/2000/svg"
			width="9" height="15" viewBox="0 0 9 15"
			onPointerDown={(event) => dragControls.start(event)}
		>
			<circle cx="1.5" cy="1.5" r="1.5" fill="#E0E0E0" />
			<circle cx="1.5" cy="7.5" r="1.5" fill="#E0E0E0" />
			<circle cx="1.5" cy="13.5" r="1.5" fill="#E0E0E0" />
			<circle cx="7.5" cy="1.5" r="1.5" fill="#E0E0E0" />
			<circle cx="7.5" cy="7.5" r="1.5" fill="#E0E0E0" />
			<circle cx="7.5" cy="13.5" r="1.5" fill="#E0E0E0" />
		</svg>
	);
}
