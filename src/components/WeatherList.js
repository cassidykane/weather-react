import React, { Component } from 'react';
import WeatherListItem from './WeatherListItem';

class WeatherList extends Component {
    render() {
        const { days } = this.props;
        const { dayClick } = this.props;
        return (
            <div className="weather-list flex-parent">
                { days.map((day, index) => 
                    <WeatherListItem 
                        key={day.dt}
                        day={day}
                        index={index} 
                        dayClick={dayClick} />
                )}
            </div>
        );
    }
}

export default WeatherList;