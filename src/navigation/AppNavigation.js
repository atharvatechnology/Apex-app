/**
 * This is the main container for all the navigators.
 * @returns {MainRouter}- returns a Router
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

// import Home from '@apexapp/screens/Pages/Home';
import HomeRouter from './Home/Home';
import ExamRouter from './Home/Exam';
import ExamDetailRouter from './Home/ExamDetail';
import OnBoarding from '@screens/onBoarding';
// import Reset from '@apexapp/screens/ResetPassword/Reset';
import ResetRouter from './ResetPassword/Reset';
import SignUpRouter from './signup';
import SignInRouter from './signin';
import { store } from '@apexapp/store/store';
import Walkthrough from '@screens/walkthrough';


export const MyStack = createNativeStackNavigator();

const MainRouter = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="ExamDetail">
          <MyStack.Screen name="Walkthrough" component={Walkthrough} />
          <MyStack.Screen name="OnBoarding" component={OnBoarding} />

          {SignInRouter()}
          {SignUpRouter()}
          {ResetRouter()}
          {HomeRouter()}
          {ExamRouter()}
          {ExamDetailRouter()}


          {/* <MyStack.Screen name="Drawer" component={DrawerApp} /> */}
        </MyStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default MainRouter;
