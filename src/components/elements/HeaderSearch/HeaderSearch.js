/**
 * This is  page containing the HeaderSearch and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {HeaderSearch}- returns a module for HeaderSearch
 */

import React, {useState} from 'react';

import {Image, Text, View, TouchableOpacity, Modal} from 'react-native';

import CustomButtonPopup1 from '@apexapp/components/elements/CustomButtonPopup/index1';
import CustomTextInput from '@apexapp/components/elements/CustomTextInput';
import styles from '@styles/elements/HeaderSearch/HeaderSearch.scss';

let information = [
  {
    id: 1,
    name: '',
  },
];

const HeaderSearch = props => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisible = bool => {
    setIsModalVisible(bool);
  };
  const handlefilter = () => {
    changeModalVisible(true);
  };
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const onChange = item => {
    setSelectedItem(item.id);
    setShow(true);
  };

  const handlePress = id => {
    props.navigation.navigate('');
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.filterDiv}>
          <TouchableOpacity style={styles.left}>
            <Image source={require('@assets/images/leftArrow.png')} />
            <Text style={styles.p} onPress={() => handlePress('')}>
              Courses
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlefilter}>
            <Image
              style={styles.filter}
              source={require('@assets/images/Filter.png')}
            />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            nRequestClose={() => {
              changeModalVisible(false);
            }}>
            <CustomButtonPopup1 changeModalVisible={changeModalVisible} />
          </Modal>
        </View>

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
            data={information}
            onChange={onChange}
            placeholder="Search here"
            color="#000000"
          />
        </View>
      </View>
    </>
  );
};

export default HeaderSearch;
