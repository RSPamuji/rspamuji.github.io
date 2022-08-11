import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "../styles.css";
import MapChart from "./mastermap/MapAyamKampung";

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

