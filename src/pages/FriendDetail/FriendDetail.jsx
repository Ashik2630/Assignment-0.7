import React, { useContext } from "react";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import callImage from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";
import { FriendContext } from "../../context/FriendContext";

const FriendDetail = () => {
  const { friendId } = useParams();
  const friends = useLoaderData();

  const friend = friends.find((f) => f.id == friendId);

  const {
    name,
    email,
    picture,
    tags,
    status,
    bio,
    next_due_date,
    goal,
    days_since_contact,
  } = friend;

  const { handleCallButton, handleTextButton, handleVideoButton } =
    useContext(FriendContext);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
      {/* LEFT SIDE */}
      <div className="space-y-6 ">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center transition hover:scale-105">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-3"
            src={picture}
            alt=""
          />

          <h3 className="text-lg font-bold">{name}</h3>

          <span className="inline-block bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full mt-2">
            {status}
          </span>

          <div className="mt-3 space-x-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-500 mt-3 italic">"{bio}"</p>

          <p className="text-sm text-gray-500 mt-2">
            Preferred: <span className="font-medium">{email}</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3 ">
          <button className=" btn w-full justify-center transition hover:scale-105">
            <RiNotificationSnoozeLine /> Snooze 2 Weeks
          </button>
          <button className="btn w-full justify-center transition hover:scale-105 ">
            <BsArchive /> Archive
          </button>
          <button className="btn w-full justify-center transition hover:scale-105 text-red-500">
            <RiDeleteBinLine /> Delete
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-2 space-y-6 ">
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className="bg-white rounded-xl shadow-md p-6 text-center transition hover:scale-105">
            <h3 className="text-2xl font-bold text-green-900">
              {days_since_contact}
            </h3>
            <p className="text-gray-500 text-sm">Days Since Contact</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center transition hover:scale-105">
            <h3 className="text-2xl font-bold text-green-900">{goal}</h3>
            <p className="text-gray-500 text-sm">Goal (Days)</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center transition hover:scale-105">
            <h3 className="text-2xl font-bold text-green-900">
              {next_due_date}
            </h3>
            <p className="text-gray-500 text-sm">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="bg-white rounded-xl shadow-md p-10 flex justify-between items-center transition hover:scale-105">
          <div>
            <h3 className="text-lg font-semibold text-green-900">
              Relationship Goal
            </h3>
            <p className="text-gray-500">
              Connect every{" "}
              <span className="font-bold text-black">30 days</span>
            </p>
          </div>

          <button className="btn btn-sm">Edit</button>
        </div>

        {/* Quick Check-In */}
        <div className="bg-white rounded-xl shadow-md p-10">
          <h3 className="text-lg font-semibold text-green-900 mb-4">
            Quick Check-In
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <div
              onClick={() => handleCallButton(friend)}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm  cursor-pointer transition hover:scale-105 hover:bg-[#244d3f] hover:text-white"
            >
              <img className="mx-auto mb-2 w-8" src={callImage} alt="" />
              <p>Call</p>
            </div>

            <div
              onClick={() => handleTextButton(friend)}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm cursor-pointer transition hover:scale-105 hover:bg-[#244d3f] hover:text-white"
            >
              <img className="mx-auto mb-2 w-8" src={textImg} alt="" />
              <p>Text</p>
            </div>

            <div
              onClick={() => handleVideoButton(friend)}
              className="bg-gray-50 rounded-xl p-6 text-center shadow-sm cursor-pointer transition hover:scale-105 hover:bg-[#244d3f] hover:text-white"
            >
              <img className="mx-auto mb-2 w-8" src={videoImg} alt="" />
              <p>Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;
