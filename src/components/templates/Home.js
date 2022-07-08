/**
 * This is a template for Home screen. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {Homepage}- returns a template
 */

import React from 'react';

import Home from '../modules/Pages/Home';

const HomePage = props => {
  return <Home {...props} />;
};

export default HomePage;
