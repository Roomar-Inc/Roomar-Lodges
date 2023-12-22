import { Page } from "framework7-react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
const PopUpPage = ({}) => {
	const { popupOpened, loading, setLoading } =
		useContext(GlobalContext);

	const [top, setTop] = useState(true);

	useEffect(() => {
		if (popupOpened) {
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}
	}, [loading, popupOpened]);
	return (
		<Page>
			<div
				className="h-full overflow-scroll w-full top-0 left-0 backdrop-blur-2xl bg-zinc-900 pt-0 font-semibold relative"
				onScroll={(e) => {
					setTop(e.currentTarget.scrollTop);
				}}
			>
				<button className="flex justify-center swipe-handler w-full sticky top-0 bg-zinc-900 py-5 z-20">
					<div className="w-20 h-1 bg-zinc-400"></div>
				</button>
				<div className={`p-4 py-0 ${top < 10 ? "swipe-handler" : ""}`}>
					{loading && (
						<div className="flex-col flex gap-6">
							<div className="flex flex-col gap-2 animate-pulse">
								<div className="h-4 w-full bg-zinc-600"></div>
								<div className="h-4 w-2/5 bg-zinc-600"></div>
								<div className="h-4 w-3/5 bg-zinc-600"></div>
							</div>
							<div className="flex flex-col gap-2 animate-pulse">
								<div className="h-4 w-2/5 bg-zinc-600"></div>
								<div className="h-4 w-full bg-zinc-600"></div>
								<div className="h-4 w-3/5 bg-zinc-600"></div>
							</div>
							<div className="flex flex-col gap-2 animate-pulse">
								<div className="h-4 w-3/5 bg-zinc-600"></div>
								<div className="h-4 w-2/5 bg-zinc-600"></div>
								<div className="h-4 w-full bg-zinc-600"></div>
							</div>
						</div>
					)}
				</div>
			</div>
		</Page>
	);
};

export default PopUpPage;
