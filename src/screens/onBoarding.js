import React from "react";
import { View } from "react-native";

import OnBoardingTemplate from "@templates/onBoarding";

const OnBoarding = (props) => {
  return (
    <View>
      <OnBoardingTemplate {...props} />
    </View>
  );
}

export default OnBoarding;