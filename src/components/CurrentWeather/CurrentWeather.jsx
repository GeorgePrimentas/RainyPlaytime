import React from "react";
import clear from '../../img/weather-icons/clear.svg';
import drizzle from '../../img/weather-icons/drizzle.svg';
import mostlycloudy from '../../img/weather-icons/mostlycloudy.svg';
import partlycloudy from '../../img/weather-icons/partlycloudy.svg';
import rain from '../../img/weather-icons/rain.svg';
import snow from '../../img/weather-icons/snow.svg';
import storm from '../../img/weather-icons/storm.svg';
import unknown from '../../img/weather-icons/unknown.svg';

let scale = "C";
const CurrentWeather = ({icon, altIcon, description, tempMin, tempMax, humidity, pressure}) => {
  let weatherIcon;

  if (icon < 300) {
    weatherIcon = storm;
  } else if (icon <=499) {
    weatherIcon = drizzle;
  } else if (icon <=599) {
    weatherIcon = rain;
  } else if (icon <=699) {
    weatherIcon = snow;
  } else if (icon <=799) {
    weatherIcon = drizzle;
  } else if (icon === 800) {
    weatherIcon = clear;
  } else if (icon === 801) {
    weatherIcon = partlycloudy;
  } else if (icon <= 805) {
    weatherIcon = mostlycloudy;
  } else {
    weatherIcon = unknown;
  }

  // // Attempt to have Farenheit scale ...
  // scale = "F";
  // tempMin = Math.round(tempMin * 1.8 + 32);
  // tempMax = Math.round(tempMax * 1.8 + 32);
  // // End of calculations
  // // If the feature is finally added, rounding should
  // // be done on this component for both scales
  // // and not on the App.js; at the moment, if in
  // // Farnheit, the degrees are rounded twice...

    return (
        <div className="mainSection"> 
          <img className="mainIcon" src={weatherIcon} alt={altIcon} />
          <p className="weatherDescription">{description}</p>
          <p className="temperature">Temperature <span className="lightText">{tempMin}° to {tempMax}°{scale}</span></p>
          <p className="weatherSubsidiary">Humidity <span className="lightText">&nbsp;&nbsp;{humidity}%&nbsp;&nbsp;</span> Pressure <span className="lightText">&nbsp;&nbsp;{pressure}</span></p>
        </div>
    )
}

export default CurrentWeather;
