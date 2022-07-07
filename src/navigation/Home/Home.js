import React, { Fragment } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from '../AppNavigation';

import Home from '@screens/Pages/Home';
import Exam from '@screens/Pages/Exam';

const HomeRouter = () => {
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
      <MyStack.Screen name="Home" component={Home} />
      <MyStack.Screen name="Exam" component={Exam} />
    </MyStack.Navigator>
  );
};

export default HomeRouter;
