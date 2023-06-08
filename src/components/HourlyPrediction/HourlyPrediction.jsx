import React from "react";
import './HourlyPrediction.scss'
import mostlycloudy from '../../img/weather-icons/mostlycloudy.svg';

const HourlyPrediction = ({hour, icon, temperature}) => {
return (
              <div className="hourlyPrediction">
            <p>{hour}</p>
            <img className="smallIcon" src={mostlycloudy} alt="mostly cloudy icon" />
            <p>{temperature}°C</p>
          </div>
)

}

export default HourlyPrediction;