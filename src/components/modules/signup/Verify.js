/**
 * This is one of three screens for signup. It contains an input field for entering the otp received.
 * @param {Object} props.navigation - contains all the propeties of react navigation.
 * @returns {Verify}- returns a module for Verify.
 */

import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import CustomTextInput from '@elements/CustomTextInput';
import CustomButton from '@elements/CustomButton';
import styles from '@styles/modules/signup/Verify.scss';

const Verify = props => {
  const handleVerify = () => {
    props.navigation.navigate('Interest');
  };

  const handleBack = () => {
    props.navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.left}>
        <Image source={require('@assets/images/leftArrow.png')} />
      </TouchableOpacity>

      <Text style={styles.title}>Verify Yourself</Text>
      <Text style={styles.p}>Code has been sent to your phone number</Text>

      <View style={styles.formContainer}>
        <CustomTextInput
          onChange={() => {}}
          placeholder="Enter code "
          error={'Error message'}
        />
      </View>

      <Text style={styles.p}>Code will expire in 33s</Text>

      <View style={styles.bottomContainer}>
        <CustomButton
          type="white"
          title={'Re-send code'}
          style={styles.signUps}
          onPress={handleVerify}
        />

        <CustomButton
          type="theme"
          title={'Verify'}
          style={styles.signUp}
          onPress={handleVerify}
        />
      </View>
    </View>
  );
};

export default Verify;
