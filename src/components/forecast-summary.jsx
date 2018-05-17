import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <div className="forecastSummary">
    <div className="date">
      <span>{props.date}</span>
    </div>
    <div className="temperature">
      <span>{props.temperature.max}</span>
    </div>
    <div className="description">
      <span>{props.description}</span>
    </div>
    <div className="icon">
      <span>{props.icon}</span>
    </div>
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
