import React from "react";
import { GoPlus } from "react-icons/go";

const Banner = () => {
  return (
    <div>
        {/* Banner Text */}
      <div className="text-center mt-20 space-y-5">
        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="flex items-center mx-auto btn bg-[#244D3F] text-white">
          <GoPlus className="text-xl" /> Add a Friend
        </button>
      </div>
      {/* Banner-card */}
      <div>

      </div>
    </div>
  );
};

export default Banner;
