import React from "react";
import "./Bubbles.module.css";

export function Bubbles() {

  const controller = () => {
    const numbers =["one","two","three","four","five","six","eight","nine","ten","eleven","twelve","thirteen",
    "fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"]
    for (var i = 0; i < 20; i++) {
      document.createElement(`<div className="bubble-${numbers[i]}"></div>`);
    }
  }

  return (
    <div className="bubbles">
      {
        controller
      }
    </div>
  );
}
