import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "../mastermap/Navbar";
import MapChart from "../kabupaten/MapTanjungPinang";

function Maps() {
  const [content, setContent] = useState("");
  return (
    <div>
    <div align="center">
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
    </div>
  );
}
export default Maps;

