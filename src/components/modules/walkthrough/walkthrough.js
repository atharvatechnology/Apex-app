/**
* This is waklthrough page containing the logo of the organization. This page automatically redirects to on boarding, sign in or dashboard after 4 seconds.
* @param {Object} props.navigation - contains all the propeties of react navigation
* @returns {Walkthrough}- returns a module for walkthrough
*/


import React, { useEffect } from "react";
import { Image, Text, View, Animated } from "react-native";

// import Animated, { FadeIn } from 'react-native-reanimated';

import styles from '@styles/modules/walkthrough.scss';


const Walkthrough = (props) => {

  const startValue = new Animated.Value(1);
  const endValue = 1.5;

  useEffect(() => {
    Animated.loop(
      Animated.timing(startValue, {
        toValue: endValue,
        duration: 2000,
        // friction: 1,
        useNativeDriver: true,
      }),
      // { iterations: 1000 },
    ).start();
  }, [startValue, endValue]);

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('OnBoarding');
    }, 4000);
  }, []);

  return (
    <View style={styles.container}>

      {/* <Animated.View entering={FadeIn.delay(500).duration(700)} style={styles.test}> */}
      <Animated.Image
        style={[
          {
            transform: [
              {
                scale: startValue,
              },
            ],
          },
        ]}
        source={require('@assets/images/apexLogo.png')}
      />
      {/* </Animated.View> */}

    </View>
  );
}

export default Walkthrough;