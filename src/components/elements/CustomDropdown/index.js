/**
* This is a dropdown Component
* @param {String} props.type - type of button
* @param {Function} props.onPress - function to execute on pressing
* @param {String} props.title - text to display in button
* @returns {CustomDropdown}- returns a Dropdown Component
*/

import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

import styles from '@styles/elements/CustomDropdown.scss';
import { ScrollView } from "react-native-gesture-handler";



const CustomDropdown = ({
  data = [],
  value = 0,
  onSelect = () => { },
  label = "",
  id = {},

}) => {

  const [showOption, setShowOption] = useState(false)

  const onSelectedItem = (id) => {
    setShowOption(false)
    onSelect(id)
  }
  return (
    <View style={styles.CustomDropdown}>

      <TouchableOpacity
        onPress={() => setShowOption(!showOption)}
        style={styles.dropDown}>
        <Text style={styles.dropdowntext}>{!!value ? data.filter((el) => el.id === value)[0].name : label}</Text>
        <Image
          style={[styles.dropdownicon, {
            transform: [{ rotate: showOption ? '180deg' : '0deg' }]
          }]}
          source={require('@assets/images/down-arrow.png')} />

      </TouchableOpacity>
      {showOption && (<View style={[styles.dropdowncontainer, { elevation: 10, }]}>
        {data.map((id, i) => {
          return (
            <TouchableOpacity key={String(i)}
              onPress={() => onSelectedItem(id)}
              style={styles.dropdownelements}
            >
              <Text style={styles.dropdownname}>{id.name}</Text>

            </TouchableOpacity>
          )
        })}
      </View>)}



    </View>




  );
}




export default CustomDropdown;