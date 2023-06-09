import React from "react";
import './HourlyPrediction.scss'
import { whichIcon } from '../whichIcon.js';

const HourlyPrediction = ({hour, icon, temperature}) => {
    const { altIcon, weatherIconPath } = whichIcon(icon);

let scale = "C";
//   // Attempt to have Farenheit scale ...
//   scale = "F";
//   temperature = Math.round(temperature * 1.8 + 32);
//   // End of calculations
//   // If the feature is finally added, rounding should
//   // be done on this component for both scales
//   // and not on the App.js; at the moment, if in
//   // Farnheit, the degrees are rounded twice...

return (
        <div className="hourlyPrediction">
            <p>{hour}</p>
            <img className="smallIcon" src={weatherIconPath} alt={`${altIcon} weather icon`} />
            <p>{temperature}°{scale}</p>
        </div>
)
}

export default HourlyPrediction;