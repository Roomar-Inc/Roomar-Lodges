import { Link, Tab } from "framework7-react";
import { UserIcon } from "@heroicons/react/20/solid";
import "swiper/css";
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";

const Home = () => {
	const { setPopupOpened } = useContext(GlobalContext);
	return (
		<Tab id="home" className="page-content pb-72" tabActive>
			<div className="flex justify-between items-center p-4">
				<h1 className=" text-3xl font-semibold text-zinc-800">Home</h1>
				<Link href="/settings" className="rounded-full bg-rose-100 text-rose-600 p-2">
					<UserIcon className="h-5" />
				</Link>
			</div>
		</Tab>
	);
};
export default Home;
