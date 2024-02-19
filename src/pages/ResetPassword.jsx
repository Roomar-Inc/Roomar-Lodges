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

const ResetPassword = ({ f7route, f7router }) => {
  const [resetToken, setResetToken] = useState("");
  const [formErrors, setFormErrors] = useState({
    new_password: "",
  });
  const [formData, setFormData] = useState({
    new_password: "",
  });
  const toastTop = useRef(null);

  const handleInputChange = (e) => {
    if (e.target.name === "new_password") {
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

    // Validate password
    let error = "";
    if (name === "new_password" && !isValidPassword(value)) {
      error =
        "Password must have at least 8 characters, include numbers, alphabets, and special characters (# !@$%^&*)";
    }

    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const isValidPassword = (new_password) => {
    // Password must have at least 8 characters, include numbers, alphabets, and special characters (# !@$%^&*)
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(new_password);
  };

  const handleSetNewPassword = async (e) => {
    e.preventDefault();
    try {
      if (Object.values(formErrors).some((error) => error)) {
        toast.error("Please input valid details");
        console.error("Form validation failed");
        return;
      }

      // Get resetToken from localStorage
      const resetToken = localStorage.getItem("resetToken");

      const updatedFormData = {
        ...formData,
        resetToken: resetToken,
      };
      console.log(resetToken)
      console.log(updatedFormData);
      console.log("Making request to:", "/api/v1/resetPassword");
      const response = await axiosPrivate.patch(
        "/resetPassword",
        updatedFormData
      );
      console.log("Response:", response);

      console.log(response.data);
      if (response && response?.status === 201) {
        // Navigate to the successreset page after successful password reset
        handleRouteToSuccessReset();
      }
    } catch (error) {
      showToastTop();
      console.error(error);
    }
  };

  const openDialog = () => {
    f7.dialog.preloader();
  };

  const showToastTop = () => {
    if (!toastTop.current) {
      toastTop.current = f7.toast.create({
        text: "Something went wrong!!!",
        position: "top",
        closeTimeout: 5000,
      });
    }
    toastTop.current.open();
  };

  const handleRouteToSuccessReset = () => {
    f7router.navigate("/successreset");
  };

  useEffect(() => {
    // Extract resetToken from dynamic route params
    if (f7route && f7route.params && f7route.params.resetToken) {
      const token = f7route.params.resetToken;
      setResetToken(token);
    }
  }, [f7route]);

  return (
    <Page className="bg-zinc-50">
      {/* ... (unchanged code) */}
      <ChevronLeftIcon
        onClick={() => {
          f7router.back();
        }}
        className="h-7 z-50 relative ml-4 mt-4"
      />
      <Toaster />
      <img src={roomarlogo} alt="" className="mx-auto w-20 mt-6" />
      <h1 className="text-lg font-semibold ml-6 text-[#e11d48] mt-4">
        Set a new password
      </h1>

      <List strongIos dividersIos insetIos className="mt-2">
        <ListInput
          outline
          label="Password"
          floatingLabel
          type="password"
          placeholder="Set password"
          value={formData.new_password}
          onInput={handleInputChange}
          onBlur={handleBlur}
          name="new_password"
          clearButton
        >
          <Icon icon="demo-list-icon" slot="media" />
        </ListInput>
        {formErrors.new_password && (
          <ListItem className="mt-0 text-xs text-red-500 mb-2 pl-2 pt-0">
            {formErrors.new_password}
          </ListItem>
        )}
        {/* ... (unchanged code) */}
        <button
          type="submit"
          onClick={handleSetNewPassword}
          className="cursor-pointer bg-[#e11d48] text-white font-semibold text-lg w-[70%] rounded-full py-1 flex justify-center mx-auto"
        >
          Done
        </button>
      </List>
    </Page>
  );
};

export default ResetPassword;
