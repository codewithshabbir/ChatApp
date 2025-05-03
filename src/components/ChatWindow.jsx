import React, { useRef } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

const ChatWindow = () => {
  const messages = [
    {
      id: 1,
      text: "Hi, how can I help you today?",
      sender: "contact",
      time: "10:15 am",
    },
    {
      id: 2,
      text: "Hey! I need some info about the project.",
      sender: "user",
      time: "10:16 am",
    },
    {
      id: 3,
      text: "Sure, let me get the details for you.",
      sender: "contact",
      time: "10:17 am",
    },
    {
      id: 4,
      text: "Thanks! Also, can we schedule a call?",
      sender: "user",
      time: "10:18 am",
    },
    {
      id: 5,
      text: "Yes, how about 3 PM today?",
      sender: "contact",
      time: "10:19 am",
    },
  ];

  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col w-full h-screen bg-white border-l-[1px] border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex">
          <button className="mr-4 text-gray-500 hover:text-gray-700">
            <IoIosArrowBack />
          </button>
          <h2 className="text-xl font-semibold">Ayesha Khan</h2>
        </div>
        <FaInfoCircle className="size-6"/>
      </div>

      {/* Message Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              {message.text}
            </div>
            <div className="text-xs text-gray-500 mt-1">{message.time}</div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-gray-100 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
