import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Walkthrough from '@screens/walkthrough';
import OnBoarding from '@screens/onBoarding';


const MyStack = createNativeStackNavigator();


const MainRouter = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Walkthrough">

        <MyStack.Screen name="Walkthrough" component={Walkthrough} />
        <MyStack.Screen name="OnBoarding" component={OnBoarding} />

        {/* <MyStack.Screen name="Drawer" component={DrawerApp} /> */}
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default MainRouter;