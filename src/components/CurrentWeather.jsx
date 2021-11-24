import React from "react";
import './CurrentWeather.css';

export default function CurrentWeather({ current }) {
  const iconURL = `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`
  return (
    <div className="current-container">
      <div className="current-weather">
        <h2 className="title">{current.name}</h2>
        <img className="current-weather-icon" src={iconURL} alt="current weather icon"/>
        <h4 className="weather-condition">{current.weather[0].main}</h4>
      </div>
      <div className="current-info-container">
        <div className="current-temps">
          <div className="feels-temp">Feels Like: {Math.round(current.main.feels_like)} <span>&#8451;</span></div>
          <div className="max-temp">Max: {Math.round(current.main.temp_max)} <span>&#8451;</span></div>
          <div className="min-temp">Min: {Math.round(current.main.temp_min)} <span>&#8451;</span></div>
          <div className="mean-temp">Mean: {Math.round(current.main.temp)} <span>&#8451;</span></div>
        </div>
        <div className="etc">
          <div className="humidity">Humidity: {current.main.humidity}%</div>
          <div className="wind">Wind Speed: {current.wind.speed} km/h</div>
        </div>
      </div>
    </div>
  )
}