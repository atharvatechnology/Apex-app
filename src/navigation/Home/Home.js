import React, {Fragment} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from '../AppNavigation';

import Home from '@apexapp/screens/Pages/Home';

const HomeRouter = () => {
  return (
    <Fragment>
      <MyStack.Screen name="Home" component={Home} />
    </Fragment>
  );
};

export default HomeRouter;
