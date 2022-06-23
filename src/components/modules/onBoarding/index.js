import React from "react";
import { Text, View } from "react-native";

import Animated, { FadeIn } from 'react-native-reanimated';

import styles from '@styles/modules/onBoarding.scss';
import CustomButton from "@elements/CustomButton";


const Walkthrough = (props) => {
  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Text style={styles.heading}>Apex Educational Acedemy</Text>

        <View style={styles.paginationContainer}>

          <CustomButton
            type='white'
            title="Skip to Signup"
          />
        </View>
      </View>


    </View>
  );
}

export default Walkthrough;