import { Page, Popup, Tabs } from "framework7-react";
import Home from "../../pages/Home";
import { useContext, useEffect } from "react";
import PopUpPage from "./PopUpPage";
import { GlobalContext } from "../../contexts/GlobalContext";
import Search from "../../pages/Search";

const PageTabs = () => {
	const { popupOpened, setPopupOpened, setShowNav } = useContext(GlobalContext);
	return (
		<Page pageContent={false} className=" bg-zinc-50">
			

			{/* pages */}
			<Tabs>
				<Home />
				<Search />
			</Tabs>
		</Page>
	);
};

export default PageTabs;
