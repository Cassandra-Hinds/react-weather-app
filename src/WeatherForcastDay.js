import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="future-days">{props.day.dt}</div>
      <img src={props.day.weather[0].icon} alt="weather icon" />
      <div className="future-temps">
        <span className="max-temp">{Math.round(props.day.temp.max)}°</span>{" "}
        <span className="min-temp">{Math.round(props.day.temp.min)}°</span>
      </div>
    </div>
  );
}
