import React from 'react';

import {View} from 'react-native';

import ExamsPage from '@apexapp/components/modules/Exams/Exams';

const Exams = props => {
  return (
    <View>
      <ExamsPage {...props} />
    </View>
  );
};

export default Exams;
