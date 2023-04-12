import React from "react";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "weather-icons-react";

const week = ["mon", "tue", "wed", "thur", "friday", "sat", "sun"];

const Forecast = ({ data }) => {
  const day = new Date().getDay();
  const days = week.slice(day, week.length).concat(week.slice(0, day));

  console.log(data);
  return (
    <div className="daily-forecast">
      <label className="title">five day forecast</label>

      <div className="daily-list">
        {data.list.slice(0, 7).map((itm, idx) => (
          <div key={idx} className="daily-item">
            <div className="icon">
              {itm.weather[0].main === "Clear" && (
                <WiDaySunny size={80} color="#ffff00" />
              )}
              {itm.weather[0].main === "Clouds" && (
                <WiCloudy size={80} color="#c2d5dc" />
              )}
              {itm.weather[0].main === "Rain" && (
                <WiRain size={70} color="#9099a1" />
              )}
              {itm.weather[0].main === "Snow" && <WiSnow />}
              {itm.weather[0].main === "Thunderstorm" && <WiThunderstorm />}
            </div>
            <label className="day">{days[idx]}</label>
            <p className="temperature-forecast">{Math.round(itm.main.temp)}°</p>
            <div className="forecast-description">
              {itm.weather[0].description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
