import axios from "axios";
import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,                   ,
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
        <WeatherInfo data={weatherData} />
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
