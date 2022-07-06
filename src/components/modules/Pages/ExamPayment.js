/**
 * This is  page containing the ExamPayment and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {ExamPayment}- returns a module for Exampayment
 */

import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

import styles from '@styles/modules/Pages/ExamPayment';

const ExamPaymentPage = () => {
  return (
    <>
      <View style={styles.maincontainer}>
        <TouchableOpacity style={styles.left}>
          <Image source={require('@assets/images/leftArrow.png')} />
          <Text style={styles.p}>Payments</Text>
        </TouchableOpacity>
        <View style={styles.gap} />
        <View style={styles.text}>
          <Text style={styles.baseText}>Test exam 1</Text>
          <Text style={styles.Text}>
            Loksewa class for all types of students.
          </Text>
          <View style={styles.prices}>
            <Text style={styles.price}>Rs.500</Text>
          </View>
        </View>
        <View style={styles.gap} />
        <View style={styles.text}>
          <Text style={styles.baseText}>Instruction</Text>
          <Text style={styles.Texts}>1.instruction number 1</Text>
          <Text style={styles.Text}>2.instruction number 2</Text>
        </View>
      </View>
    </>
  );
};

export default ExamPaymentPage;
