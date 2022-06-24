/**
* This is one of three screens for signup. It contains a form for filling up user's information.
* @param {Object} props.navigation - contains all the propeties of react navigation.
* @returns {Register}- returns a module for Register.
*/


import React, { useEffect } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";

import Header from "@elements/Header";
import styles from '@styles/modules/signup/Register.scss';
import CustomTextInput from "@elements/CustomTextInput";
import CustomButton from "@elements/CustomButton";

const Register = (props) => {

  const handleSignupPress = () => {

  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Register for free</Text>

        <View style={styles.p}>
          <Text style={styles.p}>Already got an account?</Text>
          <TouchableOpacity onPress={() => { }} >
            <Text style={styles.link}>  Login</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.formContainer}>
        <CustomTextInput onChange={() => { }} placeholder="Full Name" />
        <CustomTextInput onChange={() => { }} placeholder="Phone Number" />
        <CustomTextInput onChange={() => { }} placeholder="Email(Optional)" />
        <CustomTextInput onChange={() => { }} placeholder="Password" />
        <CustomTextInput onChange={() => { }} placeholder="Confirm Password" />
      </View>

      <CustomButton
        type='theme'
        title={'Sign up'}
        style={styles.signUp}
        onPress={handleSignupPress}
      />
    </View>
  );
}

export default Register;