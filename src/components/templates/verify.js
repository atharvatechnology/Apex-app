/**
 * This is a template for Verify screen. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {VerifyTemplate}- returns a template
 */

import React from 'react';
import {View} from 'react-native';

import Verify from '@modules/signup/Verify';

const VerifyTemplate = props => {
  return <Verify {...props} />;
};

export default VerifyTemplate;
