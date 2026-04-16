import React, { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { FriendContext } from "../../context/FriendContext";

const Banner = () => {
  const { friends, call, text, video  } = useContext(FriendContext);

  return (
    <div>
      {/* Banner Text */}
      <div className="text-center mt-20 space-y-5">
        <h1 className="text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="flex items-center mx-auto btn bg-[#244D3F] text-white">
          <GoPlus className="text-xl" /> Add a Friend
        </button>
      </div>
      {/* Banner-card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 px-3 ">
        {/*card-1 */}
        <div className=" h-32 flex flex-col items-center justify-center shadow-sm py-20 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-[#244D3F]">
            {friends.length}
          </h3>
          <p className="text-[#64748B]">Total Friends</p>
        </div>
        {/*card-2 */}
        <div className=" h-32 flex flex-col items-center justify-center shadow-sm py-20 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-[#244D3F]">
            {friends.filter((friend) => friend.status === "On-Track").length}
          </h3>
          <p className="text-[#64748B]">On Track</p>
        </div>
        {/*card-3 */}
        <div className=" h-32 flex flex-col items-center justify-center shadow-sm py-20 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-[#244D3F]">{friends.length - friends.filter((friend) => friend.status === "On-Track").length} </h3>
          <p className="text-[#64748B]">Need Attention</p>
        </div>
        {/*card-4 */}
        <div className=" h-32 flex flex-col items-center justify-center shadow-sm py-20 rounded-xl text-center">
          <h3 className="text-3xl font-bold text-[#244D3F]">{call.length + text.length + video.length}</h3>
          <p className="text-[#64748B]">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
