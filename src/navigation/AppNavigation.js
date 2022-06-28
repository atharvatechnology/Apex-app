/**
 * This is the main container for all the navigators.
 * @returns {MainRouter}- returns a Router
 */

import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import NewPassword from '@apexapp/screens/ResetPassword/NewPassword';
import OnBoarding from '@screens/onBoarding';
import Reset from '@apexapp/screens/ResetPassword/Reset';
import SignUpRouter from './signup';
import Walkthrough from '@screens/walkthrough';
import SignInRouter from './signin';

export const MyStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Walkthrough">
        <MyStack.Screen name="Walkthrough" component={Walkthrough} />
        <MyStack.Screen name="OnBoarding" component={OnBoarding} />
        <MyStack.Screen name="Reset" component={Reset} />
        <MyStack.Screen name="NewPassword" component={NewPassword} />

        {SignUpRouter()}
        {SignInRouter()}

        {/* <MyStack.Screen name="Drawer" component={DrawerApp} /> */}
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
