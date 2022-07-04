/**
 * This is one of  the screens for Verify number. It contains an input field for entering the number.
 * @param {Object} props.navigation - contains all the propeties of react navigation.
 * @returns {VerifyNumber}- returns a module for Verify number.
 */

import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import CustomTextInput from '@elements/CustomTextInput';
import CustomButton from '@elements/CustomButton';
import styles from '@styles/modules/ResetPassword/Reset.scss';

const VerifyNumber = props => {
  const handleReset = () => {
    props.navigation.navigate('Verify');
  };

  const handleResets = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleResets} style={styles.left}>
        <Image source={require('@assets/images/leftArrow.png')} />
      </TouchableOpacity>

      <Text style={styles.title}>Phone number</Text>

      <Text style={styles.p}>Add phone number for verification.</Text>

      <View style={styles.formContainer}>
        <CustomTextInput onChange={() => {}} placeholder="Phone number" />
      </View>

      <View style={styles.bottomContainer}>
        <CustomButton
          type="theme"
          title={'Send code'}
          style={styles.signUp}
          onPress={handleReset}
        />
      </View>
    </View>
  );
};

export default VerifyNumber;
