/**
 * This is a filterpopup Component

 * @param {Function} props.onPress - function to execute on pressing

 * @returns {CustomButtonPopup}- returns a popup Component
 */

import React, { useState } from 'react';

import CustomButton from '../CustomButton';
import styles from '@styles/elements/CustomButtonPopup.scss';

import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

const CustomButtonPopup = props => {
  const [checked, setChecked] = useState('first');
  const [checked1, setChecked1] = useState();

  closeModal = bool => {
    props.changeModalVisible(bool);
  };

  const handlefilter = bool => {
    closeModal(true);
    props.changeModalVisible(bool);
  };
  const handlereset = () => {
    setChecked('first');
    setChecked1(null);
  };
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.flex1}>
          <Text style={styles.title}>Filter</Text>
          <TouchableOpacity onPress={() => closeModal(false, 'Cancel')}>
            <Text style={styles.close}>Close</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.line}></Text>

        <View>
          <Text style={styles.type}>Type</Text>
          <View style={styles.type1}>
            <View style={styles.flex3}>
              <RadioButton
                color="#2E3192"
                style={styles.radi01}
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={styles.type2}>All</Text>
            </View>
            <View style={styles.flex3}>
              <RadioButton
                color="#2E3192"
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text style={styles.type3}>Live</Text>
            </View>
            <View style={styles.flex3}>
              <RadioButton
                color="#2E3192"
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
              <Text style={styles.type4}>Practice</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.category}>Category</Text>
          <View style={styles.category1}>
            <View style={styles.flex3}>
              <RadioButton
                color="#2E3192"
                value="fourth"
                status={checked1 === 'fourth' ? 'checked' : 'unchecked'}
                onPress={() => setChecked1('fourth')}
              />
              <Text style={styles.category2}>Entrance preparation</Text>
            </View>
            <View style={styles.flex3}>
              <RadioButton
                color="#2E3192"
                value="third"
                status={checked1 === 'fifth' ? 'checked' : 'unchecked'}
                onPress={() => setChecked1('fifth')}
              />
              <Text style={styles.category3}>Loksewa preparation</Text>
            </View>
          </View>
        </View>

        <View style={styles.flex2}>
          <CustomButton
            style={styles.CustomButton1}
            type="white"
            title={'Reset filter'}
            onPress={handlereset}
            color="#000000"
          />
          <CustomButton
            style={styles.CustomButton2}
            type="theme"
            title={'Apply filter'}
            onPress={handlefilter}
            color="#ffffff"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButtonPopup;
