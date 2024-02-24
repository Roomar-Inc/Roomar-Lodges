import { useState, useRef, useEffect } from "react";
import {
	AdjustmentsHorizontalIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

function Navbottom() {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [dragging, setDragging] = useState(false);
	const [startY, setStartY] = useState(0);
	const [currentHeight, setCurrentHeight] = useState(100); // Default height (adjust as needed)
	const draggableRef = useRef(null);

	const handleMouseDown = (e) => {
		setDragging(true);
		setStartY(e.clientY);
	};

	const handleMouseMove = (e) => {
		if (dragging) {
			const diff = startY - e.clientY;
			const newHeight = Math.max(0, currentHeight + diff);
			setCurrentHeight(newHeight);
			setStartY(e.clientY);
		}
	};

	const handleMouseUp = () => {
		setDragging(false);
	};

	const toggleFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};

	useEffect(() => {
		if (draggableRef.current) {
			draggableRef.current.addEventListener("mousedown", handleMouseDown);
			document.addEventListener("mousemove", handleMouseMove);
			document.addEventListener("mouseup", handleMouseUp);
		}

		return () => {
			if (draggableRef.current) {
				draggableRef.current.removeEventListener("mousedown", handleMouseDown);
			}
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [draggableRef, dragging]);

	return (
		<div
			ref={draggableRef}
			onClick={toggleFullScreen}
			className={`bg-gray-200 py-4 rounded-t-md top-50% bottom-0 fixed z-10 w-full ${
				isFullScreen ? "h-screen" : `h-${currentHeight}`
			}`}
		>
			<div className="block w-1/4 rounded-md border-4 border-gray-300 mx-auto m-0 mb-4 cursor-pointer"></div>
			<div className="flex items-center">
				<div
					className="h-10 w-10 p-2 bg-zinc-100 rounded-full mx-4"
					onClick={() => {
						/* Handle adjustments icon click */
					}}
				>
					<AdjustmentsHorizontalIcon />
				</div>
				<div className="pt-0 relative">
					<input
						placeholder="Explore Homes"
						className="w-full py-2 px-4 text-base text-zinc-700 rounded-md font-medium bg-zinc-100 border-2 border-zinc-400 placeholder:text-zinc-600"
					/>
					<div
						className="absolute top-2 right-7 bg-zinc-100"
						onClick={() => {
							/* Handle magnifying glass icon click */
						}}
					>
						<MagnifyingGlassIcon className="h-6 text-zinc-400" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbottom;
