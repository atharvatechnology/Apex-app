/**
 * This is  page containing the profile and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {Profile}- returns a module for profile of the user
 */
import React, {useState} from 'react';

import {View, Image, TouchableOpacity, Modal, Text} from 'react-native';

import CustomButton from '@apexapp/components/elements/CustomButton';
import CustomProfilePopup from '@apexapp/components/elements/CustomProfilePopup';
import CustomProfilePopup1 from '@apexapp/components/elements/CustomProfilePopup/index1';
import styles from '@styles/modules/Profile/Profile';

const Profile = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const changeModalVisible = bool => {
    setIsModalVisible(bool);
  };

  const handlelogout = () => {
    changeModalVisible(true);
  };

  const changeModalVisible1 = bool => {
    setIsModalVisible1(bool);
  };

  const handlereset = () => {
    changeModalVisible1(true);
  };

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
          onPress={handlelogout}
          // type="theme"
          title={'Logout'}
          style={styles.button}
          color="white"
        />

        <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible}
          nRequestClose={() => changeModalVisible(true)}>
          <CustomProfilePopup changeModalVisible={changeModalVisible} />
        </Modal>
        <CustomButton
          onPress={handlereset}
          // type="theme"
          title={'Reset password?'}
          style={styles.button}
          color="white"
        />

        <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible1}
          nRequestClose={() => changeModalVisible1(true)}>
          <CustomProfilePopup1 changeModalVisible1={changeModalVisible1} />
        </Modal>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};
export default Profile;
