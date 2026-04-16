import React, { useContext, useState } from "react";
import { FriendContext } from "../context/FriendContext";
import callImage from "../assets/call.png";
import textImg from "../assets/text.png";
import videoImg from "../assets/video.png";
import { IoIosArrowDropdown } from "react-icons/io";

const Timeline = () => {
  const { call, text, video} = useContext(FriendContext);
  const isEmpty = call.length === 0 && text.length === 0 && video.length === 0;
  const date = new Date();
    // shorting
  const [shortingType, setShortingType] = useState("");

  const allActivities = [
    ...call.map((c) => ({ ...c, type: "call" })),
    ...text.map((t) => ({ ...t, type: "text" })),
    ...video.map((v) => ({ ...v, type: "video" })),
  ];

  const sortedActivities = [...allActivities].sort((a, b) => {
    if (!shortingType) return 0;
    if (a.type === shortingType && b.type !== shortingType) {
      return -1; 
    }
    if (a.type !== shortingType && b.type === shortingType) {
      return 1;
    }
    return 0; 
  });

  return (
    <div className="container mx-auto my-20 space-y-5 px-5">
      <h1 className="text-4xl font-bold">Timeline</h1>
      {/* Shorting */}
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1 text-[#64748B]">
          Filter Timeline <IoIosArrowDropdown className="ml-10" />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => setShortingType("")}>
            <a>All</a>
          </li>
          <li onClick={() => setShortingType("call")}>
            <a>Call</a>
          </li>
          <li onClick={() => setShortingType("text")}>
            <a>Text</a>
          </li>
          <li onClick={() => setShortingType("video")}>
            <a>Video Call</a>
          </li>
        </ul>
      </div>
      {/*  */}

      {/* EMPTY STATE */}
      {isEmpty && (
        <div className="text-center py-20 bg-gray-50 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-gray-700">
            No Activity Yet
          </h2>
          <p className="text-gray-500 mt-2">
            No calls, texts, or video history found.
          </p>
          <p className="text-gray-400 mt-1">
            Please add some friends activity to see your timeline.
          </p>
        </div>
      )}

      {sortedActivities.map((item, index) => (
        <div key={index} className="flex gap-4 shadow py-5">
          <div className="pl-10">
            <img
              src={
                item.type === "call"
                  ? callImage
                  : item.type === "text"
                    ? textImg
                    : videoImg
              }
              alt={item.type}
            />
          </div>

          <div>
            <p>
              {item.type === "call" && `${item.name} is Called`}
              {item.type === "text" && `${item.name} is Texted`}
              {item.type === "video" && `${item.name} a Video Call`}
            </p>

            <p>
              {date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
