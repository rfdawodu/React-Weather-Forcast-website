import React from "react";
import {
  WiDaySunny,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiCloudy,
  WiHumidity,
  WiWindy,
  WiThermometerInternal,
  WiBarometer,
} from "weather-icons-react";

const CurrentWeather = ({ data }) => {
  const iconCode = data.weather[0].icon;

  // Set the appropriate weather icon based on the icon code
  let icon;
  switch (iconCode) {
    case "01d":
      icon = <WiDaySunny size={100} color="#ffff00" />;
      break;
    case "01n":
      icon = <WiDaySunny size={100} color="#ffff00" />;
      break;
    case "02d":
    case "02n":
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      icon = <WiCloudy size={100} color="#c2d5dc" />;
      break;
    case "09d":
    case "09n":
    case "10d":
    case "10n":
      icon = <WiRain size={100} color="#9099a1" />;
      break;
    case "11d":
    case "11n":
      icon = <WiThunderstorm size={100} color="#004f63" />;
      break;
    case "13d":
    case "13n":
      icon = <WiSnow size={100} color="#ffffff" />;
      break;
    default:
      icon = null;
  }

  return (
    <div className="current-weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="temperature">{Math.round(data.main.temp)}°</p>
          <p className="description">{data.weather[0].description}</p>
        </div>
        <div className="weather-icon">{icon}</div>
      </div>
      <div className="weather">
        <div className="bottom ">
          <div className="details">
            <div className="parameter-row">
              <span className="parametr-heading">Details</span>
            </div>
            <div className="parameter-row">
              <WiThermometerInternal />

              <span className="parametr-label">Feels like</span>
              <span className="parametr-value">
                {Math.round(data.main.feels_like)}°
              </span>
            </div>
            <div className="parameter-row">
              <WiWindy />
              <span className="parametr-label">Wind</span>
              <span className="parametr-value">{data.wind.speed} m/s</span>
            </div>
            <div className="parameter-row">
              <WiHumidity />
              <span className="parametr-label">Humidity</span>
              <span className="parametr-value">{data.main.humidity}%</span>
            </div>
            <div className="parameter-row">
              <WiBarometer />
              <span className="parametr-label">Pressure</span>
              <span className="parametr-value">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
