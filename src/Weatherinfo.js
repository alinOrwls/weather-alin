import React from "react";
import FormatedDate from "./FormatedDate.js";
import WeatherIcon from  "./WeatherIcon";

export default function Weatherinfo(props) {
    return (
        <div className="Weatherinfo">
              <h1>{props.data.city}</h1>
            <ul>
                 <li>
                     <FormatedDate date={props.data.date} />
                     </li>
                 <li className= "text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <div className= "float-left">
                    <WeatherIcon code = {props.data.icon}  />
                    </div>
                    <div className="float-left">
                    <span className="temperature">
                      {Math.round(props.data.temperature)}
                      </span>
                    <span className="unit">°C</span>
                    </div>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Wind:{props.data.wind} Km/h</li>
                        <li>Humidity: {props.data.humidity}%</li>
                         <li>Feels like: {Math.round(props.data.feelsLike)}°C</li>
                    </ul>

                </div>
            </div>



        </div>
    );
}