/**
 * This is a template for OnBoarding screen. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {OnBoardingTemplate}- returns a template
 */

import React from 'react';
import {View} from 'react-native';

import OnBoarding from '@modules/onBoarding';

const OnBoardingTemplate = props => {
  return <OnBoarding {...props} />;
};

export default OnBoardingTemplate;
