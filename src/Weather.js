import axios from "axios";
import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, SetCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      weather: response.data.weather[0].description,
      weatherIcon: response.data.weather[0].icon,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  function search() {
    let apiKey = "2718952144ed077c12e7c160fb6fc351";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    SetCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search | Enter a city"
            onChange={handleCityChange}
            className="
form-control
shadow-none
p-3
mb-5
bg-light
rounded
border border-primary border border-2
"
          />
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();

    return <div className="text-center loading">Loading...</div>;
  }
}
