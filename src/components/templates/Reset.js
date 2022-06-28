/**
 * This is a template for Reset Password. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {VerifyReset}- returns a template
 */

import React from 'react';
// import {View} from 'react-native';

import Reset from '@modules/ResetPassword/Reset';

const VerifyReset = props => {
  return <Reset {...props} />;
};

export default VerifyReset;
