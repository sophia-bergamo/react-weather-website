import "./style-weather-info-next-days.css"

function WeatherInformationNextDays({weatherNextDays}){
  let dailyForecast = {};

   if (weatherNextDays?.list && Array.isArray(weatherNextDays.list)) {
     for (let forecast of weatherNextDays.list) {
      const date = new Date(forecast.dt * 1000).toLocaleDateString();
  
      if (!dailyForecast[date]) {
        dailyForecast[date] = forecast;
      }
    }
  } else {
    console.error("weatherNextDays.list não é um array ou está indefinido");
  }
  
  function convertDate(date){
      return new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long', day: '2-digit'})
  }
    
    const next5DaysForecast = Object.values(dailyForecast).slice(1,6)

    return (
        <div className="next-days-weather-container">
           <h3>Previsão próximos 5 dias</h3>
             <div className="weather-list">
             {next5DaysForecast.map(forecast => (
                <div key={forecast.dt} className="weather-item">
                    <p>{convertDate(forecast)}</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                    <p>{forecast.weather[0].description}</p>
                    <p>{Math.round(forecast.main.temp_min)}ºC min / {Math.round(forecast.main.temp_max)}ºC max</p>
                </div>
             ))}
             </div>
        </div>
    )

}



export default WeatherInformationNextDays 