// SignupPhotoPage.jsx
import React, { useState } from "react";
import { Page, Navbar, List, ListInput, ListItem, Button, Icon } from "framework7-react";
import axiosPrivate from "../api/axios.jsx";

const SignupPhotoPage = ({ f7router }) => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("photo", photo);

      const response = await axiosPrivate.post("/api/v1/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      handleRouteToOwnerHome();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRouteToOwnerHome = () => {
    f7router.navigate('/ownerhome');
  };

//   const handleRouteToLogin = () => {
//     f7router.navigate('/login');
//   };

  return (
    <Page>
      <Navbar title="Add Profile Photo" backLink="Back" />
      <List>
        <ListItem title="Profile Photo">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="input-file"
          />
        </ListItem>
      </List>
      <Button fill onClick={handlePhotoUpload}>
        Upload Photo
      </Button>
      <Button fill className="mt-2" onClick={handleRouteToOwnerHome}>
        Finish Signup
      </Button>
    </Page>
  );
};

export default SignupPhotoPage;
