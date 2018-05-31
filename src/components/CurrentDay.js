import React, { Component } from 'react';

class CurrentDay extends Component {
    render() {
        const {city} = this.props;
        const {day} = this.props;
        const date = new Date(day.dt * 1000);
        const weekdays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekday = weekdays[date.getDay()];
        const iconURL = 'http://openweathermap.org/img/w/' + day.weather[0].icon + '.png';
        return(
            <div className="current-day">
                <h1 className="day-header">{weekday} in {city.name}</h1>
                <div className="weather">
                    <p>
                        <img src={iconURL} alt={day.weather[0].description}/>
                        {day.weather[0].description}
                    </p>
                </div>
                <div className="details flex-parent">
                    <div className="temperature-breakdown">
                        <p>Morning Temperature: {day.temp.morn}&deg;F</p>
                        <p>Day Temperature: {day.temp.day}&deg;F</p>
                        <p>Evening Temperature: {day.temp.eve}&deg;F</p>
                        <p>Night Temperature: {day.temp.night}&deg;F</p>
                    </div>
                </div>
                <div className="misc-details">
                    <p>Atmospheric Pressure: {day.pressure} hPa</p>
                    <p>Humidity: {day.humidity}%</p>
                    <p>Wind Speed: {day.speed} mph</p>
                </div>
            </div>
        );
    }
}

export default CurrentDay;