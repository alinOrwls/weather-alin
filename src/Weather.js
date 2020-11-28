import  React, { useState} from "react";
import axios from "axios";
import   "./Weather.css";
import FormatedDate from "./FormatedDate.js"


export default function Weather(props) {
    
    const [weatherData, setweatherData] = useState ({ ready: false });

    function handleresponse(response) {
        console.log(response.data);
        setweatherData({ 
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            date:  new Date(response.data.dt  *  1000),
            feelsLike: response.data.main.feels_like,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",

        });
    }

    if (weatherData.ready) {
        return (
        <div className= "Weather">
            <form>
                <div className="row">
                <div className="col-9">
                 <input type="search"  placeholder="Search for a city..." className="form-control" autoFocus="On"/>
                 </div>
                 <div className="col-3">
                 <button  className="btn  w-100">
                     Search
                     </button> 
                 </div>
                </div>
            </form>
        <h1>{weatherData.city}</h1>
            <ul>
                 <li>
                     <FormatedDate date={weatherData.date} />
                     </li>
                 <li className= "text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src={weatherData.iconUrl}  alt={weatherData.description} className="float-left"/>
                    <div className="float-left">
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
                    </div>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Wind:{weatherData.wind} Km/h</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                         <li>Feels like: {Math.round(weatherData.feelsLike)}°C</li>
                    </ul>

                </div>
            </div>
        </div>
    )

     } else {
         const apiKey="b77a5166cc2c236ed02e7fcc7edcd78c";
          let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`
         axios.get(apiUrl).then(handleresponse);

         return "Loading..."
     }
        
}
