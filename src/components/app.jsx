import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummary from './forecast-summary';

// const App = props => (
//   <LocationDetails
//     city={props.location.city}
//     country={props.location.country}
//   />
// );

const App = props => (
  <div className="App">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummary
      date={props.forecasts[0].date}
      temperature={props.forecasts[0].temperature}
      description={props.forecasts[0].description}
      icon={props.forecasts[0].icon}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  // forecasts: PropTypes.arrayOf({
  //   date: PropTypes.string.isRequired,
  //   temperature: PropTypes.number.isRequired,
  //   description: PropTypes.string.isRequired,
  //   icon: PropTypes.string.isRequired,
  // }).isRequired,
};


export default App;
