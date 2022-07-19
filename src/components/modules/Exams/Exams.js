/**
 * This is  page containing the Exams and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {Exams}- returns a module for Exams
 */

import React, { Fragment, useEffect, useState } from 'react';

import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';

import CustomButton from '@apexapp/components/elements/CustomButton';
import HeaderSearch from '@apexapp/components/elements/HeaderSearch/HeaderSearch';
import styles from '@styles/modules/Exams/Exams.scss';
import { useDispatch, useSelector } from 'react-redux';
import { takeExamDetailRequest } from '@apexapp/store/actions/exam';
import { HEIGHT } from '@apexapp/utils/constants';

const data = [
  {
    point: '1 Points',
    num: '1.',
    image: '',
    text: 'Direction cosine of a line lying on both XY and XY plane is:',
    text1: '4 same atoms or group are attached to 4 different C atoms. ',
    text2: '4 same atoms or group are attached to 4 different C atoms. ',
    text3: '4 same atoms or group are attached to 4 different C atoms.',
    text4: '4 same atoms or group are attached to 4 different C atoms.',
    a: 'a.',
    b: 'b.',
    c: 'c.',
    d: 'd.',
    hint: 'SHOW HINTS',
  },
];

const getIndex = (index) => {
  switch (index) {
    case 0:
      return 'a.';

    case 1:
      return 'b.';

    case 2:
      return 'c.';

    case 3:
      return 'd.';

    default:
      return 'a.';
  }
}

const TakeExams = props => {
  const { id } = props.route.params;

  const [checked, setChecked] = useState(0);
  const [checked1, setChecked1] = useState();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handlereset = () => {
    setChecked('first');
    setChecked1(null);
  };

  const details = useSelector(state => state.examsReducer.takeExamDetails);
  const auth = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = props.navigation.addListener('focus', () => {
      dispatch(takeExamDetailRequest(id, auth.access_token));
    });

    return subscribe;
  }, []);

  return (
    <>
      <ScrollView stickyHeaderIndices={[0]} style={styles.maincontainer}>
        {/* {console.log("gggg", details)} */}
        <View style={styles.main}>
          <HeaderSearch
            title={details.name}
            navigation={props.navigation}
            backnav="Exam"
          />

          <View style={styles.card}>
            <Text style={styles.title1}>LIVE 00:60:00</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.text5}>

            <Fragment>
              <View style={styles.cards}>
                <Text style={styles.point}>1 points</Text>
              </View>
              <View style={styles.img}>
                <Text style={styles.num}>{currentQuestion + 1}</Text>

                <Image
                  style={styles.image}
                  source={{ uri: details?.questions[currentQuestion]?.img }}
                />
              </View>
              <View style={styles.txt}>
                <Text style={styles.text}>{details?.questions[currentQuestion]?.detail}</Text>
              </View>
              {
                details?.questions[currentQuestion]?.options.map((item, index) => <View style={styles.txt1}>
                  <RadioButton
                    color="#2E3192"
                    style={styles.radi01}
                    value={item.id}
                    status={item.id === checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(item.id)}
                  />
                  <Text style={styles.a}>{getIndex(index)}</Text>

                  <Text style={styles.text1}>{item.detail}</Text>
                </View>
                )}

              <Text style={styles.hint}>bvsdjkbv</Text>
            </Fragment>

          </View>
        </View>
        <View style={{ height: HEIGHT * 0.5 }}></View>
        <View style={styles.gap}></View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.txts}>
          <Text style={styles.fottertext}>Questions</Text>
          <Text style={styles.fottertexts}>{currentQuestion + 1}/{details.questions.length}</Text>
        </View>
        <View style={styles.nextContainer}>
          {currentQuestion > 0 && <CustomButton
            type="theme"
            title={'Previous'}
            onPress={() => { if (currentQuestion - 1 > -1) { setCurrentQuestion(prevState => prevState - 1) } }}

            style={styles.button}
            color="white"
            font-size="600"
          />}
          {currentQuestion + 1 !== details.questions.length && <CustomButton
            type="theme"
            title={'Next'}
            onPress={() => { if (currentQuestion + 1 <= details.questions.length) { setCurrentQuestion(prevState => prevState + 1) } }}
            style={styles.button}
            color="white"
            font-size="600"
          />}
        </View>
      </View>

    </>
  );
};

export default TakeExams;
