import React from "react";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Friday 12:30pm",
    weather: "Cloudy",
    weatherIcon: "https://openweathermap.org/img/wn/10d@2x.png",
    humidity: 70,
    wind: 70,
  };
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
        <div className="day-and-time">{weatherData.date}</div>
        <div className="weather">{weatherData.weather}</div>
        <div className="clearfix current-temperature">
          <img
            src={weatherData.weatherIcon}
            alt="weather icon"
            className="float-left"
          />
          <span className="float-left">
            <span>70</span>
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
        <span> {weatherData.wind}</span>m/h
      </div>
    </div>
  );
}
