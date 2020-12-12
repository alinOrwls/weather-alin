import  React, { useState} from "react";
import axios from "axios";
import   "./Weather.css";
import Weatherinfo from "./Weatherinfo.js";
import WeatherForecast from "./WeatherForecast";
import "./WeatherForecast.css"


export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState ({ ready: false });
    const [city, setCity] = useState (props.defaultCity);

    function handleResponse(response) {
        setWeatherData({ 
            ready: true,

            temperature: response.data.main.temp,
            city: response.data.name,
            date:  new Date(response.data.dt  *  1000),
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,

        });
    }

    function search( ) {
          const apiKey="b77a5166cc2c236ed02e7fcc7edcd78c";
          let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
         axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event){
        event.preventDefault();
       search();

    }
    function handleCityChange(event){
        setCity(event.target.value);

    }

    if (weatherData.ready) {
        return (
        <div className= "Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                 <input
                  type="search"  
                 placeholder="Search for a city..." 
                 className="form-control" 
                 autoFocus="On" 
                 onChange={handleCityChange} 
                 />
                 </div>
                 <div className="col-3">
                     <button  className="btn  w-100">
                     Search
                     </button> 
                 </div>
                </div>
            </form>
            <Weatherinfo  data = {weatherData} />
            <WeatherForecast  city={weatherData.city} />
        </div>
    );

     } else {
         search();
         return "Loading...";
     }
        
}
