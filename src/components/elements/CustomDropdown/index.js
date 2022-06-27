/**
* This is a dropdown Component
* @param {String} props.type - type of button
* @param {Function} props.onPress - function to execute on pressing
* @param {String} props.title - text to display in button
* @returns {CustomDropdown}- returns a Dropdown Component
*/

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from '@styles/elements/CustomDropdown.scss';

const CustomDropdown = (props) => {

  return (
    <TouchableOpacity style={[]} onPress={props.onPress}>

    </TouchableOpacity>
  );
}

export default CustomDropdown;