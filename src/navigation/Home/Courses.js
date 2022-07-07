import React, {Fragment} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from '../AppNavigation';

import Courses from '@apexapp/screens/Pages/Courses';

const CoursesRouter = () => {
  return (
    <MyStack.Navigator screenOptions={{headerShown: false}}>
      <MyStack.Screen name="Courses" component={Courses} />
    </MyStack.Navigator>
  );
};

export default CoursesRouter;
