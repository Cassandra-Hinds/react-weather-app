import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    return `${Math.round(props.day.temp.max)}°`;
  }
  function minTemp() {
    return `${Math.round(props.day.temp.min)}°`;
  }
  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let data = new Date(props.day.dt * 1000);
    let day = data.getDay();
    return days[day];
  }

  return (
    <div>
      <div className="future-days">{day()}</div>
      <WeatherIcon icon={props.day.weather[0].icon} />
      <div className="future-temps">
        <span className="max-temp">{maxTemp()}</span>{" "}
        <span className="min-temp">{minTemp()}</span>
      </div>
    </div>
  );
}
