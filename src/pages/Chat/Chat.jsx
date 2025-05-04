import React from "react";
import ChatList from "../../components/ChatList";
import ChatWindow from "../../components/ChatWindow";
import Sidebar from "../../components/Sidebar";

const Chat = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <ChatList />
      <ChatWindow />
    </div>
  );
};

export default Chat;
