import React from 'react';

import {View} from 'react-native';

import CourseOverviewPage from '@apexapp/components/templates/CourseOverview';

const CourseOverview = props => {
  return (
    <View>
      <CourseOverviewPage {...props} />
    </View>
  );
};

export default CourseOverview;
