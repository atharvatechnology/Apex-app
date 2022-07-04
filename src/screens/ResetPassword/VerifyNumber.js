import React from 'react';
import {View} from 'react-native';

import Number from '@apexapp/components/templates/VerifyNumber';

const verifyNumber = props => {
  return (
    <View>
      <Number {...props} />
    </View>
  );
};

export default verifyNumber;
