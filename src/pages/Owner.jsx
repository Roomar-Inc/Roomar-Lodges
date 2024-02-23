import React, { useEffect } from "react";
import {
  Link,
  Panel,
  List,
  ListItem,
  Fab,
  Icon,
  Button,
  Tab,
  Page,
} from "framework7-react";
import {
  UserIcon,
  Bars3BottomLeftIcon,
  InformationCircleIcon,
  XMarkIcon,
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  Cog8ToothIcon,
} from "@heroicons/react/20/solid";
import "swiper/css";
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext, useState } from "react";
import Navbottom from "../components/App/Navbottom";
import Cards from "../components/App/Card";
import ConfettiAnimation from "../components/App/Confetti";
import cf from "../../resources/cf-1.png";
import CreatePostForm from "./CreatePostForm";
import axiosPrivate from "../api/axios";
import Post from "./Post";

const Owner = () => {
  const { setPopupOpened } = useContext(GlobalContext);
  const [selected, setSelected] = useState("home");

  // State to store the list of posts
  const [posts, setPosts] = useState([]);
  const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false);

  useEffect(() => {
    // Fetch posts when the component mounts
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);

        const response = await axiosPrivate.get("/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(token);

        if (response.status === 200) {
          console.log(response)
          console.log(response.data)
          console.log(response.data.posts)
          console.log("ho", posts)
          // Order posts by createdAt in descending order (latest first)
          setPosts(response.data.posts);
          console.log("hi", posts)
        } else {
          console.error("Error fetching posts:", response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  // Function to add a new post to the list
  const addPost = (newPost) => {
    console.log("hello", posts)
    setPosts([...posts, newPost]);
    console.log("hiwi", posts)
    setCreatePostModalOpen(false); // Close the CreatePostForm modal after adding a new post
  };

  return (
    <Page id="home" className="bg-zinc-50">
      <Tab id="home" className="page-content" tabActive>
        {/* Left Panel */}
        <Panel left cover containerEl="#home" id="left-panel" className="fixed">
          <div className="mt-16">
            <UserIcon className="h-12 mx-auto text-zinc-500 rounded-full bg-zinc-100" />
            <div className="text-center text-md font-semibold">John Doe</div>
          </div>
          <div className="text-xs text-center text-rose-600">
            <Link>View profile</Link>
          </div>

          <List menuList outlineIos strongIos className="top-1/6">
            {/* <ListItem
          link
          title="Home"
          selected={selected === 'home'}
		  className={selected === 'home' ? 'active-item' : ''}
          onClick={() => setSelected('home')}
        >
         <HomeIcon className='h-5' slot='media'/>
        </ListItem> */}
            <ListItem
              link="/ownerhome"
              title="My Homes"
              selected={selected === "myhomes"}
              className={selected === "myhomes" ? "active-item" : ""}
              onClick={() => setSelected("wishlist")}
            >
              <HomeIcon className="h-5" slot="media" />
            </ListItem>
            <ListItem
              link="/analytics"
              title="My Analytics"
              selected={selected === "analytics"}
              className={selected === "analytics" ? "active-item" : ""}
              onClick={() => setSelected("roomie")}
            >
              <ChartBarIcon className="h-5" slot="media" />
            </ListItem>

            <ListItem
              link="/ownersettings"
              title="Settings"
              selected={selected === "ownersettings"}
              className={selected === "ownersettings" ? "active-item" : ""}
              onClick={() => setSelected("ownersettings")}
            >
              <Cog8ToothIcon className="h-5" slot="media" />
            </ListItem>

            <ListItem
              link="about"
              title="About"
              selected={selected === "about"}
              className={selected === "about" ? "active-item" : ""}
              onClick={() => setSelected("about")}
            >
              <InformationCircleIcon className="h-5" slot="media" />
            </ListItem>
          </List>

          <Link href="/">
            <div className="mx-4 bg-rose-100 p-3 rounded-md">
              <div className="flex items-center justify-between pb-2">
                <div className="font-semibold"> Find an accommodation </div>
                <XMarkIcon className="h-5" />
              </div>
              <p className="text-xs">
                Explore different homes that are suitable for you.
              </p>
            </div>
          </Link>
        </Panel>
        <div className="flex justify-between items-center p-4 pt-4 mb-12">
          {/* Open Left Panel Button */}

          <Button
            panelOpen="#left-panel"
            className="rounded-full bg-rose-100 text-rose-600 p-3 fixed z-10 top-6"
            onClick={() => {
              console.log("After state update:");
            }}
          >
            <Bars3BottomLeftIcon className="h-6" />
          </Button>

          <Link
            href="/owneroptions"
            className="rounded-full bg-rose-100 text-rose-600 p-3 fixed z-10 right-5 top-4"
          >
            <UserIcon className="h-6" />
          </Link>
        </div>
              {/* Main Content Starts Here */}
        {/* Conditionally render posts or CreatePostForm based on isCreatePostModalOpen */}
        {isCreatePostModalOpen ? (
          <CreatePostForm
            onCreatePost={addPost}
            onCancel={() => setCreatePostModalOpen(false)}
          />
        ) : (
          <>
            {posts.length > 0 ? (
              posts.map((post) => <Post key={post._id} post={post} />)
            ) : (
              <div className="mx-auto pt-12">
                <img src={cf} alt="confetti" />
                <div className="text-2xl font-semibold mx-auto text-center">
                  You're all set!
                </div>
                <div className="mx-auto flex justify-center text-md">
                  Make your first post now. Your viewers are waiting.
                </div>
              </div>
            )}

            <div className="bg-[#e11d48] text-white text-center rounded-full font-semibold py-2 text-xl w-[80%] mx-auto mt-4">
              <button onClick={() => setCreatePostModalOpen(true)}>
                Create post
              </button>
            </div>
          </>
        )}
        {/* Main Content Ends Here */}
      </Tab>
    </Page>
  );
};
export default Owner;
