import React from 'react';
import {View} from 'react-native';

import VerifyNewPassword from '@templates/NewPassword';

const NewPassword = props => {
  return (
    <View>
      <VerifyNewPassword {...props} />
    </View>
  );
};

export default NewPassword;
