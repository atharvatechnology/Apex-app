import React from 'react';

import {View} from 'react-native';

import CoursePaymentPage from '@apexapp/components/templates/CoursePayment';

const CoursePayment = props => {
  return (
    <View>
      <CoursePaymentPage {...props} />
    </View>
  );
};

export default CoursePayment;
