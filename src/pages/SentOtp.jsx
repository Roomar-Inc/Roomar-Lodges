import React, { useState, useRef } from "react";
import { Page, Icon, List, ListItem, Link, f7 } from "framework7-react";
import roomarlogo from "../../resources/roomar-rlo.png";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import toast, { Toaster } from "react-hot-toast";
import axiosPrivate from "../api/axios";

const OTPInput = ({ f7router }) => {
  const [otp, setOTP] = useState(Array(6).fill(""));
  const inputRefs = Array(6)
    .fill(null)
    .map(() => useRef());

  const toastTop = useRef(null);

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedOTP = [...otp];
      updatedOTP[index] = value;
      setOTP(updatedOTP);

      // Move focus to the next input field
      if (index < 5 && value.length === 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const joinedOTP = otp.join("");
      // Validate the OTP format
      const otpRegex = /^[0-9]{6}$/;

      if (!otpRegex.test(joinedOTP)) {
        toast.error("Please enter a valid six-digit OTP");
        console.error("Invalid OTP format");
        return;
      }

      console.log("Making request to:", "/api/v1/verifyOTP");
      // Make a request to verify the OTP using the /verifyOTP endpoint

      console.log(otp);

      console.log("Making request to:", "/api/v1/verifyOTP");

      const response = await axiosPrivate.post("/verifyOTP", {
        otp: joinedOTP,
      });

      console.log("Response:", response);

      console.log(response.data);

      if (response && response?.status === 200) {
        // Navigate to the photo page after successful signup
        // Now you can pass this resetToken to the next page
        const resetToken = response.data.resetToken;
        // Store the resetToken in sessionStorage
        localStorage.setItem("resetToken", resetToken);
        // Navigate to the reset password page
        handleRouteToResetPassword();
      }
    } catch (error) {
      showToastTop();
      console.error(error);
    }
  };

  const handleRouteToResetPassword = () => {
    f7router.navigate("/resetpassword");
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
        Please input your OTP
      </h1>

      <div className="flex gap-3 mt-2 text-lg font-semibold ml-4  mb-12">
        {otp.map((value, index) => (
          <input
            key={index}
            id="otp"
            ref={inputRefs[index]}
            type="text"
            value={value}
            onInput={(e) => handleInputChange(e, index)}
            className="border-2 border-black w-12 h-12 text-center bg-rose-100"
          />
        ))}
      </div>

      {/* Second layer */}
      <div className="bg-[#e11d48] text-white cursor-pointer text-center rounded-full font-semibold py-2 text-xl w-[80%] mx-auto mt-4">
        <button
          type="button"
          onClick={handleVerifyOTP}
          className="cursor-pointer"
        >
          Verify OTP
        </button>
      </div>
      <p className="text-center text-sm mt-2">
        <Link href="/login" className="text-[#e11d48] font-semibold">
          Cancel
        </Link>
      </p>
    </Page>
  );
};

export default OTPInput;
