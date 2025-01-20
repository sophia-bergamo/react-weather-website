import "./style-weather-info-today.css"

function WeatherInformation({weather}){
    return (
        <div className="weather-container">
           <h2>{weather.name}</h2>

             <div className="weather-info">
              <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
              <p className="weather-temperature">{Math.round(weather.main.temp)}ºC</p>
              <p className="weather-description">{weather.weather[0].description}</p>
            </div>
           
            
            <div className="weather-details">
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure}</p>
           </div>  
        </div>
    )

}



export default WeatherInformation 