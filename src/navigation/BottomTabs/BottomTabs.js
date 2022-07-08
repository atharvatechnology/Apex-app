import React, {useEffect, useState, useRef} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '@apexapp/screens/Pages/Home';
import HomePage from '@screens/Pages/Home';
import HomeRouter from '../Home/Home';
import CoursesRouter from '../Home/Courses';

const Tab = createMaterialBottomTabNavigator();

const deviceWidth = Dimensions.get('screen').width;

/**
 * Consists of layout for getStarted screen with three slider sections
 * slider sections imported from data/onBoarding returning array of object of image, title and short desc
 * @returns {AppIntroSlider, View} If slider is completed it gives onBoarding sections while if it is completed it goes on to next layout
 *
 **/

const BottomTabs = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#252775"
      inactiveColor="gray"
      shifting={false}
      barStyle={{
        backgroundColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeRouter}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image source={require('@assets/images/homeActive.png')} />
            ) : (
              <Image source={require('@assets/images/homeInactive.png')} />
            ),
        }}
      />
      <Tab.Screen
        name="Courses"
        component={CoursesRouter}
        options={{
          tabBarLabel: 'MY COURSES',
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image source={require('@assets/images/coursesActive.png')} />
            ) : (
              <Image source={require('@assets/images/coursesInactive.png')} />
            ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={TabTest}
        options={{
          tabBarLabel: 'NOTIFICATION',
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image
                source={require('@assets/images/notificationInactive.png')}
              />
            ) : (
              <Image
                source={require('@assets/images/notificationInactive.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TabTest}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image source={require('@assets/images/profileInactive.png')} />
            ) : (
              <Image source={require('@assets/images/profileInactive.png')} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabTest = () => {
  return <Text></Text>;
};

const styles = StyleSheet.create({
  activeDotStyle: {
    bottom: -28,
    width: 30,
  },
  centerAlign: {
    alignItems: 'center',
  },
  dotStyle: {
    bottom: -28,
  },
  renderItem: {
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    alignSelf: 'stretch',
    resizeMode: 'stretch',
  },
});

export default BottomTabs;
