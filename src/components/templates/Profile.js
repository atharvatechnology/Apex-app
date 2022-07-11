/**
 * This is a template for Profile. It contains all the modules used in this template.
 * @param {Object} props - contains all the propeties of react navigation received from screens.
 * @returns {Profile}- returns a template to verify a Reset password.
 */

import React from 'react';

import Profile from '../modules/Profile/Profile';

const ProfilePage = props => {
  return <Profile {...props} />;
};

export default ProfilePage;
