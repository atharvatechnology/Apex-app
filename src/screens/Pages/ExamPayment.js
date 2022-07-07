import React from 'react';

import {View} from 'react-native';

import ExamPaymentPage from '@apexapp/components/templates/ExamPayment';

const ExamPayment = props => {
  return (
    <View>
      <ExamPaymentPage {...props} />
    </View>
  );
};

export default ExamPayment;
