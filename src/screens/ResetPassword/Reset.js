import React from 'react';
import {View} from 'react-native';

import VerifyReset from '@templates/Reset';
const Reset = props => {
  return (
    <View>
      <VerifyReset {...props} />
    </View>
  );
};

export default Reset;
