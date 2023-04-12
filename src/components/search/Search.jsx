import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import axios from "axios";

function Search({ onSearch }) {
  const [value, setValue] = useState(null);

  const handleChange = (searchData) => {
    setValue(searchData);
    onSearch(searchData);
  };

  const loadOptions = async (inputValue) => {
    console.log(inputValue);
    //
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=9c767c9bf18aa4af819b5f2ffefd8143`
      );
      return {
        options: [
          {
            value: `${response.data.coord.lat} ${response.data.coord.lon}`,
            label: `${response.data.name}, ${response.data.sys.country}`,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed,
            weatherDescription: response.data.weather[0].description,
            weatherIcon: response.data.weather[0].icon,
          },
        ],
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="input">
      <AsyncPaginate
        value={value}
        placeholder="Enter Cities/Location..."
        debounceTimeout={600}
        loadOptions={loadOptions}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
