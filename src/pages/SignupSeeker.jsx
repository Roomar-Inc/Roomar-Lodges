// Signup.jsx
import React, { useEffect, useState, useRef } from "react";
import {
  Navbar,
  Page,
  List,
  Icon,
  ListInput,
  Link,
  f7,
  ListItem,
} from "framework7-react";
import roomarlogo from "../../resources/roomar-rlo.png";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import axiosPrivate from "../api/axios.jsx";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Signup = ({ f7route, f7router }) => {
  const [role, setRole] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^(\+234\d{10}|^234\d{10}|^0[789]\d{9})$/; // Accepts +234, 234, or 0 followed by 7, 8, or 9 and then 9 more digits
  const apiUrl = import.meta.env.VITE_API_SIGN_UP;
  const [loading, setLoading] = useState(false);

  const [formErrors, setFormErrors] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    gender: "",
    password: "",
    phone: "",
  });

  const toastTop = useRef(null);

  const handleInputChange = (e) => {
    if (e.target.name === "role") {
      setFormData({
        ...formData,
        role: "seeker", // Set the role directly to "owner"
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
    } else if (
      name === "phone" &&
      (!phoneRegex.test(value) || value.length < 10)
    ) {
      error = "Invalid phone number (min 10 digits)";
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

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (Object.values(formErrors).some((error) => error)) {
        toast.error("Please input valid details");
        console.error("Form validation failed");
        return;
      }
      console.log(formData);
      console.log("Making request to:", "/api/v1/signup");
      const response = await axios.post(apiUrl, formData);
      console.log("Response:", response);
      openDialog(); // Open the dialog when loading starts

      console.log(response.data);
      if (response && response?.status === 201) {
        f7.dialog.close();
        // Navigate to the photo page after successful signup
        handleRouteToPhotoPage();
      }
    } catch (error) {
      showToastTop();
      console.error(error);
    }
  };

  const handleRouteToPhotoPage = () => {
    f7router.navigate("/signupnext");
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

  const openDialog = () => {
    f7.dialog.preloader();
  };

  useEffect(() => {
    // Extract role from dynamic route params
    if (f7route && f7route.params && f7route.params.role) {
      setRole(f7route.params.role);

      // Set formData.role directly to "owner"
      setFormData((prevFormData) => ({
        ...prevFormData,
        role: "seeker",
      }));
    }
  }, [f7route]);

  // ... (rest of the component)

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
        Welcome!
      </h1>
      <List form>
        <ListInput
          outline
          label="Full Name"
          floatingLabel
          type="text"
          value={formData.name}
          onInput={handleInputChange}
          name="name"
          placeholder="Your name"
          clearButton
        >
          <Icon icon="demo-list-icon" slot="media" />
        </ListInput>
        <ListInput
          outline
          label="Username"
          floatingLabel
          type="text"
          placeholder="Your username"
          value={formData.username}
          onInput={handleInputChange}
          name="username"
          clearButton
        >
          <Icon icon="demo-list-icon" slot="media" />
        </ListInput>
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
          type="text"
          floatingLabel
          outline
          name="role"
          label="Role"
          placeholder="Your role"
          readonly
          onInput={handleInputChange}
          value={formData.role}
          style={{
            paddingLeft: "0px",
            pointerEvents: "none",
            color: "black",
          }}
        ></ListInput>
        <ListInput
          outline
          floatingLabel
          label="Gender"
          name="gender"
          type="select"
          defaultValue="Male"
          placeholder="Please choose..."
          value={formData.gender}
          onInput={handleInputChange}
        >
          <Icon icon="demo-list-icon" slot="media" />
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </ListInput>
        <ListInput
          outline
          label="Password"
          floatingLabel
          type="password"
          placeholder="Set password"
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
        <ListInput
          outline
          label="Phone"
          floatingLabel
          type="tel"
          placeholder="Your phone number"
          value={formData.phone}
          onInput={handleInputChange}
          onBlur={handleBlur}
          name="phone"
          clearButton
        >
          <Icon icon="demo-list-icon" slot="media" />
        </ListInput>
        {formErrors.phone && (
          <ListItem className="mt-0 text-xs text-red-500 mb-2 pl-2 pt-0">
            {formErrors.phone}
          </ListItem>
        )}
        <div className="right-2">
          {/* <Link className="text-sm text-[#e11d48]">Forgot Your Password?</Link> */}
        </div>

        {/* Second layer */}
        <div className="bg-[#e11d48] text-white text-center rounded-full font-semibold py-2 text-xl mx-auto w-[90%]">
          <button type="submit" onClick={handleSignup}>
            {" "}
            Sign Up
          </button>
        </div>
        <p className="text-center text-sm mt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-[#e11d48] font-semibold">
            Login
          </Link>
        </p>
      </List>
    </Page>
  );
};

export default Signup;
