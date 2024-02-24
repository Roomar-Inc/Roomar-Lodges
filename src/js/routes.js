import PageTabs from "../components/App/PageTabs.jsx";
import About from "../pages/About.jsx";
import EditProfile from "../pages/EditProfile.jsx";
import Login from "../pages/Login.jsx";
import Owner from "../pages/Owner.jsx";
import OwnerOptions from "../pages/OwnerOptions.jsx";
import ProfileOptions from "../pages/ProfileOptions.jsx";
import Roles from "../pages/Roles.jsx";
import Settings from "../pages/Settings.jsx";
import Signup from "../pages/Signup.jsx";
import Subscriptions from "../pages/Subscriptions.jsx";
import Support from "../pages/Support.jsx";

var routes = [
	{
		path: "/",
		component: Roles,
	},
	{
		path: "/seekerhome",
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
	{
		path: "/signup/:role",
		component: Signup,
	},
	{
		path: "/login",
		component: Login,
	},
	{
		path: "/ownerhome",
		component: Owner,
	},
	{
		path: "/owneroptions",
		component: OwnerOptions,
	},
];

export default routes;
