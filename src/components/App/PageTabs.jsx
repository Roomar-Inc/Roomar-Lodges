import { Page, Tabs } from "framework7-react";
import Home from "../../pages/Home";
import Search from "../../pages/Search";

const PageTabs = () => {
	// const { popupOpened, setPopupOpened, setShowNav } = useContext(GlobalContext);
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
