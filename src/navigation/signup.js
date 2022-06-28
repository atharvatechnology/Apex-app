import React, {Fragment} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Interest from '@screens/Signup/Interest';
import Register from '@screens/Signup/Register';
import Verify from '@screens/Signup/Verify';

import {MyStack} from './AppNavigation';

const SignUpRouter = () => {
  return (
    <Fragment>
      <MyStack.Screen name="Register" component={Register} />
      <MyStack.Screen name="Verify" component={Verify} />
      <MyStack.Screen name="Interest" component={Interest} />
    </Fragment>
  );
};

export default SignUpRouter;
