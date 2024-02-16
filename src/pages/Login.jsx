import React, { useEffect, useState } from "react";
import {
  Navbar,
  Page,
  Input,
  List,
  Icon,
  ListInput,
  ListItem,
  Link,
} from "framework7-react";
import roomarlogo from "../../resources/roomar-rlo.png";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const Login = ({ f7route, f7router }) => {
  const [role, setRole] = useState("");

  useEffect(() => {
    // Extract role from dynamic route params
    if (f7route && f7route.params && f7route.params.role) {
      setRole(f7route.params.role);
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
          placeholder="Your e-mail"
          clearButton
        >
          <Icon icon="demo-list-icon" slot="media" />
        </ListInput>
        <ListInput
          outline
          label="Password"
          floatingLabel
          type="password"
          placeholder="Set password"
          clearButton
        >
          <Icon icon="demo-list-icon" slot="media" />
        </ListInput>
        <ListInput
          type="text"
          floatingLabel
          outline
          label="Role (read only)"
          placeholder="Your role"
          value="hi"
          readonly
          style={{
            paddingLeft: "0px",
            pointerEvents: "none",
            color: "#e11d48",
          }}
        ></ListInput>
        <div className="ml-4 cursor-pointer mb-6">
          <Link className="text-sm text-[#e11d48]">Forgot Your Password?</Link>
        </div>
        {/* Second layer */}
        <div className="bg-[#e11d48] text-white text-center rounded-full font-semibold py-2 text-xl w-[80%] mx-auto mt-4">
          Login
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
