import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';
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
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.cityForecast = this.cityForecast.bind(this);
  }

  componentDidMount() {
    Axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=Manchester')
      .then(response => this.setState({
        forecasts: response.data.forecasts,
        location: {
          city: response.data.location.city,
          country: response.data.location.country,
        },
      }))
      .catch(error => console.log(error));
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  cityForecast(city) {
    Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then(response => this.setState({
        forecasts: response.data.forecasts,
        location: {
          city: response.data.location.city,
          country: response.data.location.country,
        },
      }))
      .catch((error) => {
        console.log(error);
        alert('City not found. Please try again.');
      });
    console.log(`city is: ${city}`);
  }

  render() {
    const selectedForecast = this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm
          cityForecast={this.cityForecast}
        />
        <ForecastSummaries
          forecasts={this.state.forecasts}
          handleForecastSelect={this.handleForecastSelect}
        />
        {
          selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
        {/* <ForecastDetails
          forecast={this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate)}
        /> */}
      </div>
    );
  }
}

// App.propTypes = {
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
//   forecasts: PropTypes.array.isRequired,
// };

export default App;
