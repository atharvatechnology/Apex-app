/**
 * This is  page containing the Exams and other components of the organization.
 * @param {Object} props.navigation - contains all the propeties of react navigation
 * @returns {Exams}- returns a module for Exams
 */

import React, {useState} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RadioButton} from 'react-native-paper';

import CustomButton from '@apexapp/components/elements/CustomButton';
import HeaderSearch from '@apexapp/components/elements/HeaderSearch/HeaderSearch';
import styles from '@styles/modules/Exams/Exams.scss';

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

const Exams = props => {
  const [checked, setChecked] = useState('first');
  const [checked1, setChecked1] = useState();

  const handlereset = () => {
    setChecked('first');
    setChecked1(null);
  };

  return (
    <>
      <View style={styles.maincontainer}>
        <View style={styles.main}>
          <HeaderSearch
            title="Test Exam 1"
            navigation={props.navigation}
            backnav="Exam"
          />

          <View style={styles.card}>
            <Text style={styles.title1}>LIVE 00:60:00</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.text5}>
            {data.map((item, index) => {
              return (
                <>
                  <View style={styles.cards}>
                    <Text style={styles.point}>{item.point}</Text>
                  </View>
                  <View style={styles.img}>
                    <Text style={styles.num}>{item.num}</Text>

                    <Image
                      style={styles.image}
                      source={require('@assets/images/MCQ.png')}
                    />
                  </View>
                  <View style={styles.txt}>
                    <Text style={styles.text}>{item.text}</Text>
                  </View>
                  <View style={styles.txt1}>
                    <RadioButton
                      color="#2E3192"
                      style={styles.radi01}
                      value="first"
                      status={checked === 'first' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('first')}
                    />
                    <Text style={styles.a}>{item.a}</Text>

                    <Text style={styles.text1}>{item.text1}</Text>
                  </View>
                  <View style={styles.txt1}>
                    <RadioButton
                      color="#2E3192"
                      style={styles.radi01}
                      value="first"
                      status={checked === 'second' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('second')}
                    />
                    <Text style={styles.b}>{item.b}</Text>

                    <Text style={styles.text2}>{item.text2}</Text>
                  </View>
                  <View style={styles.txt1}>
                    <RadioButton
                      color="#2E3192"
                      style={styles.radi01}
                      value="first"
                      status={checked === 'third' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('third')}
                    />
                    <Text style={styles.c}>{item.c}</Text>

                    <Text style={styles.text3}>{item.text3}</Text>
                  </View>

                  <View style={styles.txt1}>
                    <RadioButton
                      color="#2E3192"
                      style={styles.radi01}
                      value="first"
                      status={checked === 'fourth' ? 'checked' : 'unchecked'}
                      onPress={() => setChecked('fourth')}
                    />
                    <Text style={styles.d}>{item.d}</Text>

                    <Text style={styles.text4}>{item.text4}</Text>
                  </View>
                  <Text style={styles.hint}>{item.hint}</Text>
                </>
              );
            })}
          </View>
        </View>
        <View style={styles.gap}></View>
        <View style={styles.footer}>
          <View style={styles.txts}>
            <Text style={styles.fottertext}>Questions</Text>
            <Text style={styles.fottertexts}>1/40</Text>
          </View>
          <View>
            <CustomButton
              type="theme"
              title={'Next'}
              style={styles.button}
              color="white"
              font-size="600"
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Exams;
