import {
	List,
	ListInput,
	Page,
	Tabs
} from "framework7-react";

import { ChevronLeftIcon, UserIcon } from "@heroicons/react/20/solid";

function OwnerOptions({ f7router }) {
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

				<div className="mt-12">
					<UserIcon className="h-20 mx-auto text-zinc-500 rounded-full bg-zinc-100" />
					<div className="text-center text-xl font-semibold mb-4">John Doe</div>
				</div>

				<div className="text-black font-semibold px-2 py-1 bg-rose-100 text-center mx-auto w-[30%] text-md rounded-3xl mt-2">
					Edit My Profile
				</div>

				<List
					strongIos
					outlineIos
					dividersIos
					form
					formStoreData
					id="demo-form"
				>
					<ListInput
						label="Name"
						name="name"
						type="text"
						clearButton
						placeholder="Your name"
					/>
					<ListInput
						label="E-mail"
						name="email"
						type="email"
						clearButton
						placeholder="Your e-mail"
					/>
					<ListInput
						label="Phone"
						name="phone"
						type="tel"
						clearButton
						placeholder="Your phone number"
					/>
					<ListInput
						label="Gender"
						type="select"
						name="gender"
						placeholder="Please choose..."
					>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</ListInput>
					{/* <ListInput
          label="Birthday"
          name="birthday"
          type="date"
          defaultValue="2014-04-30"
          placeholder="Please choose..."
        /> */}
				</List>

				{/* <List dividersIos simpleList className="top-1/6 mt-12">
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
              <ArrowLeftStartOnRectangleIcon className="h-5" />
              <ListItem title="Log Out" />
            </div>
            <ChevronRightIcon className="h-6" />
          </Link>
        </List> */}
			</Tabs>
		</Page>
	);
}

export default OwnerOptions;
