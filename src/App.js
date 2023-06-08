import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HourlyPrediction from "./components/HourlyPrediction/HourlyPrediction";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import InputCity from "./components/InputCity/InputCity";
import React, { useState } from 'react';

//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="App">
      <Header title={siteTitle} />
      <main className="c-site-main" tabIndex="0">
        {/* The top band/stripe where the user inputs the city */}
        <InputCity setWeatherData={setWeatherData} />

        {weatherData && ( 
          <>
            <CurrentWeather
              icon={weatherData.list[0].weather[0].id} 
              altIcon={weatherData.list[0].weather[0].main}
              description={weatherData.list[0].weather[0].description}
              tempMin={Math.round(weatherData.list[0].main.temp_min)}
              tempMax={Math.round(weatherData.list[0].main.temp_max)}
              humidity={weatherData.list[0].main.humidity}
              pressure={weatherData.list[0].main.pressure}
            />

            <div className="hourlyPredictionGroup">
              {weatherData.list.map((data, index) => (
                <HourlyPrediction
                  key={index}
                  hour={data.dt_txt.split(' ')[1].slice(0, 5)} // The slice bit takes the first five characters
                  icon={data.weather[0].id} // Replace with the appropriate icon for each data point
                  altIcon={data.weather[0].main}
                  temperature={Math.round(data.main.temp)}
                />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;