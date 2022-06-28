/**
 * This is a template for NewPassword. It contains all the modules used in this template for to reset NewPassword.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {VerifyNewPassword}- returns a new password template to set new password as required.
 */
import React from 'react';

import NewPassword from '@modules/ResetPassword/NewPassword';

const VerifyNewPassword = props => {
  return <NewPassword {...props} />;
};

export default VerifyNewPassword;
