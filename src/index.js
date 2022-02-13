import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="container">
      <Weather defaultCity="New York" />
      <footer>
        Coded by Cassandra Hinds on {""}
        <a
          href="https://github.com/Cassandra-Hinds/react-weather-app"
          target={"_blank"}
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
