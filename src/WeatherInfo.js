import React from "react";
import FormattedDate from "./FormattedDate";

import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="city">{props.data.city}</div>

      <div className="day-and-time">
        <FormattedDate date={props.data.date} />{" "}
      </div>

      <div className="weather text-capitalize">{props.data.weather}</div>

      <div className="clearfix current-temp">
        <img
          src={props.data.weatherIcon}
          alt="weather icon"
          className="float-left"
        />
        <span className="float-left">
          <WeatherTemp fahren={props.data.temp} />
        </span>
      </div>

      <div className="humidity">
        <i className="fas fa-temperature-high humidity-icon"></i> Humidity:
        <span> {props.data.humidity}</span>%
      </div>

      <div className="wind">
        <i className="fas fa-wind wind-icon"></i> Wind:
        <span> {Math.round(props.data.wind)}</span>m/h
      </div>
    </div>
  );
}
