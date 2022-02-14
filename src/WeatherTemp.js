import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("fahren");

  function showFahren(event) {
    event.preventDefault();
    setUnit("fahren");
  }
  function showCels(event) {
    event.preventDefault();
    setUnit("Cels");
  }
  function cels() {
    return ((props.fahren - 32) * 5) / 9;
  }
  if (unit === "fahren") {
    return (
      <span>
        <span>{Math.round(props.fahren)}</span>
        <span className="fahren">
          °F |{" "}
          <a href="/" onClick={showCels}>
            °C
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span>{Math.round(cels())}</span>
        <span className="cels">
          <a href="/" onClick={showFahren}>
            °F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}
