/**
* This is a template for Walkthrough screen. It contains all the modules used in this template.
* @param {Object} props - contains all the propeties of react navigation received from screens.
* @returns {WalkthroughTemplate}- returns a template
*/

import React from "react";
import { View } from "react-native";

import Walkthrough from "@modules/walkthrough/walkthrough";

const WalkthroughTemplate = (props) => {
  return (
    <View>
      <Walkthrough {...props} />
    </View>
  );
}

export default WalkthroughTemplate;