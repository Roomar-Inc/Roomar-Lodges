import PageTabs from "../components/App/PageTabs.jsx";
import About from "../pages/About.jsx";
import EditOwner from "../pages/EditOwner.jsx";
import EditProfile from "../pages/EditProfile.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import Login from "../pages/Login.jsx";
import LoginSeeker from "../pages/LoginSeeker.jsx";
import Owner from "../pages/Owner.jsx";
import OwnerOptions from "../pages/OwnerOptions.jsx";
import ProfileOptions from "../pages/ProfileOptions.jsx";
import ResetPassword from "../pages/ResetPassword.jsx";
import Roles from "../pages/Roles.jsx";
import SentOtp from "../pages/SentOtp.jsx";
import Settings from "../pages/Settings.jsx";
import Signup from "../pages/Signup.jsx";
import SignupPhotoPage from "../pages/SignupPhoto.jsx";
import SignupSeeker from "../pages/SignupSeeker.jsx";
import Subscriptions from "../pages/Subscriptions.jsx";
import SuccessReset from "../pages/SuccessReset.jsx";
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
	  {
		path: "/editowner",
		component: EditOwner,
	  },
	  {
		path: "/signupnext",
		component: SignupPhotoPage,
	  },
	  {
		path: "/signupseeker",
		component: SignupSeeker,
	  },
	  {
		path: "/loginseeker",
		component: LoginSeeker,
	  },
	  {
		path: "/forgotpassword",
		component: ForgotPassword,
	  },
	  {
		path: "/otp",
		component: SentOtp,
	  },
	  {
		path: "/resetpassword",
		component: ResetPassword,
	  },
	  {
		path: "/successreset",
		component: SuccessReset,
	  },

];

export default routes;
