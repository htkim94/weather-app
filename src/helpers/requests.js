export const fetchCurrentAndForecast = async (API_KEY, city) => {
  const [currentResponse, forecastResponse] = await Promise.all([
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`),
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
  ]);
  
  const current = await currentResponse.json();
  const forecast = await forecastResponse.json();

  return [current, forecast];
}