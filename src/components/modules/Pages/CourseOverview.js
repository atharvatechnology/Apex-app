/**
 * This is  page containing the CourseOverview and other components of the Courses.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {CourseOverview}- returns a module for course overviews
 */

import React from 'react';
import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';

import { CommonActions } from '@react-navigation/native';

import CustomButton from '@components/elements/CustomButton';
import styles from '@styles/modules/Pages/CourseOverview';

const CourseOverview = props => {

  const handleBack = () => {
    props.navigation.dispatch(CommonActions.goBack());
  }

  return (
    <>
      {/* <View style={styles.div}> */}
      <ScrollView style={styles.mainContainer}>
        <View style={styles.main}>
          <TouchableOpacity onPress={handleBack} style={styles.left}>
            <Image source={require('@assets/images/leftArrow.png')} />
            <Text style={styles.p}>Course details</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gap} />

        <View style={styles.main1}>
          <View style={styles.head}>
            <View style={styles.texthead}>
              <Text style={styles.text}>IOE</Text>
            </View>
          </View>
          <View style={styles.img}>
            <Image
              style={styles.image}
              source={require('@assets/images/home.jpeg')}
            />
          </View>
          <View>
            <Text style={styles.p1}>Engineering Entrance (IOE)</Text>
          </View>
          <View>
            <Text style={styles.p2}>
              Apex Education Academy (AEA) has been offering various
              Career-oriented Entrance Preparation Courses including Medical and
              Engineering Preparation asince two decades.
            </Text>
          </View>
          <View style={styles.examDetail}>
            <View style={styles.flex1}>
              <View style={styles.flex2}>
                <Text style={styles.icon}> </Text>
                <View>
                  <Text style={styles.duration}>Date</Text>
                  <Text style={styles.duration1}>29 Jan,2022</Text>
                </View>
              </View>

              <View style={styles.fullmark}>
                <Text style={styles.icon}> </Text>
                <View>
                  <Text style={styles.fullmarks}>Duration</Text>
                  <Text style={styles.fullmarks1}>4 month</Text>
                </View>
              </View>
            </View>
            <View style={styles.pass}>
              <Text style={styles.icon}> </Text>
              <View>
                <Text style={styles.passmarks}>student</Text>
                <Text style={styles.passmarks1}>200+ student</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.gap} />
        <View style={styles.main}>
          <View>
            <Text style={styles.p3}>Course Overview </Text>
          </View>
          <View>
            <Text style={styles.p2}>
              Apex Education Academy (AEA) has been offering various
              Career-oriented Entrance Preparation Courses including Medical and
              Engineering Preparation asince two decades.
            </Text>
          </View>
        </View>
        <View style={{ height: 100 }}></View>
      </ScrollView>
      <View style={styles.gap} />
      <View style={styles.footer}>
        <View style={styles.txt}>
          <Text style={styles.p5}>Get enrollment</Text>
          <Text style={styles.p4}>Enrolls leads you to payment.</Text>
        </View>
        <View>
          <CustomButton
            type="theme"
            title={'Enroll now'}
            style={styles.button}
            color="white"
          />
        </View>
      </View>
      {/* </View> */}
    </>
  );
};
export default CourseOverview;
