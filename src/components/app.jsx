import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.scss';

// const App = props => (
//   <div className="forecast">
//     <LocationDetails
//       city={props.location.city}
//       country={props.location.country}
//     />
//     <ForecastSummaries
//       forecasts={props.forecasts}
//     />
//     <ForecastDetails
//       forecast={props.forecasts[0]}
//     />
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  Change this to date so that the user can select date to be displayed.
      // index: 3,
      selectedDate: 1525046400000,
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    return (
      <div className="forecast">
        <LocationDetails
          city={this.props.location.city}
          country={this.props.location.country}
        />
        <ForecastSummaries
          forecasts={this.props.forecasts}
          handleForecastSelect={this.handleForecastSelect}
        />
        <ForecastDetails
          forecast={this.props.forecasts.find(forecast => forecast.date === this.state.selectedDate)}
        />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
