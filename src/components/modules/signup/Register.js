/**
 * This is one of three screens for signup. It contains a form for filling up user's information.
 * @param {Object} props.navigation - contains all the propeties of react navigation.
 * @returns {Register}- returns a module for Register.
 */

import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import Header from '@elements/Header';
import styles from '@styles/modules/signup/Register.scss';
import CustomTextInput from '@elements/CustomTextInput';
import CustomButton from '@elements/CustomButton';
import { registerForm } from '@data/signup/register';
import validate from '@apexapp/utils/validation';

const Register = props => {
  const [formData, setFormData] = useState(registerForm);


  const onChangeHandler = (key, value) => {
    // let tempFormData = [...formData];
    // tempFormData[key].value = value;
    // setFormData(tempFormData);

    setFormData(prevState => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          value: value,
          valid: validate(value, prevState[key].validationRules),
          touched: true
        }
      }
    })
  };
  const blurHandler = (key) => {
    // let tempFormData = [...formData];
    // tempFormData[key].focus = false;
    // setFormData(tempFormData);

    setFormData(prevState => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          focus: false
        }
      }
    })
  }
  const focusHandler = (key) => {
    // let tempFormData = [...formData];
    // tempFormData[key].focus = true;
    // setFormData(tempFormData);

    setFormData(prevState => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          focus: true,
          touched: true,
        }
      }
    })
  }

  const handleSignupPress = () => {
    props.navigation.navigate('Verify');
  };

  const handleToLoginLink = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Register for free</Text>

        <View style={styles.p}>
          <Text style={styles.p}>Already got an account?</Text>
          <TouchableOpacity onPress={handleToLoginLink}>
            <Text style={styles.link}> Login.</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formContainer}>
        {/* <CustomTextInput onChange={() => {}} placeholder="Full Name" />
        <CustomTextInput onChange={() => {}} placeholder="Phone Number" />
        <CustomTextInput onChange={() => {}} placeholder="Email(Optional)" />
        <CustomTextInput
          onChange={() => {}}
          placeholder="Password"
          hidden={true}
        />
        <CustomTextInput
          onChange={() => {}}
          placeholder="Confirm Password"
          hidden={true}
        /> */}

        {
          Object.values(formData).map((item, index) => <CustomTextInput
            onChange={(value) => { onChangeHandler(item.elementConfig.name, value) }}
            placeholder={item.elementConfig.placeholder}
            // hidden={true}
            password={item.elementConfig.type === 'password'}

            key={item.elementConfig.name}
            // id={item.elementConfig.name}
            // type={item.elementConfig.type}
            keyboardType={item.elementConfig.keyboardType}
            value={item.value}
            valid={item.valid}
            error={item.errorMessage}
            touched={item.touched}
            // errorMessage={item.errorMessage}
            onBlur={() => blurHandler(item.elementConfig.name)}
            onFocus={() => focusHandler(item.elementConfig.name)}
          // focus={item.focus}
          />)
        }
      </View>

      <CustomButton
        type="theme"
        title={'Sign up'}
        style={styles.signUp}
        onPress={handleSignupPress}
      />
    </View>
  );
};

export default Register;
