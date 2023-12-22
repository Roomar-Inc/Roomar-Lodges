import PageTabs from "../components/App/PageTabs.jsx";
import Settings from "../pages/Settings.jsx";

var routes = [
	{
		path: "/",
		component: PageTabs,
	},
	{
		path: "/settings",
		component: Settings,
	},
];

export default routes;
