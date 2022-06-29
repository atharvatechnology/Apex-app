/**
 * This is a template for Interest screen. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {InterestTemplate}- returns a template
 */

import React from 'react';
import {View} from 'react-native';

import Interest from '@modules/signup/Interest';

const InterestTemplate = props => {
  return <Interest {...props} />;
};

export default InterestTemplate;
