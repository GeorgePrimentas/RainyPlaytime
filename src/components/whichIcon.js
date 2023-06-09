export function whichIcon(icon) {
  let altIcon;
  let weatherIconPath;

  if (icon < 300) {
    altIcon = "storm";
    weatherIconPath = require('../img/weather-icons/storm.svg').default;
  } else if (icon <= 499) {
    altIcon = "drizzle";
    weatherIconPath = require('../img/weather-icons/drizzle.svg').default;
  } else if (icon <= 599) {
    altIcon = "rain";
    weatherIconPath = require('../img/weather-icons/rain.svg').default;
  } else if (icon <= 699) {
    altIcon = "snow";
    weatherIconPath = require('../img/weather-icons/snow.svg').default;
  } else if (icon <= 799) {
    altIcon = "fog";
    weatherIconPath = require('../img/weather-icons/fog.svg').default;
  } else if (icon === 800) {
    altIcon = "clear";
    weatherIconPath = require('../img/weather-icons/clear.svg').default;
  } else if (icon === 801) {
    altIcon = "partly cloudy";
    weatherIconPath = require('../img/weather-icons/partlycloudy.svg').default;
  } else if (icon <= 805) {
    altIcon = "mostly cloudy";
    weatherIconPath = require('../img/weather-icons/mostlycloudy.svg').default;
  } else {
    altIcon = "unknown";
    weatherIconPath = require('../img/weather-icons/unknown.svg').default;
  }

  return {
    altIcon,
    weatherIconPath
  };
}