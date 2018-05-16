import 'raf/polyfill';
import React from 'react'; // effectively the same as const React = require('react') - imports the resct library
import { render } from 'react-dom';
import App from './components/app';
import { location } from './data/forecast.json';

// Render the app component. Propoerties set on the app element are essentially
// treated as arguments for the function.
render(<App location={location} />, document.getElementById('root'));
