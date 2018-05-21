import React from 'react';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastDetails = props => (
  <div className="forecastDetails">
    <div className="date">
      <span>{moment(props.forecast.date).format('ddd Do MMM')}</span>
    </div>
    <div className="max-temp">
      <span>Max Temperature: {props.forecast.temperature.max}</span>
    </div>
    <div className="min-temp">
      <span>Min Temperature: {props.forecast.temperature.min}</span>
    </div>
    <div className="wind">
      <span>Humidity: {props.forecast.humidity}</span>
    </div>
    <div className="humidity">
      <span>Wind: {props.forecast.wind.speed}</span>
      <span>{props.forecast.wind.direction}</span>
    </div>
  </div>
);


export default ForecastDetails;
