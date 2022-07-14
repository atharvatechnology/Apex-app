/**
 * This is  page containing the ExamDetails and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {ExamDetails}- returns a module for ExamDetails
 */

import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  Dimensions,
} from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '@apexapp/components/elements/CustomButton';
import styles from '@styles/modules/Pages/ExamDetail';
import CustomSessionPopup from '@apexapp/components/elements/CustomSessionPopup';
import { examDetail, examDetailRequest } from '@apexapp/store/actions/exam';


const data = [
  {
    id: 1,
    title: 'Instruction number 1',
  },
  {
    id: 2,
    title: 'Instruction number 2',
  },
];

const ExamDetail = props => {
  const { id } = props.route.params;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();
  const examDetails = useSelector(state => state.examsReducer.examDetail);
  console.log("hhhh", examDetails.price);

  useEffect(() => {
    dispatch(examDetailRequest(id));

    const subscribe = props.navigation.addListener('focus', () => {
      setIsModalVisible(false);
    });

    return subscribe;
  }, []);

  const changeModalVisible = bool => {
    setIsModalVisible(bool);
  };

  const handleChooseSession = () => {
    changeModalVisible(true);
  };

  const handleEnroll = () => {
    props.navigation.navigate('ExamPayment')
  };

  const handleArrow = () => {
    props.navigation.dispatch(CommonActions.goBack());
  };


  return (

    <View style={styles.maincontainer}>
      <View style={styles.main}>
        <TouchableOpacity onPress={handleArrow} style={styles.left}>
          <Image source={require('@assets/images/leftArrow.png')} />
          <Text style={styles.p}> Exam Details</Text>
        </TouchableOpacity>
        <View style={styles.examDetail}>
          <View style={styles.flex1}>
            <View style={styles.flex2}>
              <Text style={styles.icon}> </Text>
              <View>
                <Text style={styles.duration}>Date</Text>
                <Text style={styles.duration1}>{examDetails.sessions[0].start_date.split('T')[0]}</Text>
              </View>
            </View>

            <View style={styles.fullmark}>
              <Text style={styles.icon}> </Text>
              <View>
                <Text style={styles.fullmarks}>Duration</Text>
                <Text style={styles.fullmarks1}>{examDetails.template.duration}</Text>
              </View>
            </View>
          </View>
          <View style={styles.flex3}>
            <View style={styles.passmark}>
              <Text style={styles.icon}> </Text>
              <View>
                <Text style={styles.passmarks}>Time</Text>
                <Text style={styles.passmarks1}> {examDetails.sessions.length > 1 ? 'Multiple session' : 'Single'}</Text>
              </View>
            </View>
            <View style={styles.mark}>
              <Text style={styles.icon}> </Text>
              <View>
                <Text style={styles.marks}>Full marks</Text>
                <Text style={styles.marks1}>{examDetails.template.full_marks}</Text>
              </View>
            </View>
          </View>
          <View style={styles.pass}>
            <Text style={styles.icon}> </Text>
            <View>
              <Text style={styles.passmarks}>Pass marks</Text>
              <Text style={styles.passmarks1}>{examDetails.template.pass_marks}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.main2}>
        <Text style={styles.instruction}>Instructions</Text>
        {/* {data.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.instruction1}>
                {item.id}. {item.title}
              </Text>
            </View>
          );
        })} */}
        <Text style={styles.instruction1}>{examDetails.template.description}</Text>
      </View>

      <View style={styles.enroll}>
        <View style={styles.enroll0}>
          <Text style={styles.enroll1}>Get enrollment</Text>
          <Text style={styles.enroll2}>
            On clicking Enroll now leads you exam session page
          </Text>
        </View>
        <View style={styles.buttons}>
          {!examDetails.is_enrolled ? (examDetails.sessions.length > 1 ? <CustomButton
            onPress={handleChooseSession}
            style={styles.CustomButton}
            type="theme"
            title={'Choose Session'}
            color="#ffffff"
          />
            :
            <CustomButton
              onPress={handleEnroll}
              style={styles.CustomButton}
              type="theme"
              title={'Enroll now'}
              color="#ffffff"
            />
          ) : <CustomButton
            // onPress={handleEnroll}
            style={styles.CustomButton}
            type="white"
            title={'Enroll now'}
            color="#ffffff"
          />
          }



          <Modal
            transparent={true}
            animationType='slide'
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(true)}
          >
            <CustomSessionPopup
              navigation={props.navigation}
              changeModalVisible={changeModalVisible}
            />
          </Modal>
        </View>
      </View>
    </View >

  );
};

export default ExamDetail;
