import {
	BuildingLibraryIcon,
	ChevronLeftIcon,
	DocumentIcon,
	StarIcon,
	UserPlusIcon,
} from "@heroicons/react/20/solid";
import { Link, List, ListItem, Page, Tabs } from "framework7-react";

function About({ f7router }) {
	return (
		<Page className="flex flex-col bg-zinc-50">
			<Tabs>
				<ChevronLeftIcon
					onClick={() => {
						f7router.back();
					}}
					className="h-7 z-50 relative ml-4"
				/>

				<h1 className="ml-10 text-xl font-bold mt-6">About</h1>
				<List
					dividersIos
					simpleList
					strong
					outline
					inset
					className="top-1/6 mt-6 ml-6"
				>
					<Link className="block">
						<div className="flex items-center">
							<StarIcon className="h-5" />
							<ListItem title="Rate the app" />
						</div>
					</Link>

					<Link className="block">
						<div className="flex items-center">
							<UserPlusIcon className="h-5" />
							<ListItem title="Follow us on social media" />
						</div>
					</Link>

					<Link className="block">
						<div className="flex items-center mb-3">
							<BuildingLibraryIcon className="h-5" />
							<ListItem title="Legal" />
						</div>
					</Link>

					<Link className="block">
						<div className="flex items-center">
							<DocumentIcon className="h-5" />
							<ListItem title="Acknowledgements" />
						</div>
					</Link>
				</List>
			</Tabs>
		</Page>
	);
}

export default About;
