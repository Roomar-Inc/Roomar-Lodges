import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/20/solid";
import { Link, Tab } from "framework7-react";

const Search = () => {
	return (
		<Tab id="search" className="page-content pb-72">
			<div className="flex justify-between items-center p-4">
				<h1 className=" text-3xl font-semibold text-zinc-800">Search</h1>
				<Link href='/settings' className="rounded-full bg-rose-100 text-rose-600 p-2">
					<UserIcon className="h-5" />
				</Link>
			</div>
			<div className="p-4 pt-0 relative">
				<input
					placeholder="Search"
					className="w-full py-2 px-4 text-base rounded-md font-medium bg-zinc-100 border-2 border-zinc-400 placeholder:text-zinc-600"
				/>
				<div className="absolute top-2 right-7 bg-zinc-100">
					<MagnifyingGlassIcon className="h-6 text-zinc-400" />
				</div>
			</div>
		</Tab>
	);
};

export default Search;
