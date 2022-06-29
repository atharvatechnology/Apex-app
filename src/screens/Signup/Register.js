import React from 'react';
import {View} from 'react-native';

import RegisterTemplate from '@templates/Register';

const Register = props => {
  return (
    <View>
      <RegisterTemplate {...props} />
    </View>
  );
};

export default Register;
