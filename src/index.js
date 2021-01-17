//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
const currentTime = date.getHours();
let greet;
const custStyle = { color: "" };
if (currentTime < 12) {
  greet = "GOOD MORNING";
  custStyle.color = "yellow";
} else if (currentTime < 18) {
  greet = "GOOD AFTERNOON";
  custStyle.color = "orange";
} else {
  greet = "GOOD NIGHT";
  custStyle.color = "blue";
}
ReactDOM.render(
  <h1 className="heading" style={custStyle}>
    {greet}
  </h1>,
  document.getElementById("root")
);
