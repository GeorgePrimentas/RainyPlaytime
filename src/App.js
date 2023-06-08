import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Icon from './components/Icon/Icon';
import mostlycloudy from './img/weather-icons/mostlycloudy.svg';
import clear from './img/weather-icons/clear.svg';
import HourlyPrediction from "./components/HourlyPrediction/HourlyPrediction";




import React, { useEffect, useState } from 'react';

// const MyComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/data');
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.log('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {/* Display the fetched data */}
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </div>
//   );
// };












//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {


  const [data, setData] = useState(null);
  const [pressureValue, setPressureValue] = useState(null); // Chat GPT - New state for pressure value


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=1d162b7fec3f97b54fcd4bc4510b95b2');
        const jsonData = await response.json();
        setData(jsonData);


        // Extract pressure value from the data and set it in the state
        if (jsonData && jsonData.list && jsonData.list.length > 0) {
          const firstDataPoint = jsonData.list[0];
          const pressure = firstDataPoint.main.pressure;
          setPressureValue(pressure);
        }


      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // return (
  //   <div>
  //     {/* Display the fetched data */}
  //     {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
  //   </div>
  // );


  return (


    
    <div className="App">

      {/* Just showcasing the data
      <div>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>  */}

      

      <Header title={siteTitle} />
      <main className="c-site-main" tabIndex="0">
        {/* The top band/stripe where the user input the city */}
        <div className="topSection">
          <input className="inputField" type="text"></input>
          <button className="button">find weather</button>
        </div>
        <div className="mainSection">
          <img className="mainIcon" src={mostlycloudy} alt="mostly cloudy icon" />
          <p className="weatherDescription">overcast clouds</p>
          <p className="temperature">Temperature <span className="lightText">10° to 11°C</span></p>
          <p className="weatherSubsidiary">Humidity <span className="lightText">&nbsp;&nbsp;78%&nbsp;&nbsp;</span> Pressure <span className="lightText">&nbsp;&nbsp;1008.48</span></p>
        </div>

        <div style={{color: "red"}}>
          {pressureValue && <p>Pressure: {pressureValue}</p>}
        </div>


        <div className="hourlyPredictionGroup">
          <div className="hourlyPrediction">
            <p>03:00</p>
            <img className="smallIcon" src={mostlycloudy} alt="mostly cloudy icon" />
            <p>8°C</p>
          </div>

          <div className="hourlyPrediction">
            <p>06:00</p>
            <img className="smallIcon" src={mostlycloudy} alt="mostly cloudy icon" />
            <p>9°C</p>
          </div>

          <div className="hourlyPrediction">
            <p>09:00</p>
            <img className="smallIcon" src={clear} alt="clear icon" />
            <p>14°C</p>
          </div>

          <div className="hourlyPrediction">
            <p>12:00</p>
            <img className="smallIcon" src={clear} alt="clear icon" />
            <p>17°C</p>
          </div>

          <div className="hourlyPrediction">
            <p>15:00</p>
            <img className="smallIcon" src={clear} alt="clear icon" />
            <p>18°C</p>
          </div>

          {/* <div className="hourlyPrediction">
            <p>18:00</p>
            <img className="smallIcon" src={clear} alt="clear icon" />
            <p>16°C</p>
          </div> */}

          <HourlyPrediction hour="18:00" icon={clear} temperature="16" />

          {/* <div className="hourlyPrediction">
            <p>21:00</p>
            <img className="smallIcon" src={mostlycloudy} alt="mostly cloudy icon" />
            <p>13°C</p>
          </div> */}

          <HourlyPrediction hour="21:00" icon={mostlycloudy} temperature="13" />

        </div>
    
      </main>
      <Footer />
    </div>
  );
}

export default App;
