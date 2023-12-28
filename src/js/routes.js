import PageTabs from "../components/App/PageTabs.jsx";
import About from "../pages/About.jsx";
import EditProfile from "../pages/EditProfile.jsx";
import ProfileOptions from "../pages/ProfileOptions.jsx";
import Settings from "../pages/Settings.jsx";
import Subscriptions from "../pages/Subscriptions.jsx";
import Support from "../pages/Support.jsx";

var routes = [
	{
		path: "/",
		component: PageTabs,
	},
	{
		path: "/settings",
		component: Settings,
	},
	{
		path: "/profile-options",
		component: ProfileOptions,
	},
	{
		path: "/about",
		component: About,
	},
	{
		path: "/support",
		component: Support,
	},
	{
		path: "/profile",
		component: EditProfile,
	},
	{
		path: "/subscriptions",
		component: Subscriptions,
	},
];

export default routes;
