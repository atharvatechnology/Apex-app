import React, { Fragment } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from '../AppNavigation';

import Courses from '@screens/Pages/Courses';
import CourseOverview from '@screens/Pages/CourseOverview';
import CoursePayment from '@apexapp/screens/Pages/CoursePayment';

const CoursesRouter = () => {
  return (
    <MyStack.Navigator screenOptions={{ headerShown: false }}>
      <MyStack.Screen name="Courses" component={Courses} />
      <MyStack.Screen name="CourseOverview" component={CourseOverview} />
      <MyStack.Screen name="CoursePayment" component={CoursePayment} />

    </MyStack.Navigator>
  );
};

export default CoursesRouter;
