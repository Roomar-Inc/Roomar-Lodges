import {
	Bars3BottomLeftIcon,
	ChartBarIcon,
	Cog8ToothIcon,
	HomeIcon,
	InformationCircleIcon,
	UserIcon,
	XMarkIcon,
} from "@heroicons/react/20/solid";
import {
	Button,
	Link,
	List,
	ListItem,
	Page,
	Panel,
	Tab,
} from "framework7-react";
import { useState } from "react";
import "swiper/css";
import cf from "../../resources/cf-1.png";

const Owner = () => {
	// const { setPopupOpened } = useContext(GlobalContext);
	const [selected, setSelected] = useState("home");

	return (
		<Page id="home" className="bg-zinc-50">
			<Tab id="home" className="page-content" tabActive>
				{/* Left Panel */}
				<Panel left cover containerEl="#home" id="left-panel" className="fixed">
					<div className="mt-16">
						<UserIcon className="h-12 mx-auto text-zinc-500 rounded-full bg-zinc-100" />
						<div className="text-center text-md font-semibold">John Doe</div>
					</div>
					<div className="text-xs text-center text-rose-600">
						<Link>View profile</Link>
					</div>

					<List menuList outlineIos strongIos className="top-1/6">
						{/* <ListItem
          link
          title="Home"
          selected={selected === 'home'}
		  className={selected === 'home' ? 'active-item' : ''}
          onClick={() => setSelected('home')}
        >
         <HomeIcon className='h-5' slot='media'/>
        </ListItem> */}
						<ListItem
							link="/ownerhome"
							title="My Homes"
							selected={selected === "myhomes"}
							className={selected === "myhomes" ? "active-item" : ""}
							onClick={() => setSelected("wishlist")}
						>
							<HomeIcon className="h-5" slot="media" />
						</ListItem>
						<ListItem
							link="/analytics"
							title="My Analytics"
							selected={selected === "analytics"}
							className={selected === "analytics" ? "active-item" : ""}
							onClick={() => setSelected("roomie")}
						>
							<ChartBarIcon className="h-5" slot="media" />
						</ListItem>

						<ListItem
							link="/ownersettings"
							title="Settings"
							selected={selected === "ownersettings"}
							className={selected === "ownersettings" ? "active-item" : ""}
							onClick={() => setSelected("ownersettings")}
						>
							<Cog8ToothIcon className="h-5" slot="media" />
						</ListItem>

						<ListItem
							link="about"
							title="About"
							selected={selected === "about"}
							className={selected === "about" ? "active-item" : ""}
							onClick={() => setSelected("about")}
						>
							<InformationCircleIcon className="h-5" slot="media" />
						</ListItem>
					</List>

					<Link href="/download-link">
						<div className="mx-4 bg-rose-100 p-3 rounded-md">
							<div className="flex items-center justify-between pb-2">
								<div className="font-semibold"> Find an accommodation </div>{" "}
								<XMarkIcon className="h-5" />
							</div>
							<p className="text-xs">
								Explore different homes that are suitable for you.
							</p>
						</div>
					</Link>
				</Panel>
				<div className="flex justify-between items-center p-4 pt-4 mb-12">
					{/* Open Left Panel Button */}

					<Button
						panelOpen="#left-panel"
						className="rounded-full bg-rose-100 text-rose-600 p-3 fixed z-10 top-6"
						onClick={() => {
							console.log("After state update:");
						}}
					>
						<Bars3BottomLeftIcon className="h-6" />
					</Button>

					<Link
						href="/owneroptions"
						className="rounded-full bg-rose-100 text-rose-600 p-3 fixed z-10 right-5 top-4"
					>
						<UserIcon className="h-6" />
					</Link>
				</div>
				<img src={cf} alt="confetti" className="mx-auto pt-12" />
				<div className="text-2xl font-semibold mx-auto text-center">
					You&apos;re all set!
				</div>
				<div className="mx-auto flex justify-center text-md">
					Make your first post now. Your viewers are waiting.
				</div>
				<div className="bg-[#e11d48] text-white text-center rounded-full font-semibold py-2 text-xl w-[80%] mx-auto mt-4">
					Create post
				</div>
			</Tab>
		</Page>
	);
};
export default Owner;
