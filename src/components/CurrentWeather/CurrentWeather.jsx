import React from "react";
import { whichIcon } from '../whichIcon.js';

let scale = "C";

const CurrentWeather = ({ icon, description, tempMin, tempMax, humidity, pressure }) => {
  const { altIcon, weatherIconPath } = whichIcon(icon);

  return (
    <div className="mainSection">
      <img className="mainIcon" src={weatherIconPath} alt={`${altIcon} weather icon`} />
      <p className="weatherDescription">{description}</p>
      <p className="temperature">Temperature <span className="lightText">{tempMin}° to {tempMax}°{scale}</span></p>
      <p className="weatherSubsidiary">Humidity <span className="lightText">&nbsp;&nbsp;{humidity}%&nbsp;&nbsp;</span> Pressure <span className="lightText">&nbsp;&nbsp;{pressure}</span></p>
    </div>
  );
};

export default CurrentWeather;