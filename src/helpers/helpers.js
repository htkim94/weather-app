export const getFiveDaysForecast = (data) => {
  const result = [];
  for (let i = 0; i < data.length; i += 8) {
    const date = data[i].dt_txt;
    result.push({
      date: date.split(" ")[0],
      tempMax: data[i].main.temp_max,
      tempMin: data[i].main.temp_min,
      icon: data[i].weather[0].icon
    });
  }
  return result;
}