import { FaRegStar } from "react-icons/fa";
import {
  IoCallOutline,
  IoChatbubbleEllipsesOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LuArchive } from "react-icons/lu";
import { NavLink } from "react-router";
import { Dropdown, Space } from "antd";
import { useUser } from "../context/UserContext";

const Sidebar = () => {
  const { user, logOut } = useUser();
  const username = user?.user_metadata.name;
  const items = [
    {
      key: "1",
      label: "My Account",
    },
    {
      key: "2",
      label: "Profile",
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: "Log Out",
      onClick: logOut,
    },
  ];
  return (
    <div className="flex flex-col justify-between items-center w-18 h-screen px-2 py-6 bg-white shadow-2xl fixed top-0 left-0 transition-all duration-300">
      {/* Top Section */}
      <div className="flex flex-col gap-6 items-center">
        {/* Logo */}
        <NavLink
          to={"/"}
          className="bg-blue-500 text-white font-bold text-2xl size-12 flex justify-center items-center rounded-xl transition-transform hover:scale-105"
        >
          {username ? username[0].toUpperCase() : "G"}
        </NavLink>
        {/* Menu Items */}
        <div className="flex flex-col gap-4">
          <NavLink
            className="group relative size-12 flex justify-center items-center rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            aria-label="Chat"
            role="button"
            tabIndex={0}
            to={"/chat"}
          >
            <IoChatbubbleEllipsesOutline className="text-gray-700 text-xl group-hover:text-blue-500 transition-colors" />
            <span className="absolute left-16 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Chat
            </span>
          </NavLink>
          <NavLink
            className="group relative size-12 flex justify-center items-center rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            aria-label="Call"
            role="button"
            tabIndex={0}
            to={"/call"}
          >
            <IoCallOutline className="text-gray-700 text-xl group-hover:text-blue-500 transition-colors" />
            <span className="absolute left-16 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Call
            </span>
          </NavLink>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 border-b-2 pb-4">
          <NavLink
            className="group relative size-12 flex justify-center items-center rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            aria-label="Favorites"
            role="button"
            tabIndex={0}
            to={"/favorites"}
          >
            <FaRegStar className="text-gray-700 text-xl group-hover:text-blue-500 transition-colors" />
            <span className="absolute left-16 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Favorites
            </span>
          </NavLink>
          <NavLink
            className="group relative size-12 flex justify-center items-center rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            aria-label="Archive"
            role="button"
            tabIndex={0}
            to={"/archive"}
          >
            <LuArchive className="text-gray-700 text-xl group-hover:text-blue-500 transition-colors" />
            <span className="absolute left-16 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Archive
            </span>
          </NavLink>
        </div>
        <Dropdown
          menu={{ items }}
          className=" size-12 flex justify-center items-center rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200"
        >
          <div onClick={(e) => e.preventDefault()}>
            <Space>
              <IoSettingsOutline className="text-gray-700 text-xl group-hover:text-blue-500 transition-colors" />
            </Space>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Sidebar;
