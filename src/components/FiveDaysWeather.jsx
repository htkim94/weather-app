import React from "react";
import "./FiveDaysWeather.css";

export default function FiveDaysWeather({ day }) {
  const temp = (day.tempMax + day.tempMin) / 2;
  const iconURL = `http://openweathermap.org/img/wn/${day.icon}@2x.png`
  return (
    <div className="container-day">
      <div className="title-date">{day.date.slice(5)}</div>
      <img className="fiveDays-weather-icon" src={iconURL} alt="fiveDays weather icon"/>
      <div className="fiveDays-temp">{Math.round(temp)} <span>&#8451;</span></div>
    </div>
  )
}