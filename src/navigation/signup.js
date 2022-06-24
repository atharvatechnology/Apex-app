import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Interest from '@screens/Signup/Interest';
import Register from '@screens/Signup/Register';
import Verify from '@screens/Signup/Verify';


const MyStack = createNativeStackNavigator();

const SignUpRouter = () => {
  return (
    <NavigationContainer independent={true}>
      <MyStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Register">

        <MyStack.Screen name="Register" component={Register} />
        <MyStack.Screen name="Verify" component={Verify} />
        <MyStack.Screen name="Interest" component={Interest} />

      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default SignUpRouter;