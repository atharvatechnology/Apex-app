import React, {Fragment} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from '../AppNavigation';

import NewPassword from '@screens/ResetPassword/NewPassword';
import Reset from '@screens/ResetPassword/Reset';

const ResetRouter = () => {
  return (
    <Fragment>
      <MyStack.Screen name="Reset" component={Reset} />
      <MyStack.Screen name="NewPassword" component={NewPassword} />
    </Fragment>
  );
};

export default ResetRouter;
