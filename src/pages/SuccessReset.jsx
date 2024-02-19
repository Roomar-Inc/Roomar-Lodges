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

const SuccessReset = ({ f7route, f7router }) => {

  return (
    <Page className="bg-zinc-50">
      <ChevronLeftIcon
        onClick={() => {
          f7router.back();
        }}
        className="h-7 z-50 relative ml-4 mt-4"
      />
      <img src={roomarlogo} alt="" className="mx-auto w-20 mt-6" />
      <h1 className="text-lg font-semibold ml-6 text-black text-center mt-4">
        You have successfully reset your password
      </h1>
        {/* Second layer */}
        <div className="bg-[#e11d48] text-white cursor-pointer text-center rounded-full font-semibold py-2 text-xl w-[80%] mx-auto mt-4">
          <Link
            href="/"
          >
            Back to Login
          </Link>
        </div>
    </Page>
  );
};

export default SuccessReset;
