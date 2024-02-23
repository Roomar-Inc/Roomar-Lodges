// Post.jsx
import React, { useState } from "react";
import Carousel from "../components/App/Carousel";
import { StarIcon } from "@heroicons/react/20/solid";
import axiosPrivate from "../api/axios";

const Post = ({ post }) => {
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [postDetails, setPostDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostClick = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      // Make a GET request to fetch the post by its ID
      const response = await axiosPrivate.get(`/post/${post._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(post._id);

      if (response.status === 200) {
        // Successfully fetched the post, update state to show post details
        console.log(post);
        console.log(post._id);
        setPostDetails(response.data);
        console.log(setPostDetails);
        console.log(response.data);
        setVisiblePosts([post._id]);
        setIsModalOpen(true);
      } else {
        console.error("Error fetching post:", response.data);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isPostVisible = (postId) => {
    return visiblePosts.includes(postId);
  };

  return (
    <div className="px-4 pb-4 flex flex-col justify-center mx-auto">
      {isPostVisible(post._id) && isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 max-w-lg">
            <button
              className="absolute top-2 text-white bg-[#e11d48] w-[50%] mx-auto flex justify-center right-24 mt-2 rounded-full py-1 font-semibold"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <div>
              <Carousel images={postDetails.photos} />
              <div className="py-4">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <p className="text-lg font-semibold">{postDetails.name}</p>
                    <div className="flex items-center">
                      <StarIcon className="h-4 pr-1" />
                      <p className="font-semibold">4.5</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold">
                      {" "}
                      &#8358; {postDetails.price}
                    </p>
                    <p className="mr-2 font-semibold">{postDetails.town}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                <div>
              <h2 className="font-semibold">Contact</h2>
              <p>{postDetails.contact}</p>
              </div>

              <div>
              <h2 className="font-semibold">Room Number</h2>
              <p>{postDetails.room_number}</p>
              </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <div>
              <h2 className="font-semibold">Type</h2>
              <p>{postDetails.type}</p>
              </div>
              <div>
                <h2 className="font-semibold">Status</h2>
                <p>{postDetails.status}</p>
                </div>
                </div>
                <div className="mt-3">
                <h2 className="font-semibold">Description</h2>
                <p>{postDetails.description}</p>
                </div>
                {/* Add other post details rendering here */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Render only when showPostDetails is false
        <div onClick={handlePostClick}>
          <Carousel images={post.photos} />
          <div className="py-4">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="text-lg font-semibold">{post.name}</p>
                <div className="flex items-center">
                  <StarIcon className="h-4 pr-1" />
                  <p className="font-semibold">4.5</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold"> &#8358; {post.price}</p>
                <p className="mr-2 font-semibold">{post.town}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
