import React from 'react';
import ForecastSummary from './forecast-summary';
import '../styles/forecast-summaries.scss';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          temperature={forecast.temperature}
          description={forecast.description}
          icon={forecast.icon}
        />
      ))
    }


  </div>
);

export default ForecastSummaries;

