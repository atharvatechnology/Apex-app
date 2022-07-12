/**
 * This is another profilepopup Component

 * @param {Function} props.onPress - function to execute on pressing

 * @returns {CustomProfilePopup2}- returns a Edit Info popup Component
 */

import React, {useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import Profile from '@apexapp/components/modules/Profile/Profile';
import CustomTextInput from '@apexapp/components/elements/CustomTextInput';
import CustomButton from '@apexapp/components/elements/CustomButton';

import styles from '@styles/elements/CustomProfilePopup1';

const CustomProfilePopup2 = props => {
  const [text, setText] = useState(props.data.name);
  const [number, setNumber] = useState(props.data.number);
  const [gmail, setGmail] = useState(props.data.gmail);

  const handleEditInfo = () => {
    props.navigation.navigate('');
  };
  const closeModal = bool => {
    props.changeModalVisible2(bool);
  };
  // console.log('data', props.data);
  return (
    <TouchableOpacity disabled={true} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.flex1}>
          <Text style={styles.title}>Profile Info</Text>
          <TouchableOpacity onPress={() => closeModal(false, 'Cancel')}>
            <Text style={styles.close}>Close</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.line}></Text>
        </View>
        <View>
          <View style={styles.txt}>
            <CustomTextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              color="black"
            />
          </View>
        </View>
        <View>
          <CustomTextInput
            style={styles.number}
            onChangeText={setNumber}
            value={number}
            keyboardType="numeric"
          />
        </View>
        <View>
          <CustomTextInput
            style={styles.input}
            onChangeText={setGmail}
            value={gmail}
          />
        </View>

        <CustomButton
          onPress={handleEditInfo}
          style={styles.CustomButton}
          title={'Save'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CustomProfilePopup2;
