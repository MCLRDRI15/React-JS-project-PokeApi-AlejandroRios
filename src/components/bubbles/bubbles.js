import React from "react";
import "./Bubbles.module.css";

export function Bubbles() {

    const numbers =["one","two","three","four","five","six","eight","nine","ten","eleven","twelve","thirteen",
    "fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];

    const items = [];

    for (const [index, value] of numbers.entries()) {
      items.push(<div key={index} className={`bubble bubble-${value}`}></div>);
    }


  return (
    <div className="bubbles">
        {items}
    </div>
  );
}
