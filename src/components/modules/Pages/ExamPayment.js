/**
 * This is  page containing the ExamPayment and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {ExamPayment}- returns a module for Exampayment
 */

import React, {useState} from 'react';

import {View, Image, TouchableOpacity, Text, Dimensions} from 'react-native';

const Exampayment = () => {
  return;
  <>
    <View style={styles.maincontainer}>
      <TouchableOpacity onPress={handleArrow} style={styles.left}>
        <Image source={require('@assets/images/leftArrow.png')} />
        <Text style={styles.p}>Exams</Text>
      </TouchableOpacity>
    </View>
  </>;
};

export default Exampayment;
