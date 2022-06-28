/**
* This is a input Component
* @param {String} props.value - value of the field
* @param {Function} props.onChange - execute after changing value.

* @returns {CustomTextInput}- returns an Input Component
*/

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';

import styles from '@styles/elements/CustomInput.scss';

const CustomTextInput = props => {
  const [password, setPassword] = useState(props.hidden);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={props.onChange}
        value={props.value}
        secureTextEntry={password}
        {...props}
      />

      {props.hidden !== undefined && (
        <TouchableOpacity
          onPress={() => setPassword(prevState => !prevState)}
          style={styles.eye}>
          <Image source={require('@assets/images/eye-invisible.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
