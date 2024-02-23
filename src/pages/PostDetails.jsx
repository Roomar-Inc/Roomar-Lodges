// PostDetails.jsx
import React from "react";
import Carousel from "../components/App/Carousel";
import { StarIcon } from "@heroicons/react/20/solid";

const PostDetails = ({ post }) => {
  return (
    <div className="px-4 pb-4 flex flex-col justify-center mx-auto">
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
            <p className="font-semibold">&#8358; {post.price}</p>
            <p className="mr-2 font-semibold">{post.town}</p>
          </div>
          {/* Additional Details */}
          <p className="text-sm mt-2">{post.description}</p>
          <p className="text-sm mt-2">Status: {post.status}</p>
          <p className="text-sm mt-2">Type: {post.type}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
