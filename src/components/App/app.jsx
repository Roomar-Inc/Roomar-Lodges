import { getDevice } from "framework7/lite-bundle";
import { f7, f7ready, App, View, Page } from "framework7-react";
import { KonstaProvider } from "konsta/react";

import capacitorApp from "../../js/capacitor-app";
import routes from "../../js/routes";
import store from "../../js/store";
import BottomNav from "./BottomNav";
import {
	GlobalContextProvider,
} from "../../contexts/GlobalContext";
import { change } from "dom7";
import InitApp from "./InitApp";

const MyApp = () => {
	const device = getDevice();
	// Framework7 Parameters
	const f7params = {
		name: "Roomar", // App name
		theme: "auto", // Automatic theme detection

		// App store
		store: store,
		// App routes
		routes: routes,

		// Input settings
		input: {
			scrollIntoViewOnFocus: device.capacitor,
			scrollIntoViewCentered: device.capacitor,
		},
		// Capacitor Statusbar settings
		statusbar: {
			iosOverlaysWebView: true,
			androidOverlaysWebView: false,
		},
	};

	f7ready(() => {
		// Init capacitor APIs (see capacitor-app.js)
		if (f7.device.capacitor) {
			capacitorApp.init(f7);
		}
		// Call F7 APIs here
	});

	return (
		<GlobalContextProvider>
				<InitApp f7params={f7params}/>
				<BottomNav />
		</GlobalContextProvider>
	);
};
export default MyApp;
