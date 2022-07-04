/**
 * This is a template for verify Number. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {VerifyReset}- returns a template to verify number .
 */
import React from 'react';
//import {View} from 'react-native';

import VerifyNumber from '../modules/ResetPassword/VerifyNumber';

const Number = props => {
  return <VerifyNumber {...props} />;
};

export default Number;
