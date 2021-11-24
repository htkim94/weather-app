import React, { useState } from "react";
import "./Search.css";

export default function Search({ setCity }) {
  const [cityName, setCityName] = useState("");

  const onCityNameChange = (e) => {
    setCityName(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setCity(cityName);
    setCityName("");
  };

  return (
    <div className="search-container">
      <input
        id="search-input"
        placeholder="City"
        value={cityName}
        onChange={onCityNameChange}
        onKeyPress={(e) => (e.key === "Enter" ? formSubmit(e) : null)}
      />
      <button onClick={formSubmit}>Get Weather</button>
    </div>
  );
}
