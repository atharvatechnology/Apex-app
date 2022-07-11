import React, {Fragment} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from '../AppNavigation';

import Profile from '@apexapp/screens/Profile/Profile';

const ProfileRouter = () => {
  return (
    <Fragment>
      <MyStack.Screen name="Profile" component={Profile} />
    </Fragment>
  );
};
export default ProfileRouter;
