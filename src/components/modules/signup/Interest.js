/**
 * This is one of three screens for signup. It contains dropdowns for selecting user's interests.
 * @param {Object} props.navigation - contains all the propeties of react navigation.
 * @returns {Interest}- returns a module for Interest.
 */

import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';

import styles from '@styles/modules/signup/Interests.scss';
import CustomButton from '@elements/CustomButton';

const Interest = props => {
  const handleContinue = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hi Kshor Ghising</Text>
        <Text style={styles.p}>Setup your profile in just a few steps.</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.h3}>What's your interest?</Text>
      </View>

      <CustomButton
        type="theme"
        title={'Continue'}
        style={styles.continue}
        onPress={handleContinue}
      />
    </View>
  );
};

export default Interest;
