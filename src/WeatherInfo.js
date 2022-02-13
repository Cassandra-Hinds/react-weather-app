import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div>
      <div className="city">{props.weatherData.city}</div>

      <div className="day-and-time">
        <FormattedDate date={props.weatherData.date} />{" "}
      </div>

      <div className="weather text-capitalize">{props.weatherData.weather}</div>

      <div className="clearfix current-temperature">
        <img
          src={props.weatherData.weatherIcon}
          alt="weather icon"
          className="float-left"
        />
        <span className="float-left">
          <span>{Math.round(props.weatherData.temp)}</span>
          <span className="fahren">°F</span>
        </span>
      </div>

      <div className="humidity">
        <i className="fas fa-temperature-high humidity-icon"></i> Humidity:
        <span> {props.weatherData.humidity}</span>%
      </div>

      <div className="wind">
        <i className="fas fa-wind wind-icon"></i> Wind:
        <span> {Math.round(props.weatherData.wind)}</span>m/h
      </div>
    </div>
  );
}
