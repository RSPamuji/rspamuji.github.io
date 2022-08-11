import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import "../mastermap/styles.css";

const MapChart = ({ setTooltipContent }) => {
  return (
    <div>
       <div className="mt-5 sm:mt-1 sm:flex sm:justify-center">
    <div className="rounded-md shadow">
    <h1 align="center">
        <a href="Kabupaten" 
        className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
        KEMBALI
        </a>
    </h1>
    </div></div>
    <div className="mt-5 sm:mt-1 sm:flex sm:justify-center">
    <div className="rounded-md shadow">
    <h1 align="center">
        <a href="AyamKampung" 
        className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
        AYAM KAMPUNG
        </a>
    </h1>
    </div>
    <div className="mt-2 sm:mt-0 sm:flex sm:justify-left">
    <div className="rounded-md shadow">
    <h1 align="center">
        <a href="AyamPetelur" 
        className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
        AYAM PETELUR
        </a>
    </h1>
    </div>
    <div className="mt-2 sm:mt-0 sm:flex sm:justify-left">
    <div className="rounded-md shadow">
    <h1 align="center">
        <a href="AyamPedaging" 
        className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
        AYAM PEDAGING
        </a>
    </h1>
    </div>
    <div className="mt-2 sm:mt-0 sm:flex sm:justify-left">
    <div className="rounded-md shadow">
    <h1 align="center">
        <a href="ItikdanItikmanila" 
        className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
        ITIK DAN ITIK MANILA
        </a>
    </h1>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div style={{width:"100%", height:"100%", backgroundColor: 'black', borderStyle: "10"}}>
      <ComposableMap data-tip="">
        <ZoomableGroup center={[108, 4]} zoom={90}>
            <Geographies geography="natuna.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ} : ${geo.properties.KDPBPS}`);
                  }}
                  onMouseClik={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(`${''}`);
                  }}
                  style={{
                    default: {
                      fill: "#FFA500",
                      outline: "none"
                    },
                    hover: {
                      fill: "blue",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
    <div></div>
    </div>
  );
};

export default memo(MapChart);
