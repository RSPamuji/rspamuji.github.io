import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import "./styles.css";
import Navbar from './Navbar'

const MapChart = ({ setTooltipContent }) => {
  return (
    <div><Navbar/>
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
    <div style={{width:"100%", height:"100%", backgroundColor: 'grey', borderStyle: "10"}}>
      <ComposableMap data-tip="">
        <ZoomableGroup center={[107, 2]} zoom={25}>
        <Geographies geography="/karimun.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ} : ${geo.properties.JMLKAB}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#FF0000",
                      outline: "red"
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
          <Geographies geography="/natuna.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ} : ${geo.properties.JMLKAB}`);
                  }}
                  onMouseClik={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(`${''}`);
                  }}
                  style={{
                    default: {
                      fill: "#FF0000",
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
          <Geographies geography="/batam.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ} : ${geo.properties.JMLKAB}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#8B0000",
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
            <Geographies geography="lingga.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ} : ${geo.properties.JMLKAB}`);
                  }}
                  onMouseClik={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(`${''}`);
                  }}
                  style={{
                    default: {
                      fill: "#FAA0A0",
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
          <Geographies geography="/bintan.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ}:${geo.properties.JMLKAB}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#FF0000",
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
            <Geographies geography="anambas.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ} : ${geo.properties.JMLKAB}`);
                  }}
                  onMouseClik={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(`${''}`);
                  }}
                  style={{
                    default: {
                      fill: "#FAA0A0",
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
            <Geographies geography="tanjungpinang.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ} : ${geo.properties.JMLKAB}`);
                  }}
                  onMouseClik={() => {
                    setTooltipContent(`${geo.properties.NAMOBJ}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent(`${''}`);
                  }}
                  style={{
                    default: {
                      fill: "#FF0000",
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
