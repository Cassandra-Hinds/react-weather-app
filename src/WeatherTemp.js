import React from "react";

export default function WeatherTemp(props) {
  return (
    <span>
      <span>{Math.round(props.fahren)}</span>
      <span className="fahren">°F</span>
    </span>
  );
}
