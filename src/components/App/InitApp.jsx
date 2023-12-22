import { App, Page, Popup, View } from "framework7-react";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import PopUpPage from "./PopUpPage";

const InitApp = ({ f7params }) => {
	const { setShowNav, popupOpened, setPopupOpened } = useContext(GlobalContext);

	const handleRouteChange = (route) => {
		if (route.url === "/") {
			setTimeout(() => {
				setShowNav(true);
			}, 350);
		}
	};
	return (
		<App
			on={{
				routeChange: handleRouteChange,
			}}
			colorTheme="red"
			className="h-full"
			{...f7params}
		>
			<Page>
				{/* Your main view, should have "view-main" class */}
				{/* bottom nav */}
				<View main className="safe-areas" url="/" />
			</Page>
			{/* pop up */}
			<Popup
				className="h-full overflow-hidden w-full z-[1]"
				swipeToClose="to-bottom"
				swipeHandler=".swipe-handler"
				opened={popupOpened}
				onPopupClosed={() => setPopupOpened(false)}
				backdrop={false}
			>
				<PopUpPage />
			</Popup>
		</App>
	);
};

export default InitApp;
