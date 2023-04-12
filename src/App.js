import React, { useState } from "react";
import "./App.css";
import Search from "./components/search/Search";
import CurrentWeather from "./components/CurrentWeather";
import TimeAndLocation from "./components/search/TimeAndLocation";
import Forecast from "./components/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleChangeData = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&q=${searchData.label}&appid=554aaf94737b089a6ad8d2efa31a1708&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=554aaf94737b089a6ad8d2efa31a1708&units=metric`;

    Promise.all([
      fetch(currentWeatherUrl).then((response) => response.json()),
      fetch(forecastUrl).then((response) => response.json()),
    ])
      .then((data) => {
        setCurrentWeather({ city: searchData.label, ...data[0] });
        setForecast({ city: searchData.label, ...data[1] });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="App">
      <div className="container">
        <Search onSearch={handleChangeData} />
        <TimeAndLocation />
        <div>{currentWeather && <CurrentWeather data={currentWeather} />}</div>
      </div>
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
