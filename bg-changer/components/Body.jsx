import React, { useState } from "react";

const Body = () => {
  const [bg, setBg] = useState("white");

  const Btn = ({ color }) => {
    return (
      <button
        className={`shadow-sm h-10 w-10 bg-[${color}] rounded-xl m-2`}
        onClick={() => {
          setBg(color);
        }}
      >
      </button>
    );
  };
  return (
    <div
      className={`h-screen w-screen bg-[${bg}] flex items-center justify-center`}
    >
      <div
        className="bg-[#dadee6] rounded-xl w-[30%] flex itens-center justify-center flex-wrap shadow-xl
    "
      >
        <Btn color={"#000000"} />
        <Btn color={"#fff"} />
        <Btn color={"#e54e86"} />
        <Btn color={"#a4bf01"} />
        <Btn color={"#b6a795"} />
        <Btn color={"#ffe9f3"} />
        <Btn color={"#c0d6e4"} />
        <Btn color={"#7FFFD4"} />
        <Btn color={"#ffdead"} />
        <Btn color={"#7bf9f3"} />
      </div>
    </div>
  );
};

export default Body;
