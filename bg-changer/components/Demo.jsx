import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Demo = () => {
  let i = 0;
  const [j, setJ] = useState(0);
  let k = useRef(0);
  console.log("rendering.........");
  return (
    <div className="h-96 w-96 border border-black">
      <div>
        <div>
          <button
            className=" p-2 m-4 font-bold border border-black rounded-xl"
            onClick={() => {
              i = i + 1;
              console.log("let =", i);
            }}
          >
            let
          </button>
          <span>let ={i}</span>
        </div>
        <div>
          <button
            className=" p-2 m-4 font-bold border border-black rounded-xl"
            onClick={() => {
              setJ(j + 1);
            }}
          >
            state
          </button>
          <span>State ={j}</span>
        </div>
        <div>
          <button
            className=" p-2 m-4 font-bold border border-black rounded-xl"
            onClick={() => {
              k.current = k.current + 1;
              console.log("ref =", k.current);
            }}
          >
            Ref
          </button>
          <span>Ref ={k.current}</span>
        </div>
      </div>
    </div>
  );
};

export default Demo;
