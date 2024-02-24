import { Link, Page } from "framework7-react";
import { useEffect, useState } from "react";
import croppedlogo from "../../resources/cropped-logo.png";
import ownerlogo from "../../resources/owner-svg.png";
import seekerlogo from "../../resources/seeker-svg.png";
import reallogo from "../../resources/spin-logo.png";

const Loading = ({ setLoading }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 5000);

		return () => clearTimeout(timeout);
	}, [setLoading]);

	return (
		<div className="bg-[#e11d48] h-full w-full">
			{/* Your loading animation or logo */}
			<img src={reallogo} alt="" className="w-40 mx-auto pt-60 animate-pulse" />
		</div>
	);
};

const Roles = ({ f7router }) => {
	const [selectedRole, setSelectedRole] = useState("seeker");
	const [loading, setLoading] = useState(true);

	const handleImage = (role) => {
		setSelectedRole(role);
	};

	const handleButtonClick = (role) => {
		setSelectedRole(role);

		// Continue button now navigates to signup with the chosen role
		f7router.navigate("/signup/:", {
			props: {
				role,
			},
		});
	};

	return (
		<Page className="bg-zinc-50 pt-0">
			{/* Loading component */}
			{loading && <Loading setLoading={setLoading} />}

			<div className={`roles-container ${loading ? "hidden" : ""}`}>
				{/* Conditionally render the default image based on the selected role */}
				{selectedRole === "seeker" ? (
					<img src={seekerlogo} alt="Seeker" className="default-image" />
				) : (
					<img src={ownerlogo} alt="Owner" className="pt-20 bg-white" />
				)}

				{/* List section with rounded top borders */}

				{/* Buttons for roles */}
				<div className="rounded-t-3xl border-b-[#fff] bg-[#e11d48] border-2 border-white pb-9 flex flex-col items-center">
					<img src={croppedlogo} alt="" className="w-20 pt-2" />

					<button
						className="text-xl bg-white pt-4 border-2 border-white pb-4 mb-4 mt-3 rounded-md w-[80%]"
						onClick={() => handleImage("owner")}
					>
						Become a property owner
						<p className="italic text-base pb-2">Lease with Ease</p>
						{/* Continue button now navigates to signup with the chosen role */}
						<Link
							href={`/signup?role=${selectedRole}`}
							className="text-base bg-[#f9a0a5] px-2 py-1 font-semibold rounded-md"
							onClick={() => handleButtonClick("owner")}
						>
							Continue
						</Link>
					</button>

					<button
						className="text-xl bg-white pt-4 border-2 border-white pb-4 rounded-md w-[80%]"
						onClick={() => handleImage("seeker")}
					>
						Find an accommodation
						<p className="italic text-base pb-2">Rent without stress</p>
						{/* Continue button now navigates to signup with the chosen role */}
						<a
							href="/seekerhome"
							className="text-base bg-[#f9a0a5] px-2 py-1 font-semibold rounded-md"
						>
							Continue
						</a>
					</button>
				</div>
			</div>
		</Page>
	);
};

export default Roles;
