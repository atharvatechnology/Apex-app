/**
* This is the screens for signin. It contains a form for logging users into dashboard containing  error autofadeout msg.
  Fetch POST  is called using the app URL .
* @param {Object} props.navigation - contains all the propeties of react navigation.
* @returns {Login}- returns a module for login.

*/

import React, {useState, useRef, useEffect} from 'react';
import {Text, View, TouchableOpacity, Animated} from 'react-native';

import CustomTextInput from '@elements/CustomTextInput';
import CustomButton from '@elements/CustomButton';
import Header from '@elements/Header';
import styles from '@styles/modules/signin/login.scss';
import {POST} from '@apexapp/utils/api';

const Login = props => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errormsg, setErrorMsg] = useState('Phone Number or Number Incorrect');

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const autoFadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (errormsg !== '') {
        autoFadeOut();
      } else {
      }
    }, 2000);
    return () => clearTimeout(timeout);
  });

  const handleSignupLink = () => {
    props.navigation.navigate('Register');
  };

  const handleResetLink = () => {
    props.navigation.navigate('Reset');
  };

  const handleChange = (key, value) => {
    setFormData({...formData, [key]: value});
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await POST('api/auth/login/', formData);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.titleContainer}>
        <Text style={styles.title}> Login</Text>

        <View style={styles.p}>
          <Text style={styles.p}> Haven't got an account?</Text>
          <TouchableOpacity onPress={handleSignupLink}>
            <Text style={styles.link}> Sign up.</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formContainer}>
        <CustomTextInput
          onChange={val => handleChange('username', val)}
          placeholder="Phone Number"
        />

        <CustomTextInput
          onChange={val => handleChange('password', val)}
          placeholder="Password"
          hidden={true}
        />
      </View>
      <View style={styles.lastcontainer}>
        <Text style={styles.p}>Forget password?</Text>
        <TouchableOpacity onPress={handleResetLink}>
          <Text style={styles.link1}> Reset.</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={[styles.errortext, {opacity: fadeAnim}]}>
        <Text style={styles.p}>{errormsg}</Text>
      </Animated.View>

      <CustomButton
        type="theme"
        title={'Sign in'}
        style={styles.signIn}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default Login;
