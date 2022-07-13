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
import CustomButtonPopup1 from '@apexapp/components/elements/CustomButtonPopup/index1';
import styles from '@styles/modules/Pages/Courses';
import HeaderSearch from '@apexapp/components/elements/HeaderSearch/HeaderSearch';

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
  const handleArrow = id => {
    props.navigation.navigate('CourseOverview', {test: id});
  };

  return (
    <>
      <ScrollView stickyHeaderIndices={[0]} style={styles.scrollView}>
        <View styles={styles.Header}>
          <HeaderSearch
            backnav=""
            showFilterButton={true}
            searchfunc={() => {}}
          />
        </View>
        <View style={styles.gap} />
        <View style={styles.mainContainer}>
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
