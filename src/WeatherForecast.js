import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForcastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay day={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2718952144ed077c12e7c160fb6fc351";
    let long = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
