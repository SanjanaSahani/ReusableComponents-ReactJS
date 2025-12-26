import React from "react";
import { FiMenu, FiSearch, FiMoreVertical, FiPlus } from "react-icons/fi";

function BottomAppBar() {
  return (
    <div className="h-[400px] w-full flex justify-center ">
      {/* Mobile container */}
      <div className="relative w-[360px] bg-white shadow-lg flex flex-col">

        {/* Scrollable Inbox */}
        <div className="flex-1 overflow-y-auto px-4 pt-6 pb-28">
          <h1 className="text-2xl font-semibold mb-4">Inbox</h1>

          {/* Today */}
          <p className="text-sm text-gray-500 mb-3">Today</p>

          <Message
            title="Brunch this week?"
            desc="I'll be in the neighbourhood this week. Let's grab a bite to eat"
            img="https://randomuser.me/api/portraits/men/32.jpg"
          />

          <Message
            title="Birthday Gift"
            desc="Do you have a suggestion for a good present for John on his work anniversary. I am really confused & would love your thoughts on it."
            img="https://randomuser.me/api/portraits/men/44.jpg"
          />

          {/* Yesterday */}
          <p className="text-sm text-gray-500 mt-6 mb-3">Yesterday</p>

          <Message
            title="Recipe to try"
            desc="I am trying out this new BBQ recipe, I think this might be amazing"
            img="https://randomuser.me/api/portraits/men/52.jpg"
          />

          <Message
            title="Yes!"
            desc="I have the tickets for ReactConf for this weekend"
            img="https://randomuser.me/api/portraits/women/65.jpg"
          />

          <Message
            title="Project Update"
            desc="The latest build is ready for review. Please check when free."
            img="https://randomuser.me/api/portraits/men/61.jpg"
          />

          <Message
            title="Meeting Notes"
            desc="Sharing the notes from yesterday’s client meeting."
            img="https://randomuser.me/api/portraits/women/41.jpg"
          />

          <Message
            title="Workout Plan"
            desc="I’ve shared my weekly workout routine with you."
            img="https://randomuser.me/api/portraits/men/29.jpg"
          />
        </div>

        {/* Bottom App Bar (fixed) */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-blue-600 flex items-center justify-between px-6">
          <FiMenu className="text-white text-xl cursor-pointer" />

          <div className="flex items-center gap-6 cursor-pointer">
            <FiSearch className="text-white text-xl" />
            <FiMoreVertical className="text-white text-xl" />
          </div>
        </div>

        {/* Floating Action Button */}
        <button className="absolute bottom-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-purple-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl cursor-pointer">
          <FiPlus />
        </button>
      </div>
    </div>
  );
}

function Message({ title, desc, img }) {
  return (
    <div className="flex gap-3 mb-1 p-2 cursor-pointer hover:bg-gray-50">
      <img
        src={img}
        alt="avatar"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600 leading-snug">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default BottomAppBar;
