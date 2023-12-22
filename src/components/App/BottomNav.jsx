import {
	ChevronRightIcon,
	ChevronLeftIcon,
	PlayIcon,
	HomeIcon,
	RectangleStackIcon,
	PauseIcon,
	MagnifyingGlassIcon,
	ChevronDoubleDownIcon,
} from "@heroicons/react/20/solid";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Link } from "framework7-react";

const BottomNav = () => {
	const { setPopupOpened, showNav, popupOpened, togglePlay, anim, playing } =
		useContext(GlobalContext);

	const [controls, setControls] = useState(true);

	const [element, setElement] = useState(null);

	const [startY, setStartY] = useState(null);

	const handleTouchStart = (e, el) => {
		setElement(el);
		setStartY(e.touches[0].clientY);
	};

	const handleTouchEnd = (e) => {
		const deltaY = e.changedTouches[0].clientY - startY;

		switch (element) {
			case "controls":
				if (deltaY > 50) {
					// User swiped downwards
					if (popupOpened) {
						setPopupOpened(false);
					} else {
						setControls(false);
					}
				} else if (deltaY < -50) {
					// User swiped upwards
					if (!popupOpened) {
						setPopupOpened(true);
					}
				}
				break;
			case "button":
				if (deltaY > 50) {
					// User swiped downwards
					setControls(false);
				} else if (deltaY < -50) {
					// User swiped upwards
					setControls(true);
				}
				break;
			case "nav":
				if (deltaY > 50) {
					// User swiped downwards
					setControls(false);
				} else if (deltaY < -50) {
					// User swiped upwards
					setControls(true);
				}
				break;

			default:
				break;
		}

		setStartY(null);
	};

	return (
		<div className="fixed bottom-0 left-0 w-full p-2 z-[5000] text-zinc-50 transition-all">
			<nav
				className={`flex justify-around mb-0 transition-all w-full h-max p-4 bg-rose-600 shadow-lg rounded-md relative`}
			>
				<Link tabLink="#home">
					<HomeIcon className="h-6" />
				</Link>
				<Link tabLink="#search">
					<MagnifyingGlassIcon className="h-6" />
				</Link>
			</nav>
		</div>
	);
};

export default BottomNav;
