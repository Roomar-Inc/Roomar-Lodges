import React, { useEffect, useState, useRef } from "react";
import {
  Navbar,
  Page,
  Input,
  List,
  Icon,
  ListInput,
  ListItem,
  Link,
  f7,
} from "framework7-react";
import roomarlogo from "../../resources/roomar-rlo.png";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import axiosPrivate from "../api/axios.jsx";
import toast, { Toaster } from "react-hot-toast";

const Login = ({ f7route, f7router }) => {
  const [role, setRole] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const toastTop = useRef(null);

  const handleInputChange = (e) => {
    if (e.target.name === "role") {
      setFormData({
        ...formData,
        role: "owner", // Set the role directly to "owner"
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }

    // Clear error when the user starts typing
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validate email, phone number, and password
    let error = "";

    if (name === "email" && !emailRegex.test(value)) {
      error = "Invalid Email address";
    } else if (name === "password" && !isValidPassword(value)) {
      error =
        "Password must have at least 8 characters, include numbers, alphabets, and special characters (# !@$%^&*)";
    }

    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const isValidPassword = (password) => {
    // Password must have at least 8 characters, include numbers, alphabets, and special characters (# !@$%^&*)
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (Object.values(formErrors).some((error) => error)) {
        toast.error("Please input valid details");
        console.error("Form validation failed");
        return;
      }
      console.log(formData);
      console.log("Making request to:", "/api/v1/login");
      const response = await axiosPrivate.post("/login", formData);
      console.log("Response:", response);

      console.log(response.data);
      if (response && response?.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        // Navigate to the photo page after successful signup
        handleRouteToOwnerHome();
      }
    } catch (error) {
      showToastTop();
      console.error(error);
    }
  };

  // const handleRouteToPhotoPage = () => {
  //   f7router.navigate("/signupnext");
  // };

  const openDialog = () => {
    f7.dialog.preloader();
  };

  const showToastTop = () => {
    // Create toast
    if (!toastTop.current) {
      toastTop.current = f7.toast.create({
        text: "Something went wrong!!!",
        position: "top",
        closeTimeout: 5000,
      });
    }
    // Open it
    toastTop.current.open();
  };

  const handleRouteToOwnerHome = () => {
    f7router.navigate("/ownerhome");
  };

  useEffect(() => {
    // Extract role from dynamic route params
    if (f7route && f7route.params && f7route.params.role) {
      setRole(f7route.params.role);

      // Set formData.role directly to "owner"
      // setFormData((prevFormData) => ({
      //   ...prevFormData,
      //   role: "owner",
      // }));
    }
  }, [f7route]);

  return (
    <Page className="bg-zinc-50">
      <ChevronLeftIcon
        onClick={() => {
          f7router.back();
        }}
        className="h-7 z-50 relative ml-4 mt-4"
      />
      <Toaster />
      <img src={roomarlogo} alt="" className="mx-auto w-20 mt-6" />
      <h1 className="text-lg font-semibold ml-6 text-[#e11d48] mt-4">
        Welcome back!
      </h1>

      <List strongIos dividersIos insetIos className="mt-2">
        <ListInput
          outline
          label="E-mail"
          floatingLabel
          type="email"
          value={formData.email}
          className={
            formErrors.email
              ? "text-red-500 pb-0 mb-0 bg-opacity-5 backdrop-blur focus:ring-red-500 focus:outline-none focus:border-red-50 placeholder:text-red-500"
              : "rounded-md bg-secondary bg-opacity-5 backdrop-blur placeholder:text-white focus:text-white focus:outline-none"
          }
          onInput={handleInputChange}
          onBlur={handleBlur}
          name="email"
          placeholder="Your e-mail"
          clearButton
        >
          <Icon icon="demo-list-icon" slot="media" />
        </ListInput>
        {formErrors.email && (
          <ListItem className="mt-0 text-xs text-red-500 mb-2 pl-2 pt-0">
            {formErrors.email}
          </ListItem>
        )}
        <ListInput
          outline
          label="Password"
          floatingLabel
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onInput={handleInputChange}
          onBlur={handleBlur}
          name="password"
          clearButton
        >
          <Icon icon="demo-list-icon" slot="media" />
        </ListInput>
        {formErrors.password && (
          <ListItem className="mt-0 text-xs text-red-500 mb-2 pl-2 pt-0">
            {formErrors.password}
          </ListItem>
        )}
        <div className="ml-4 cursor-pointer mb-6">
          <Link className="text-sm text-[#e11d48]" href="/forgotpassword">
            Forgot Your Password? Reset
          </Link>
        </div>
        {/* Second layer */}
        <div className="bg-[#e11d48] text-white cursor-pointer text-center rounded-full font-semibold py-2 text-xl w-[80%] mx-auto mt-4">
          <button
            type="submit"
            onClick={handleLogin}
            className="cursor-pointer"
          >
            Login
          </button>
        </div>
        <p className="text-center text-sm mt-2">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#e11d48] font-semibold">
            Sign up
          </Link>
        </p>
        {/* <p className="text-center">Or sign up with</p> */}
      </List>
    </Page>
  );
};

export default Login;
