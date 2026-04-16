import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendContext } from "../context/FriendContext";

const Stats = () => {


    const { call, text, video } = useContext(FriendContext);

  // #region Sample data
  const data = [
    { name: "Call", value: call.length, fill: "#244d3f" },
    { name: "Text", value: text.length, fill: "#7f37f5" },
    { name: "Video", value: video.length, fill: "#37a163" },
  ];

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-5xl font-bold">Friendship Analytics</h1>
      <div className="relative flex justify-center my-10  shadow rounded-md  border border-slate-300 p-10">
        <h3 className="text-2xl absolute top-8 left-10 text-[#244D3F] font-semibold">By Interaction Type</h3>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
