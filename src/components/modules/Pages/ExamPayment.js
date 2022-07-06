/**
 * This is  page containing the ExamPayment and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {ExamPayment}- returns a module for Exampayment
 */

import React, {useState} from 'react';

import {View, Image, TouchableOpacity, Text, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import CustomButton from '@apexapp/components/elements/CustomButton';
import CustomTextInput from '@apexapp/components/elements/CustomTextInput';
import styles from '@styles/modules/Pages/Exam';

let preparation = [
  {
    id: 1,
    name: '',
  },
];

return (
  <>
    {' '}
    <View style={styles.maincontainer}>
      <TouchableOpacity onPress={handleArrow} style={styles.left}>
        <Image source={require('@assets/images/leftArrow.png')} />
        <Text style={styles.p}>Exams</Text>
      </TouchableOpacity>
    </View>
  </>
);
