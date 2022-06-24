/**
* This is waklthrough page containing the logo of the organization. This page automatically redirects to on boarding, sign in or dashboard after 4 seconds.
* @param {Object} props.navigation - contains all the propeties of react navigation
* @returns {Walkthrough}- returns a module for walkthrough
*/


import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";

import Animated, { FadeIn } from 'react-native-reanimated';

import styles from '@styles/modules/walkthrough.scss';


const Walkthrough = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('OnBoarding');
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>

      <Animated.View entering={FadeIn.delay(500).duration(700)} style={styles.test}>
        <Image
          // style={styles.tinyLogo}
          source={require('@assets/images/apexLogo.png')}
        />
      </Animated.View>
    </View>
  );
}

export default Walkthrough;