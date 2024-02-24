import {
  CheckIcon,
  ChevronLeftIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { List, ListInput, Page } from "framework7-react";

const EditProfile = ({ f7router }) => {
	return (
		<Page className="bg-zinc-50">
			<div className="flex items-center justify-between mt-6">
				<ChevronLeftIcon
					onClick={() => {
						f7router.back();
					}}
					className="h-7 z-50 relative ml-4"
				/>

				<h1 className="text-xl font-bold">Edit Profile</h1>
				<CheckIcon className="h-5 mr-10 text-rose-500" />
			</div>
			<div className="mt-6">
				<UserIcon className="h-20 mx-auto text-zinc-500 rounded-full bg-zinc-100" />
				<div className="text-center text-md font-semibold">John Doe</div>
			</div>
			<p className="ml-10 text-xl font-bold mt-6">Your Information</p>
			<List strongIos outlineIos dividersIos form formStoreData id="demo-form">
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
				<ListInput
					label="Birthday"
					name="birthday"
					type="date"
					defaultValue="2014-04-30"
					placeholder="Please choose..."
				/>
			</List>
		</Page>
	);
};

export default EditProfile;
