import React from 'react';
import {View} from 'react-native';

import InterestTemplate from '@templates/Intreset';

const Interest = props => {
  return (
    <View>
      <InterestTemplate {...props} />
    </View>
  );
};

export default Interest;
