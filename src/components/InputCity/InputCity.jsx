import React, { useState } from "react";

const InputCity = ({ setWeatherData }) => {
  const [cityName, setCityName] = useState('');

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleButtonClick = () => {

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=8&units=metric&appid=1d162b7fec3f97b54fcd4bc4510b95b2`)
      .then((response) => response.json())
      .then((jsonData) => {
        setWeatherData(jsonData); // Update the weatherData state in the App component
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  };

  return (
    <div className="topSection">
      <input className="inputField" placeholder="Type in a city name" type="text" onChange={handleInputChange} />
      <button className="button" onClick={handleButtonClick}>find weather</button>
      {/* <span>F</span><input type="radio" name="scale" />
       <input type="radio" name = "scale" checked /><span>C</span> */}
    </div>
  );
};

export default InputCity;