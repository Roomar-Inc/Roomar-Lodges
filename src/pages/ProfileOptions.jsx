import {
	ArrowLeftOnRectangleIcon,
	ChatBubbleOvalLeftEllipsisIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	Cog8ToothIcon,
	UserIcon,
} from "@heroicons/react/20/solid";
import { Link, List, ListItem, Page, Tabs } from "framework7-react";

function ProfileOptions({ f7router }) {
	return (
		<Page className="bg-zinc-50">
			<Tabs>
				{/* <Navbar title="More User Options" backLink="Back" /> */}

				<ChevronLeftIcon
					onClick={() => {
						f7router.back();
					}}
					className="h-7 z-50 relative ml-4 mt-4"
				/>

				<div className="mt-16">
					<UserIcon className="h-20 mx-auto text-zinc-500 rounded-full bg-zinc-100" />
					<div className="text-center text-md font-semibold">John Doe</div>
				</div>

				<List dividersIos simpleList className="top-1/6 mt-12">
					<Link
						className="flex items-center justify-between mx-6"
						href="/profile"
					>
						<div className="flex items-center mb-3">
							<UserIcon className="h-5" />
							<ListItem title="My Profile" />
						</div>
						<ChevronRightIcon className="h-6" />
					</Link>

					<Link
						className="flex items-center justify-between mx-6"
						href="/support"
					>
						<div className="flex items-center mb-3">
							<ChatBubbleOvalLeftEllipsisIcon className="h-5" />
							<ListItem title="Support" />
						</div>
						<ChevronRightIcon className="h-6" />
					</Link>

					<Link
						className="flex items-center justify-between mx-6"
						href="/settings"
					>
						<div className="flex items-center mb-3">
							<Cog8ToothIcon className="h-5" />
							<ListItem title="Settings" />
						</div>
						<ChevronRightIcon className="h-6" />
					</Link>

					<Link className="flex items-center justify-between mx-6">
						<div className="flex items-center">
							<ArrowLeftOnRectangleIcon className="h-5" />
							<ListItem title="Log Out" />
						</div>
						<ChevronRightIcon className="h-6" />
					</Link>
				</List>
			</Tabs>
		</Page>
	);
}

export default ProfileOptions;
