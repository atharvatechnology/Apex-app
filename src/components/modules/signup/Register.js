/**
 * This is one of three screens for signup. It contains a form for filling up user's information.
 * @param {Object} props.navigation - contains all the propeties of react navigation.
 * @returns {Register}- returns a module for Register.
 */

import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, View, TouchableOpacity, Animated } from 'react-native';

import Header from '@elements/Header';
import styles from '@styles/modules/signup/Register.scss';
import CustomTextInput from '@elements/CustomTextInput';
import CustomButton from '@elements/CustomButton';
import { registerForm } from '@data/signup/register';
import validate from '@apexapp/utils/validation';
import { POST } from '@apexapp/utils/api';

const Register = props => {
  const [formData, setFormData] = useState(registerForm);

  const [errormsg, setErrorMsg] = useState('');

  var fadeAnim = useRef(new Animated.Value(1)).current;
  const autoFadeOut = () => {
    fadeAnim.setValue(1);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 10000,
      useNativeDriver: true,
    }).start(() => {
      // Animated.reset(fadeAnim);
    });
  };

  const onChangeHandler = (key, value, password) => {
    // let tempFormData = [...formData];
    // tempFormData[key].value = value;
    // setFormData(tempFormData);

    setFormData(prevState => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          value: value,
          valid: validate(value, prevState[key].validationRules, password),
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

  const handleSignupPress = async () => {
    await handleSignUp();

  };

  const handleToLoginLink = () => {
    props.navigation.navigate('Login');
  };


  const handleSignUp = async () => {
    let data = {
      fullName: formData.fullName.value,
      username: formData.phoneNumber.value,
      email: formData.email.value,
      password: formData.password.value,
      // username: 'test',
    }
    try {
      const response = await POST('api/accounts/create/', data);
      console.log(response.status);
      const resJson = await response.json();
      // console.log(resJson) 
      if (response.status === 201) {
        props.navigation.navigate('Verify');
      }
      if (response.status === 400) {
        setErrorMsg(resJson.username[0]);
        autoFadeOut();

      }
    } catch (error) {
      console.log("err", error);
    }
  }

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

        {
          Object.values(formData).map((item, index) => <CustomTextInput
            onChange={(value) => { onChangeHandler(item.elementConfig.name, value, formData.password.value) }}
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

      <View style={styles.errorContainer}>
        {errormsg !== '' && <Animated.View style={[styles.errortext, { opacity: fadeAnim }]}>
          <Text style={styles.p}>{errormsg}</Text>
        </Animated.View>}
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
