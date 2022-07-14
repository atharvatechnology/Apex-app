/**
 * This is a Session popup Component
 
 * @param {Function} props.onPress - function to execute on pressing

 * @returns {CustomSessionPopup}- returns a popup Component
 */

import React, { useState, useEffect } from 'react';

import { View, Image, Text, TouchableOpacity, AppState } from 'react-native';

import CustomButton from '../CustomButton';
import styles from '@styles/elements/CustomSessionPopup.scss';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

const data = [
  {
    title1: 'Session 1',
    title2: 'Time',
    time: '5.00',
  },
  {
    title1: 'Session 2',
    title2: 'Time',
    time: '5.00',
  },
  {
    title1: 'Session 3',
    title2: 'Time',
    time: '5.00',
  },


];
const CustomSessionPopup = props => {

  const dispatch = useDispatch();
  const examDetails = useSelector(state => state.examsReducer.examDetail);

  const handleEnroll = () => {
    props.navigation.navigate('ExamPayment')
  };

  const closeModal = bool => {
    props.changeModalVisible(bool);
  };
  return (

    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.flex1}>
          <Text style={styles.head}>Session</Text>
          <TouchableOpacity onPress={() => closeModal(false, 'Cancel')}>
            <Text style={styles.close}>Close</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.line}></Text>
        <View>
          <Text style={styles.topic}>Choose exam session</Text>
          <Text style={styles.p}>
            Choosing session will let you to particular session exam enrollment
          </Text>
        </View>


        <ScrollView>
          {examDetails.sessions.map((item, index) => {
            return (
              <View style={styles.data}>
                <View key={index}>

                  <Text style={styles.title1}>Session {index + 1}</Text>
                  <View style={styles.flex3}>
                    <View style={styles.iconback}>
                      <Image style={styles.clockicon}
                        source={require('@assets/images/Vecto.png')} />
                    </View>
                    <View>
                      <Text style={styles.title2}>Time</Text>
                      <Text style={styles.time}> {new Date(item.start_date).toLocaleTimeString('en',
                        { timeStyle: 'short', hour12: false, timeZone: 'UTC' })}</Text>
                    </View>
                  </View>
                </View>

                <CustomButton
                  onPress={handleEnroll}
                  style={styles.CustomButton}
                  type="theme"
                  title={'Enroll now'}

                />
              </View>

            );

          })}
        </ScrollView>
      </View>




    </TouchableOpacity >
  );
};

export default CustomSessionPopup;
