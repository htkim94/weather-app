import React from "react";
import "./FiveDaysContainer.css";
import FiveDaysWeather from "./FiveDaysWeather";

export default function FiveDaysContainer({ forecast }) {
  return (
    <div className="five-days-container">
      { forecast.map((day) => (
        <FiveDaysWeather day={day} />
      )) }
    </div>
  );
}
