/**
 * This is one of two screens for reset. It contains an input field for entering the otp received.
 * @param {Object} props.navigation - contains all the propeties of react navigation.
 * @returns {Reset}- returns a module for Reset
 */

import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CustomTextInput from '@elements/CustomTextInput';
import CustomButton from '@elements/CustomButton';
import styles from '@styles/modules/ResetPassword/Reset.scss';

const Reset = props => {
  const handleReset = () => {
    props.navigation.navigate('NewPassword');
  };

  const handleResets = () => {
    props.navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleResets} style={styles.left}>
        <Image source={require('@assets/images/leftArrow.png')} />
      </TouchableOpacity>

      <Text style={styles.title}>Reset password</Text>

      <Text style={styles.titles}>Verify yourself</Text>
      <Text style={styles.p}>Code has been sent to your phone number</Text>

      <View style={styles.formContainer}>
        <CustomTextInput onChange={() => {}} placeholder="Enter code here" />
      </View>
      <Text style={styles.p}>Reset code in: 33s</Text>

      <View style={styles.bottomContainer}>
        <CustomButton
          type="white"
          title={'Re-send code'}
          style={styles.signUps}
        />

        <CustomButton
          type="theme"
          title={'Verify'}
          style={styles.signUp}
          onPress={handleReset}
        />
      </View>
    </View>
  );
};

export default Reset;
