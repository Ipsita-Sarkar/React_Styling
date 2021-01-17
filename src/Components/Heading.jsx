import React from "react";

function Heading() {
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

  return (
    <h1 className="heading" style={custStyle}>
      {greet}
    </h1>
  );
}
export default Heading;
