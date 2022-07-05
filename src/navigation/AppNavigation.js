/**
 * This is the main container for all the navigators.
 * @returns {MainRouter}- returns a Router
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// import Home from '@apexapp/screens/Pages/Home';
import HomeRouter from './Home/Home';
import ExamRouter from './Home/Exam';
import OnBoarding from '@screens/onBoarding';
// import Reset from '@apexapp/screens/ResetPassword/Reset';
import ResetRouter from './ResetPassword/Reset';
import SignUpRouter from './signup';
import SignInRouter from './signin';
import Walkthrough from '@screens/walkthrough';


export const MyStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Exam">
        <MyStack.Screen name="Walkthrough" component={Walkthrough} />
        <MyStack.Screen name="OnBoarding" component={OnBoarding} />

        {SignInRouter()}
        {SignUpRouter()}
        {ResetRouter()}
        {HomeRouter()}
        {ExamRouter()}


        {/* <MyStack.Screen name="Drawer" component={DrawerApp} /> */}
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
