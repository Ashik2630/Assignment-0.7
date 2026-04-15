import React from "react";

const Friend = ({ friend }) => {
  const { name, days_since_contact, picture, tags, status } = friend;
  return (
   
      <div className="bg-white rounded-2xl shadow-md p-6  text-center space-y-3">
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
        
          {tags.map((tag, index) => <span key={index} className="inline-block ml-3  bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">#{tag.toUpperCase()}</span>)}
        

        {/* Due Badge */}
        <div>
          <span className="inline-block bg-orange-100 text-orange-500 text-xs font-medium px-3 py-1 rounded-full">
            {status.toUpperCase()}
          </span>
        </div>
      </div>

  );
};

export default Friend;
