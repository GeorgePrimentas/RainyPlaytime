import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Icon from './components/Icon/Icon';
import mostlycloudy from './img/weather-icons/mostlycloudy.svg';
import clear from './img/weather-icons/clear.svg';

//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "CYF Weather";

function App() {
  return (
    <div className="App">
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

          <div className="hourlyPrediction">
            <p>18:00</p>
            <img className="smallIcon" src={clear} alt="clear icon" />
            <p>16°C</p>
          </div>

          <div className="hourlyPrediction">
            <p>21:00</p>
            <img className="smallIcon" src={mostlycloudy} alt="mostly cloudy icon" />
            <p>13°C</p>
          </div>

        </div>
    
      </main>
      <Footer />
    </div>
  );
}

export default App;
