import React, { useContext } from "react";
import { FriendContext } from "../context/FriendContext";
import callImage from "../assets/call.png";
import textImg from "../assets/text.png";
import videoImg from "../assets/video.png";

const Timeline = () => {
  const { call, text, video } = useContext(FriendContext);

  const isEmpty = call.length === 0 && text.length === 0 && video.length === 0;

  const date = new Date();

  return (
    <div className="container mx-auto my-20 space-y-5">
      <h1 className="text-4xl font-bold">Timeline</h1>

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

      {/* CALL */}
      {call?.map((c, index) => (
        <div key={index} className="flex gap-4 shadow py-5">
          <div className="pl-10">
            <img src={callImage} alt="call" />
          </div>
          <div>
            <p>{c.name} is Called</p>
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

      {/* TEXT */}
      {text?.map((c, index) => (
        <div key={index} className="flex gap-4 shadow py-5">
          <div className="pl-10">
            <img src={textImg} alt="text" />
          </div>
          <div>
            <p>{c.name} is Texted</p>
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

      {/* VIDEO */}
      {video?.map((v, index) => (
        <div key={index} className="flex gap-4 shadow py-5">
          <div className="pl-10">
            <img src={videoImg} alt="video" />
          </div>
          <div>
            <p>{v.name} had a Video Call</p>
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
