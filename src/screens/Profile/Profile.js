import React from 'react';

import {View} from 'react-native';

import ProfilePage from '@apexapp/components/templates/Profile';

const Profile = props => {
  return (
    <View>
      <ProfilePage {...props} />
    </View>
  );
};

export default Profile;
