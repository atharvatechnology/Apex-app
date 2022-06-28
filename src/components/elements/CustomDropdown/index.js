/**
* This is a dropdown Component
* @param {String} props.type - type of button
* @param {Function} props.onPress - function to execute on pressing
* @param {String} props.title - text to display in button
* @returns {CustomDropdown}- returns a Dropdown Component
*/

import React, { useState } from "react";
import { Image, Card, View, Text, TouchableOpacity } from "react-native";

import styles from '@styles/elements/CustomDropdown.scss';



const CustomDropdown = ({
  data = [],
  value = {},
  onSelect = () => { },
  label = ""
}) => {

  const [showOption, setShowOption] = useState(false)

  const onSelectedItem = (val) => {
    setShowOption(false)
    onSelect(val)
  }
  return (
    <View style={styles.CustomDropdown}>
      <TouchableOpacity
        onPress={() => setShowOption(!showOption)}
        style={styles.dropDown}>
        <Text style={styles.dropdowntext}>{!!value ? value?.name : label}</Text>

      </TouchableOpacity>
      {showOption && (<View style={[styles.dropdowncontainer, { elevation: 10, }]}>
        {data.map((val, i) => {
          return (
            <TouchableOpacity key={String(i)}
              onPress={() => onSelectedItem(val)}
              style={styles.dropdownelements}
            >
              <Text style={styles.dropdownname}>{val.name}</Text>
            </TouchableOpacity>
          )
        })}
      </View>)}



    </View>




  );
}




export default CustomDropdown;