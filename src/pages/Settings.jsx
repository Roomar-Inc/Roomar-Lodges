import {
	BellIcon,
	ChartBarIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	GlobeAltIcon,
	LockClosedIcon,
	MoonIcon,
} from "@heroicons/react/20/solid";
import { Link, List, ListItem, Page, Toggle } from "framework7-react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Settings = ({ f7router }) => {
	const { setShowNav } = useContext(GlobalContext);

	useEffect(() => {
		setShowNav(false);
	}, []);
	return (
		<Page className="bg-zinc-50">
			<nav className="p-4 bg-zinc-50 relative">
				<ChevronLeftIcon
					onClick={() => {
						f7router.back();
					}}
					className="h-7 z-50 relative"
				/>
				<h1 className="absolute z-10 my-0 w-full text-center left-0 top-4 text-lg font-semibold block p-0">
					{" "}
					Settings{" "}
				</h1>
			</nav>
			<List>
				{/* Language */}
				<div className="flex justify-between items-center bg-zinc-50 mb-3">
					<div className="flex items-center ml-4">
						<GlobeAltIcon className="h-5" />
						<ListItem title="Language" className="rounded list-none"></ListItem>
					</div>
					<div className="flex items-center bg-rose-100 px-3 rounded-full shadow-md mr-4">
						<div>
							<select name="language" defaultValue="english">
								<option value="english">English</option>
								<option value="igbo">Igbo</option>
								<option value="yoruba">Yoruba</option>
							</select>
						</div>
						<ChevronRightIcon className="h-5" />
					</div>
				</div>

				{/* Notifications */}
				<Link
					className="flex items-center justify-between mb-3 mx-4"
					href="/notifications"
				>
					<div className="flex items-center">
						<BellIcon className="h-5" />
						<ListItem
							title="Notifications"
							className="rounded bg-zinc-50 list-none"
						/>
					</div>
					<ChevronRightIcon className="h-5 mr-3" />
				</Link>

				{/* Dark Mode */}
				<div className="flex items-center justify-between mb-3 mx-4">
					<div className="flex items-center">
						<MoonIcon className="h-5" />

						<ListItem
							title="Dark Mode"
							className="rounded bg-zinc-50 list-none"
						></ListItem>
					</div>
					<Toggle slot="after" color="red"></Toggle>
				</div>

				{/* Security */}
				<Link
					className="flex items-center justify-between mb-3 mx-4"
					href="/security"
				>
					<div className="flex items-center">
						<LockClosedIcon className="h-5" />
						<ListItem
							title="Security"
							className="rounded bg-zinc-50 list-none"
						/>
					</div>
					<ChevronRightIcon className="h-5 mr-3" />
				</Link>

				{/* Data Saver */}
				<Link
					className="flex items-center justify-between mb-3 mx-4"
					href="/notifications"
				>
					<div className="flex items-center">
						<ChartBarIcon className="h-5" />
						<ListItem
							title="Data Saver"
							className="rounded bg-zinc-50 list-none"
						/>
					</div>
					<ChevronRightIcon className="h-5 mr-3" />
				</Link>
			</List>
		</Page>
	);
};

export default Settings;
