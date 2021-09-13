import React from "react";
import "./Bubbles.module.css";

export function Bubbles(){

    const numbers:string[] =["one","two","three","four","five","six","eight","nine","ten","eleven","twelve","thirteen",
    "fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];

    const bubbles = [];

    for (const [index, value] of Object.entries(numbers)) {
      bubbles.push(<div key={index} className={`bubble w-3 h-3 rounded-full bg-white opacity-30 fixed z-50 -bottom-36; bubble-${value}`}></div>);
    }


  return (
    <div className="bubbles w-full">
        {bubbles}
    </div>
  );
}
