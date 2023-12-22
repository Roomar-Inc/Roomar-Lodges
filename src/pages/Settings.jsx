import { Haptics, ImpactStyle } from "@capacitor/haptics";
import {
	ChevronLeftIcon,
} from "@heroicons/react/20/solid";
import {
	List,
	ListItem,
	Page,
} from "framework7-react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Settings = ({ f7router }) => {
	const { setShowNav, setPopupOpened } = useContext(GlobalContext);

	const hapticsImpactMedium = async () => {
		await Haptics.impact({ style: ImpactStyle.Medium });
	};

	useEffect(() => {
		setShowNav(false);
	}, []);
	return (
		<Page className="bg-zinc-50">
			<nav className="p-4 bg-zinc-100 relative">
				<ChevronLeftIcon
					onClick={() => {
						f7router.back();
					}}
					className="h-7 z-50 relative"
				/>
                <h1 className="absolute z-10 my-0 w-full text-center left-0 top-4 text-lg font-semibold block p-0"> Settings </h1>
			</nav>
			<List dividers className=" mt-0 mb-60">
				{["Account", 'Language', 'Audio Quality', 'Data Saver'].map((i) => (
					<ListItem
						link="#"
						key={i}
						title={i}
						className="relative active:bg-zinc-100/10"
					/>
				))}
			</List>
		</Page>
	);
};

export default Settings;
