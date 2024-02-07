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

const Signup = ({ f7route, f7router }) => {
  const [role, setRole] = useState("");

  const handleRouteToOwnerHome = () => {
    // Replace 'f7router' with the correct variable if it's named differently in your code
    f7router.navigate('/ownerhome');
  };

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
        Welcome!
      </h1>

      <List strongIos dividersIos insetIos className="mt-2">
        <ListInput
          outline
          label="Full Name"
          floatingLabel
          type="text"
          placeholder="Your name"
          clearButton
        >
          <Icon icon="demo-list-icon" slot="media" />
        </ListInput>
        <ListInput
          outline
          label="Gender"
          floatingLabel
          type="select"
          name="gender"
          placeholder="Please choose..."
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
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
        <ListInput
          outline
          label="Phone"
          floatingLabel
          type="tel"
          placeholder="Your phone number"
          clearButton
        >
          <Icon icon="demo-list-icon" slot="media" />
        </ListInput>

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
        <div className="right-2">
          {/* <Link className="text-sm text-[#e11d48]">Forgot Your Password?</Link> */}
        </div>

        {/* Second layer */}
        <div className="bg-[#e11d48] text-white text-center rounded-full font-semibold py-2 text-xl mx-auto w-[90%]" onClick={handleRouteToOwnerHome}>
          Sign Up
        </div>
        <p className="text-center text-sm mt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-[#e11d48] font-semibold">
            Login
          </Link>
        </p>
        {/* <p className="text-center">Or sign up with</p> */}
      </List>
    </Page>
  );
};

export default Signup;
