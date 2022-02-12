import axios from "axios";
import React, { useState } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: "New York",
      date: new Date(response.data.dt * 1000),
      weather: response.data.weather[0].description,
      weatherIcon: "https://openweathermap.org/img/wn/10d@2x.png",
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div>
        <form>
          <input
            type="search"
            placeholder="Search | Enter a city"
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
        <button>Current Location</button>
        <div>
          <div className="city">{weatherData.city}</div>
          <div className="day-and-time">{weatherData.date.getDay()}</div>
          <div className="weather text-capitalize">{weatherData.weather}</div>
          <div className="clearfix current-temperature">
            <img
              src={weatherData.weatherIcon}
              alt="weather icon"
              className="float-left"
            />
            <span className="float-left">
              <span>{Math.round(weatherData.temp)}</span>
              <span className="fahren">°F</span>
            </span>
          </div>
        </div>
        <div className="humidity">
          <i className="fas fa-temperature-high humidity-icon"></i> Humidity:
          <span> {weatherData.humidity}</span>%
        </div>
        <div className="wind">
          <i className="fas fa-wind wind-icon"></i> Wind:
          <span> {Math.round(weatherData.wind)}</span>m/h
        </div>
      </div>
    );
  } else {
    let city = "New York";
    let apiKey = "2718952144ed077c12e7c160fb6fc351";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
