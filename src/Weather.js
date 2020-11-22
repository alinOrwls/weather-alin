import  React from "react";
import   "./Weather.css";

export default function Weather() {
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
            <h1>Lisbon</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"  alt="Coludy" className="float-left"/>
                    <div className="float-left">
                    <span className="temperature">6</span>
                    <span className="unit">°C</span>
                    </div>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Precipitation: 2%</li>
                        <li>Humidity: 88%</li>
                        <li>Wind: 10 km/h</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
