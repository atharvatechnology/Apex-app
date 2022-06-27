import React from "react";
import { View } from "react-native";

import VerifyTemplate from "@templates/verify";

const Verify = (props) => {
  return (
    <View>
      <VerifyTemplate {...props} />
    </View>
  );
}

export default Verify;