import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => (
  <div className="forecastSummary">
    <div className="date">
      <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
    <div className="icon">
      <span>
        <WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" />
      </span>
    </div>
    <div className="temperature">
      <span>{props.temperature.max}</span>
    </div>
    <div className="description">
      <span>{props.description}</span>
    </div>
    <button className="moreDetails" onClick={() => props.onSelect(props.date)}>More Details</button>
  </div>
);

//  Set data types for each prop
ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
