// CreatePostForm.jsx
import React, { useState } from "react";
import { ListInput, List, Page, Icon, ListItem } from "framework7-react";
import axiosPrivate from "../api/axios";

const CreatePostForm = ({ onCreatePost, onCancel = () => {} }) => {
  const [formData, setFormData] = useState({
    name: "",
    town: "",
    address: "",
    description: "",
    contact: "",
    price: 0,
    room_number: 0,
    type: "unfurnished",
    status: "available",
    photos: [],
  });

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    // Clear the form
    setFormData({
      name: "",
      town: "",
      address: "",
      description: "",
      contact: "",
      price: 0,
      room_number: 0,
      type: "unfurnished",
      status: "available",
      photos: [],
    });

    // Close the modal
    setIsModalOpen(false);

    onCancel && onCancel();
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files;

    if (selectedPhoto.length > 0 && formData.photos.length < 7) {
      // Convert FileList to an array
      const photoArray = Array.from(selectedPhoto);
      setFormData({
        ...formData,
        photos: photoArray,
      });
    } else {
      // Handle exceeding the maximum limit
      console.warn("Maximum limit of 7 photos reached.");
    }
    console.log(formData);
  };

  const handleRemovePhoto = (index) => {
    const updatedPhotos = formData.photos.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      photos: updatedPhotos,
    });
    console.log(formData);
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      // Create FormData object to send as multipart/form-data
      const formDataToSend = new FormData();

      // Append text fields to FormData
      formDataToSend.append("name", formData.name);
      formDataToSend.append("town", formData.town);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("contact", formData.contact);
      formDataToSend.append("room_number", formData.room_number);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("status", formData.status);

      // Append image files to FormData
      Array.from(formData.photos).forEach((photo) => {
        formDataToSend.append('photos', photo);
      });
      console.log(formData);

      // Make a POST request to the server with formDataToSend
      const response = await axiosPrivate.post("/post", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(formData);

      // Handle the response or perform any necessary actions
      if (response.status === 201) {
        console.log("Post created successfully:", response.data);

        // Clear the form or close the modal if needed
        setFormData({
          name: "",
          town: "",
          address: "",
          description: "",
          contact: "",
          price: 0,
          room_number: 0,
          type: "unfurnished",
          status: "available",
          photos: [],
        });

        // Close the modal
        onCancel && onCancel();

        // Trigger any callback function passed to onCreatePost
        onCreatePost(response.data);
      } else {
        // Handle the case where the request was not successful
        console.error("Error creating post:", response.data);
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <Page className="bg-zinc-50">
        <List strongIos dividersIos insetIos className="mt-16">
          {/* Your input fields go here */}
          <ListInput
            outline
            label="Name"
            floatingLabel
            type="text"
            placeholder="Enter a lodge name"
            value={formData.name}
            onInput={handleInputChange}
            name="name"
            clearButton
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            outline
            label="Town"
            floatingLabel
            type="text"
            placeholder="Enter a town or city"
            value={formData.town}
            onInput={handleInputChange}
            name="town"
            clearButton
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            outline
            label="Address"
            floatingLabel
            type="text"
            placeholder="Enter an address"
            value={formData.address}
            onInput={handleInputChange}
            name="address"
            clearButton
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            outline
            label="Description"
            floatingLabel
            type="text"
            placeholder="Describe the lodge"
            value={formData.description}
            onInput={handleInputChange}
            name="description"
            clearButton
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            outline
            label="Contact/Phone Number"
            floatingLabel
            type="text"
            placeholder="Enter a phone number"
            value={formData.contact}
            onInput={handleInputChange}
            name="contact"
            clearButton
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            outline
            label="Room Number"
            floatingLabel
            type="number"
            placeholder="Room Number"
            value={formData.room_number}
            onInput={handleInputChange}
            name="room_number"
            clearButton
          >
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            outline
            label="Price"
            floatingLabel
            type="number"
            placeholder="Enter a price"
            value={formData.price}
            onInput={handleInputChange}
            name="price"
            clearButton
          >
            <div slot="media" className="input-prefix">
              ₦
            </div>
            <Icon icon="demo-list-icon" slot="media" />
          </ListInput>
          <ListInput
            outline
            floatingLabel
            label="Type"
            type="select"
            defaultValue="unfurnished"
            placeholder="Please choose..."
            value={formData.type}
            name="type"
            onInput={handleInputChange}
          >
            <Icon icon="demo-list-icon" slot="media" />
            <option value="unfurnished">Unfurnished</option>
            <option value="furnished">Furnished</option>
          </ListInput>
          <ListInput
            outline
            floatingLabel
            label="Status"
            type="select"
            defaultValue="Available"
            placeholder="Please choose..."
            value={formData.status}
            name="status"
            onInput={handleInputChange}
          >
            <Icon icon="demo-list-icon" slot="media" />
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </ListInput>
          <ListItem title="Add Images">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              name="photos"
              multiple
              className=""
            />
          </ListItem>
          {/* Display added photos */}
          {formData.photos.map((photo, index) => (
            <div key={index} className="added-photo">
              <img
                src={URL.createObjectURL(photo)}
                alt={`Photo ${index + 1}`}
              />
              <button onClick={() => handleRemovePhoto(index)}>Remove</button>
            </div>
          ))}
          <button
            className="mt-4 bg-[#e11d48] w-[70%] mx-auto flex justify-center text-white rounded-full py-1 font-semibold"
            onClick={handleCreatePost}
          >
            Create Post
          </button>
          <button
            className="bg-gray-500 w-[70%] text-white mx-auto flex justify-center mt-4 rounded-full py-1 font-semibold"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </List>
      </Page>
    </div>
  );
};

export default CreatePostForm;
