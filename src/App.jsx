import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformation from './components/weather-info-today/weather-info-today'
import WeatherInformationNextDays from './components/weather-info-next-days/weather-info-next-days'

function App() {
  const [weather, setWeather] = useState({})
  const [weatherNextDays, setWeatherNextDays] = useState({})
  const inputRef = useRef()
  const [showWeatherInfo, setShowWeatherInfo] = useState(false);

  async function searchCity(){ 
    const cityName = inputRef.current.value

    const apiKey = "802b9d6a06b1f93d07fad994954d6001"

    const urlToday = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`

    const urlNextDays = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&lang=pt_br&units=metric`


    const apiWeatherToday = await axios.get(urlToday);
    setWeather(apiWeatherToday.data);
    setShowWeatherInfo(true); 

    const apiWeatherNextDays = await axios.get(urlNextDays)
    setWeatherNextDays(apiWeatherNextDays.data);
    setShowWeatherInfo(true); 
}

  return (
   <div className='container'>
    <h1>Previsão do tempo</h1>
    <input ref={inputRef} type="text" placeholder='Nome da cidade'></input>
    <button onClick={searchCity}>Buscar</button>

    {showWeatherInfo && <WeatherInformation weather={weather} />}
    {showWeatherInfo && <WeatherInformationNextDays weatherNextDays={weatherNextDays} />}
    
   </div>
  )
}

export default App
