import React from 'react';
import PropTypes from 'prop-types';

// create a component called LocationDetails, which uses JSX to render props.city 
// and props.country inside of a h1 tag. Give your h1 tag an appropriate class name.
const LocationDetails = props => <h1 className="LocationDetails">{props.city}, {props.country}</h1>;

//  Set data types for each prop
LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
