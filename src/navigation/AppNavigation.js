/**
* This is the main container for all the navigators.
* @returns {MainRouter}- returns a Router
*/

import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

import OnBoarding from '@screens/onBoarding';
import SignUpRouter from './signup';
import Walkthrough from '@screens/walkthrough';


const MyStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Walkthrough">

        <MyStack.Screen name="Walkthrough" component={Walkthrough} />
        <MyStack.Screen name="OnBoarding" component={OnBoarding} />

        <MyStack.Screen name="Signup" component={SignUpRouter} />


        {/* <MyStack.Screen name="Drawer" component={DrawerApp} /> */}
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default MainRouter;