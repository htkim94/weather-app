import { useEffect, useState } from "react";
import { getFiveDaysForecast } from "./helpers/helpers";
import { fetchCurrentAndForecast } from "./helpers/requests";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import "./App.css";
import FiveDaysContainer from "./components/FiveDaysContainer";
import ErrorPage from "./components/ErrorPage";

function App() {
  const API_KEY = "00178861b930d9717e11d98136a9ecb1";
  const [city, setCity] = useState("");
  const [current, setCurrent] = useState({});
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (city) {
      fetchCurrentAndForecast(API_KEY, city)
        .then(([current, forecast]) => {
          setCurrent(current);
          setForecast(getFiveDaysForecast(forecast.list));
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [city]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search setCity={setCity} />
      {error ? (
        <ErrorPage />
      ) : (
        <>
          {current.name ? <CurrentWeather current={current} /> : null}
          {forecast.length !== 0 ? (
            <FiveDaysContainer forecast={forecast} />
          ) : null}
        </>
      )}
    </div>
  );
}

export default App;
