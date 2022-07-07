/**
 * This is one of three screens for signup. It contains an input field for entering the otp received.
 * @param {Object} props.navigation - contains all the propeties of react navigation.
 * @returns {Verify}- returns a module for Verify.
 */

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import CustomTextInput from '@elements/CustomTextInput';
import CustomButton from '@elements/CustomButton';
import styles from '@styles/modules/signup/Verify.scss';
import { useDispatch, useSelector } from 'react-redux';
import { verifyRequest } from '@apexapp/store/actions/auth';
import { verifyForm } from '@apexapp/data/signup/verify';
import validate from '@apexapp/utils/validation';
import { PATCH } from '@apexapp/utils/api';

const Verify = props => {
  const [formData, setFormData] = useState(verifyForm);
  const [errormsg, setErrorMsg] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector(state => state.authReducer);

  const onChangeHandler = (key, value, password) => {
    setFormData(prevState => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          value: value,
          valid: validate(value, prevState[key].validationRules, password),
          touched: true,
        },
      };
    });
  };
  const blurHandler = key => {
    setFormData(prevState => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          focus: false,
        },
      };
    });
  };
  const focusHandler = key => {
    setFormData(prevState => {
      return {
        ...prevState,
        [key]: {
          ...prevState[key],
          focus: true,
          touched: true,
        },
      };
    });
  };

  const handleVerify = async () => {
    let data = {
      username: props.route.params.username,
      otp: formData.otp.value,
    }
    dispatch(verifyRequest(data));
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
        {/* <CustomTextInput
          onChange={() => { }}
          placeholder="Enter code "
          error={'Error message'}
        /> */}


        {Object.values(formData).map((item, index) => (
          <CustomTextInput
            onChange={value => {
              onChangeHandler(
                item.elementConfig.name,
                value,
              );
            }}
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
          />
        ))}
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
