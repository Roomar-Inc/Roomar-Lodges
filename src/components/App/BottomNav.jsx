import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Tab } from "framework7-react";
import { gsap } from "gsap";
import Draggable from "gsap/src/Draggable";
import { useEffect, useRef, useState } from "react";

const BottomNav = () => {
	// const { setPopupOpened, showNav, popupOpened, togglePlay, anim, playing } =
	// 	useContext(GlobalContext);

	// const [controls, setControls] = useState(true);

	// const [element, setElement] = useState(null);

	// const [startY, setStartY] = useState(null);

	// const handleTouchStart = (e, el) => {
	// 	setElement(el);
	// 	setStartY(e.touches[0].clientY);
	// };

	// const handleTouchEnd = (e) => {
	// 	const deltaY = e.changedTouches[0].clientY - startY;

	// 	switch (element) {
	// 		case "controls":
	// 			if (deltaY > 50) {
	// 				// User swiped downwards
	// 				if (popupOpened) {
	// 					setPopupOpened(false);
	// 				} else {
	// 					setControls(false);
	// 				}
	// 			} else if (deltaY < -50) {
	// 				// User swiped upwards
	// 				if (!popupOpened) {
	// 					setPopupOpened(true);
	// 				}
	// 			}
	// 			break;
	// 		case "button":
	// 			if (deltaY > 50) {
	// 				// User swiped downwards
	// 				setControls(false);
	// 			} else if (deltaY < -50) {
	// 				// User swiped upwards
	// 				setControls(true);
	// 			}
	// 			break;
	// 		case "nav":
	// 			if (deltaY > 50) {
	// 				// User swiped downwards
	// 				setControls(false);
	// 			} else if (deltaY < -50) {
	// 				// User swiped upwards
	// 				setControls(true);
	// 			}
	// 			break;

	// 		default:
	// 			break;
	// 	}

	// 	setStartY(null);
	// };

	const draggableRef = useRef(null);
	gsap.registerPlugin(Draggable);

	useEffect(() => {
		if (draggableRef.current) {
			Draggable.create(draggableRef.current, {
				onDragStart: function () {
					// Initialize drag data if needed
				},
				onDrag: function () {
					// Update tab size based on drag position
					const newTabSize = Math.max(0, window.innerHeight - this.y);
					setTabSize(newTabSize);
				},
				// Other options...
			});
		}

		// Cleanup function (optional)
		return () => {
			Draggable.get(draggableRef.current)?.kill();
		};
	}, []);

	const [tabSize, setTabSize] = useState(0);

	// const toggleFullScreen = () => {
	// 	// Toggle between full screen and normal size
	// 	setTabSize((prevSize) => (prevSize === 0 ? window.innerHeight : 0));
	// };

	return (
		<Tab>
			<div
				ref={draggableRef}
				className={`fixed bottom-0 left-0 w-full z-[5000] text-zinc-50 transition-all rounded-t-md shadow-lg`}
				style={{ height: tabSize }}
			>
				<nav
					className={`flex flex-col justify-center mb-0 transition-all w-full h-max p-4 bg-gray-100 shadow-lg relative`}
				>
					<div className="block w-1/4 rounded-md border-4 border-gray-300 mx-auto m-0 mb-4">
						{" "}
					</div>
					<div className="p-4 pt-0 relative">
						<input
							placeholder="Explore Homes"
							className="w-full py-2 px-4 text-base text-zinc-700 rounded-md font-medium bg-zinc-100 border-2 border-zinc-400 placeholder:text-zinc-600"
						/>
						<div className="absolute top-2 right-7 bg-zinc-100">
							<MagnifyingGlassIcon className="h-6 text-zinc-400" />
						</div>
					</div>
				</nav>
			</div>
		</Tab>
	);
};

export default BottomNav;
