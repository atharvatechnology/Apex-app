/**
 * This is  page containing the profile and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {Profile}- returns a module for profile of the user
 */
import React from 'react';

import {View, Image, TouchableOpacity, Text} from 'react-native';

import CustomButton from '@apexapp/components/elements/CustomButton';
import styles from '@styles/modules/Profile/Profile';

const Profile = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.head}>Profile</Text>
      <View style={styles.gap} />
      <View style={styles.img}>
        <Image source={require('@assets/images/tulogo.png')} />
        <View style={styles.txt}>
          <Text style={styles.name}>Sumna Panday</Text>
          <Text style={styles.number}>+977-9801202348</Text>
          <Text style={styles.gmail}>abc@gmail.com</Text>
        </View>
      </View>
      <View style={styles.gap} />
      <View style={styles.div}>
        <Text style={styles.p}>Your preference</Text>
        <View style={styles.card}>
          <Text style={styles.title1}>Loksewa</Text>
          <Text style={styles.title2}>Banking</Text>
        </View>
      </View>
      <View style={styles.gap} />
      <View style={styles.buttons}>
        <CustomButton
          // type="theme"
          title={'Edit info'}
          style={styles.button}
          color="white"
        />
        <CustomButton
          // type="theme"
          title={'Logout'}
          style={styles.button}
          color="white"
        />
        <CustomButton
          // type="theme"
          title={'Reset password?'}
          style={styles.button}
          color="white"
        />
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};
export default Profile;
