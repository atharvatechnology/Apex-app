/**
 * This is  page containing the Exam and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {Exam}- returns a module for Exam
 */

import React, { useState } from 'react';

import { View, Image, TouchableOpacity, Text, Dimensions, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import CustomButton from '@apexapp/components/elements/CustomButton';
import CustomButtonPopup from '@apexapp/components/elements/CustomButtonPopup';
import CustomTextInput from '@apexapp/components/elements/CustomTextInput';
import styles from '@styles/modules/Pages/Exam';


let preparation = [
  {
    id: 1,
    name: '',
  },
];

const data = [
  {
    icon: '',
    title: 'LIVE',
    title1: 'RBB',
    text: 'Loksewa Mock Test - 1',
    amount: `Rs.500   \u25CF 60 min`,
  },

  {
    icon: '',
    title: 'LIVE',
    title1: 'RBB',
    text: 'Loksewa Mock Test - 1',
    amount: `Rs.500    \u25CF 60 min`,
  },

  {
    icon: '',
    title: 'LIVE',
    title1: 'RBB',
    text: 'Loksewa Mock Test - 1',
    amount: `Rs.500     \u25CF 60 min`,
  },
  {
    icon: '',
    title: 'LIVE',
    title1: 'RBB',
    text: 'Loksewa Mock Test - 1',
    amount: `Rs.500     \u25CF 60 min`,
  },
  {
    icon: '',
    title: 'LIVE',
    title1: 'RBB',
    text: 'Loksewa Mock Test - 1',
    amount: `Rs.500     \u25CF 60 min`,
  },
];

const Exam = props => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisible = (bool) => {
    setIsModalVisible(bool)
  }

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const onChange = item => {
    setSelectedItem(item.id);
    setShow(true);
  };
  const handleArrow = () => {
    props.navigation.navigate('Home');
  };

  const handleFilter = () => {
    changeModalVisible(true)
  };

  return (
    <View style={styles.maincontainer}>
      <TouchableOpacity onPress={handleArrow} style={styles.left}>
        <Image source={require('@assets/images/leftArrow.png')} />
        <Text style={styles.p}>Exams</Text>
      </TouchableOpacity>

      <View style={styles.searchandfilter}>
        <TouchableOpacity style={styles.search}>
          <Image
            style={styles.searchicon}
            source={require('@assets/images/search-interface-symbol.png')}
          />
        </TouchableOpacity>

        <CustomTextInput
          style={styles.CustomTextInput}
          value={selectedItem}
          data={preparation}
          onChange={onChange}
          placeholder="Search here"
          color="#000000"
        />



        <TouchableOpacity onPress={handleFilter}>
          <Image
            style={styles.filter}
            source={require('@assets/images/Filter.png')}
          />
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType='slide'
          visible={isModalVisible}
          nRequestClose={() => changeModalVisible(false)}
        >
          <CustomButtonPopup
            changeModalVisible={changeModalVisible}

          />
        </Modal>




      </View>

      <View style={styles.line}></View>

      <ScrollView nestedScrollEnabled={true}>
        <View>
          {data.map((item, index) => {
            return (
              <View style={styles.main}>
                <View style={styles.card}>
                  <Text style={styles.icon}>{item.icon}</Text>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.title1}>{item.title1}</Text>
                </View>

                <View>
                  <Text style={styles.text}>{item.text}</Text>

                  <Text style={styles.amount}>{item.amount}</Text>
                </View>
              </View>
            );
          })}
        </View>

        <View>
          <CustomButton
            type="white"
            title={'Load More'}
            style={styles.button}

          />
        </View>
        <View style={{ height: Dimensions.get('window').height }}></View>
      </ScrollView>
    </View>
  );
};

export default Exam;
