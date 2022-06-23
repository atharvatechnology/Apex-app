import React from "react";
import { View, Text, ShadowPropTypesIOS } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import styles from '@styles/elements/CustomButton.scss';

const CustomButton = (props) => {
  let container = styles.container;
  let text = styles.text;

  switch (props.type) {
    case 'white':
      container = [container, styles.whiteBack];
      text = [styles.text];
      break;

    case 'theme':
      container = [container, styles.themeBack];
      text = [styles.white];
      break;
    default:
      container = styles.container;
  }

  return (
    <TouchableOpacity style={container} onPress={props.onPress}>
      <Text style={text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;