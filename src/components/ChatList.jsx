import React from "react";

const ChatList = () => {
  const chats = [
    {
      id: 1,
      avatar: "https://via.placeholder.com/40?text=A",
      name: "Ayesha Khan",
      preview: "Hey, how are you?",
      time: "9:15 am",
      unread: 3,
    },
    {
      id: 2,
      avatar: "https://via.placeholder.com/40?text=S",
      name: "Sameer Ahmed",
      preview: "Check out this link: bit.ly/xyz123",
      time: "11:20 am",
      unread: 1,
    },
    {
      id: 3,
      avatar: "https://via.placeholder.com/40?text=R",
      name: "Rabia Siddiqui",
      preview: "Meeting at 3 PM today.",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 4,
      avatar: "https://via.placeholder.com/40?text=Z",
      name: "+92 333 9876543",
      preview: "Can you call me later?",
      time: "01/05/2025",
      unread: 0,
    },
    {
      id: 5,
      avatar: "https://via.placeholder.com/40?text=H",
      name: "Hassan Malik",
      preview: "Sent a photo",
      time: "30/04/2025",
      unread: 2,
    },
    {
      id: 6,
      avatar: "https://via.placeholder.com/40?text=F",
      name: "Fatima Noor",
      preview: "I'll be there in 10 mins",
      time: "29/04/2025",
      unread: 0,
    },
    {
      id: 7,
      avatar: "https://via.placeholder.com/40?text=O",
      name: "Omar Farooq",
      preview: "Voice message · 0:45",
      time: "28/04/2025",
      unread: 0,
    },
    {
      id: 8,
      avatar: "https://via.placeholder.com/40?text=M",
      name: "Maryam Bibi",
      preview: "Thanks for the update!",
      time: "27/04/2025",
      unread: 0,
    },
  ];

  return (
    <div className="flex">
      <div className="w-18 h-screen"></div>
      <div className="bg-white text-gray-900 h-screen flex flex-col shadow px-1">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Chats</h2>
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search or start a new chat"
            className="w-full bg-gray-100 text-gray-900 placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => {
            const firstLetter = chat.name.charAt(0).toUpperCase();
            return (
              <div
                key={chat.id}
                className="flex items-center p-3 hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <div className="size-10 rounded-full mr-3 flex items-center justify-center bg-blue-500 text-white font-medium">
                  {firstLetter}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{chat.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {chat.preview}
                  </p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-xs text-gray-500">{chat.time}</span>
                  {chat.unread > 0 && (
                    <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
