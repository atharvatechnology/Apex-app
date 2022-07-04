import React from 'react';
import {View} from 'react-native';

import VerifyNumber from '@apexapp/components/modules/ResetPassword/VerifyNumber';

const Number = props => {
  return (
    <View>
      <VerifyNumber {...props} />
    </View>
  );
};

export default Number;
