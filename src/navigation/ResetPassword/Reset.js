
import React, {Fragment} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Reset from '@screens/ResetPassword/Reset';

import {MyStack} from '../AppNavigation';
import NewPassword from '@screens/ResetPassword/NewPassword';

const ResetRouter = () => {
  return (
    <Fragment>
      <MyStack.Screen name="Reset" component={Reset} />
      <MyStack.Screen name="NewPassword" component={NewPassword} />
    </Fragment>
  );
};

export default ResetRouter;
