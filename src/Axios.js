import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import { SpinnerDiamond } from "spinners-react";

export default function Axios(props) {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      name: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ada9023ee6b674c5142a0f7109917e0&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        {form}
        <ul>
          <li>
            {" "}
            <strong> {weather.name} </strong>
          </li>
          <br />
          <li>{Math.round(weather.temp)}°C</li>
          <li>{weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}m/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>

        <SpinnerDiamond />
      </div>
    );
  } else {
    return form;
  }
}
