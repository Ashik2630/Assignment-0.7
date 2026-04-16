import React from "react";
import { Link } from "react-router";

const Friend = ({ friend }) => {
  const { id, name, days_since_contact, picture, tags, status } = friend;
  return (
    <Link to={`/friendDetail/${id}`}>
      <div className="bg-white rounded-2xl shadow p-6  text-center space-y-3">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={picture}
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

        {/* Time */}
        <p className="text-sm text-gray-400">{days_since_contact}d ago</p>

        {/* Status */}

        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block ml-3  bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full"
          >
            #{tag.toUpperCase()}
          </span>
        ))}

        {/* Due Badge */}
        <div>
          <span
            className={`px-3 py-1 rounded-full text-white ${
              status === "On-Track"
                ? "bg-[#244d3f]"
                : status === "Overdue"
                  ? "bg-[#ef4444]"
                  : status === "Almost Due"
                    ? "bg-[#efad44]"
                    : "bg-gray-300"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Friend;
