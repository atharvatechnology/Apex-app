/**
 * This is  page containing the Course and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {Course}- returns a module for Course page
 */

import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Modal,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import CustomTextInput from '@apexapp/components/elements/CustomTextInput';
import styles from '@styles/modules/Pages/Courses';
import CustomButtonPopup1 from '@apexapp/components/elements/CustomButtonPopup/index1';

let information = [
  {
    id: 1,
    name: '',
  },
];

const data = [
  {
    image: '',
    main: 'IOM',
    main1: 'Multiple Section',
    info: 'Medical Entrance (ME-CEE) with multiple line ',
    date: 'Starting on Feb ,2022 (4 month)',
    data: ' 200+ students enrolled',
  },
  {
    image: '',
    main: 'IOM',
    main1: 'Multiple Section',
    info: 'Medical Entrance (ME-CEE) with multiple line ',
    date: 'Starting on Feb ,2022 (4 month)',
    data: ' 200+ students enrolled',
  },
];

const Courses = props => {
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
  const handleArrow = id => {
    props.navigation.navigate('CourseOverview', {test: id});
  };

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContainer}>
          <View style={styles.filterDiv}>
            <TouchableOpacity style={styles.left}>
              <Image source={require('@assets/images/leftArrow.png')} />
              <Text style={styles.p}>Courses</Text>
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
          <View style={styles.gap} />

          <View style={styles.text}>
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => handleArrow(item.id)}
                  style={styles.cards}>
                  <View style={styles.img}>
                    <Image
                      style={styles.image}
                      source={require('@assets/images/home.jpeg')}
                    />
                  </View>

                  <View style={styles.card}>
                    <Text style={styles.main}>{item.main}</Text>

                    <Text style={styles.main1}>{item.main1}</Text>
                  </View>

                  <View>
                    <View>
                      <Text style={styles.infos}>{item.info}</Text>
                    </View>

                    <Text style={styles.date}>{item.date}</Text>

                    <Text style={styles.data}>{item.data}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Courses;
