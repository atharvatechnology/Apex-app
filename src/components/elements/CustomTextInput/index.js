/**
* This is a input Component
* @param {String} props.value - value of the field
* @param {Function} props.onChange - execute after changing value.

* @returns {CustomTextInput}- returns an Input Component
*/

import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import styles from '@styles/elements/CustomInput.scss';


const CustomTextInput = (props) => {

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={props.onChange}
        value={props.value}
        {...props}
      />

    </View>
  );
}

export default CustomTextInput;